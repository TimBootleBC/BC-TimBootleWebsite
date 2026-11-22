(function () {
  var form = document.getElementById("trip-filter");
  if (!form) return;

  var queryInput = document.getElementById("trip-filter-query");
  var status = document.getElementById("trip-filter-status");
  var empty = document.getElementById("trip-filter-empty");
  var cards = Array.prototype.slice.call(
    document.querySelectorAll("article.adventure-card[data-tags]")
  );
  var total = cards.length;
  var weekendCards = Array.prototype.slice.call(
    document.querySelectorAll("article.weekend-card")
  );
  var dayHeading = document.getElementById("day-trips");
  var weekendHeading = document.getElementById("weekend-getaways");
  var weekendIntro = document.querySelector(".weekend-intro");
  var weekendToc = document.querySelector(".weekend-toc");
  var jumpItems = Array.prototype.slice.call(
    document.querySelectorAll(".adventure-jump a")
  );

  function tagsOf(card) {
    return (card.getAttribute("data-tags") || "")
      .split(",")
      .map(function (tag) { return tag.trim(); })
      .filter(Boolean);
  }

  function selectedTags() {
    return Array.prototype.slice
      .call(form.querySelectorAll('input[name="tag"]:checked'))
      .map(function (input) { return input.value; });
  }

  function normalize(text) {
    return (text || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function searchableText(card) {
    var parts = [];
    var title = card.querySelector("h3, h4");
    if (title) parts.push(title.textContent);
    var meta = card.querySelector(".adventure-meta");
    if (meta) parts.push(meta.textContent);
    Array.prototype.forEach.call(card.querySelectorAll("p"), function (p) {
      if (p.classList.contains("adventure-meta")) return;
      if (p.querySelector("a[href*='youtube.com']")) return;
      parts.push(p.textContent);
    });
    var stops = card.querySelector(".map-stops");
    if (stops) parts.push(stops.textContent);
    return normalize(parts.join(" "));
  }

  var searchCache = cards.map(function (card) {
    return { card: card, tags: tagsOf(card), text: searchableText(card) };
  });

  function setHidden(el, hide) {
    if (!el) return;
    if (hide) el.setAttribute("hidden", "");
    else el.removeAttribute("hidden");
  }

  function applyFilter() {
    var needed = selectedTags();
    var query = normalize(queryInput ? queryInput.value : "");
    var shown = 0;
    var shownDay = 0;
    var shownWeekend = 0;

    searchCache.forEach(function (item) {
      var ok = needed.every(function (tag) {
        return item.tags.indexOf(tag) !== -1;
      });
      if (ok && query && item.text.indexOf(query) === -1) ok = false;
      setHidden(item.card, !ok);
      if (ok) {
        shown += 1;
        if (item.card.closest("article.weekend-card")) shownWeekend += 1;
        else shownDay += 1;
      }
    });

    weekendCards.forEach(function (weekend) {
      var any = weekend.querySelector("article.adventure-card[data-tags]:not([hidden])");
      setHidden(weekend, !any);
      var id = weekend.id;
      if (weekendToc && id) {
        var tocLink = weekendToc.querySelector('a[href="#' + id + '"]');
        if (tocLink && tocLink.parentElement) {
          setHidden(tocLink.parentElement, !any);
        }
      }
    });

    setHidden(dayHeading, shownDay === 0);
    setHidden(weekendHeading, shownWeekend === 0);
    setHidden(weekendIntro, shownWeekend === 0);
    setHidden(weekendToc, shownWeekend === 0);

    jumpItems.forEach(function (link) {
      var href = link.getAttribute("href");
      var hide = false;
      if (href === "#day-trips") hide = shownDay === 0;
      if (href === "#weekend-getaways") hide = shownWeekend === 0;
      if (link.parentElement) setHidden(link.parentElement, hide);
    });
    var jump = document.querySelector(".adventure-jump");
    if (jump) setHidden(jump, shownDay === 0 && shownWeekend === 0);

    if (status) status.textContent = "Showing " + shown + " of " + total;
    setHidden(empty, shown !== 0);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    applyFilter();
    if (queryInput) queryInput.blur();
  });
  form.addEventListener("change", applyFilter);
  form.addEventListener("reset", function (event) {
    event.preventDefault();
    Array.prototype.forEach.call(form.querySelectorAll('input[name="tag"]'), function (input) {
      input.checked = false;
    });
    if (queryInput) queryInput.value = "";
    applyFilter();
  });
  if (queryInput) {
    queryInput.addEventListener("input", applyFilter);
  }

  var labelToTag = {};
  Array.prototype.forEach.call(form.querySelectorAll('input[name="tag"]'), function (input) {
    var label = input.parentElement ? input.parentElement.textContent : "";
    label = normalize(label.replace(/\(\d+\)\s*$/, ""));
    if (label) labelToTag[label] = input.value;
  });

  cards.forEach(function (card) {
    Array.prototype.forEach.call(card.querySelectorAll(".tag-chips li"), function (chip) {
      var tag = labelToTag[normalize(chip.textContent)];
      if (!tag) return;
      chip.classList.add("is-filter-chip");
      chip.setAttribute("role", "button");
      chip.setAttribute("tabindex", "0");
      chip.setAttribute("title", "Filter by " + chip.textContent.trim());
      function tick() {
        var box = form.querySelector('input[name="tag"][value="' + tag + '"]');
        if (!box) return;
        box.checked = true;
        applyFilter();
      }
      chip.addEventListener("click", tick);
      chip.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          tick();
        }
      });
    });
  });
})();
