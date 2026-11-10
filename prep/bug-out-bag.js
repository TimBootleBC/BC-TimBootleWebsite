(function () {
  const STORAGE_KEY = "timbootle-prep-bug-out-bag-v1";
  const OZ_PER_LB = 16;
  const KG_PER_OZ = 0.028349523125;

  // Water: USGS uses 8.34 lb per US gallon and 1 kg per liter.
  // 3 liters of water ≈ 6.61 lb ≈ 105.8 oz (water only, not the bottles).
  const ITEMS = [
    { id: "bag", category: "The bag", name: "Backpack or duffel (empty)", note: "Typical estimate for a mid-size pack. Weigh yours if you can.", oz: 32, kind: "estimate" },
    { id: "water-3l", category: "Water", name: "Drinking water, 3 one-liter bottles", note: "Verified water weight only (USGS: 1 kg/L, also 8.34 lb/US gal). Does not include the empty bottles.", oz: 105.8, kind: "verified" },
    { id: "water-filter", category: "Water", name: "Compact water filter or treatment tablets", note: "Typical estimate for a small squeeze filter or a tablet pack. Edit to match your kit.", oz: 3, kind: "estimate" },
    { id: "food-3day", category: "Food", name: "Ready-to-eat food for about 3 days", note: "Typical estimate for bars and pouches. Weigh what you actually pack.", oz: 48, kind: "estimate" },
    { id: "food-infant", category: "Food", name: "Infant formula, food, or bottles (if needed)", note: "Typical estimate only; skip or edit if this does not apply.", oz: 16, kind: "estimate" },
    { id: "med-kit", category: "Medical and first aid", name: "Compact first-aid kit", note: "Typical estimate for a small pre-built kit.", oz: 12, kind: "estimate" },
    { id: "med-rx", category: "Medical and first aid", name: "Prescription medicines and copies", note: "Typical estimate. Ready.gov and the Red Cross suggest about a 7-day supply if you can.", oz: 4, kind: "estimate" },
    { id: "med-glasses", category: "Medical and first aid", name: "Spare glasses or contacts and case", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "med-mask", category: "Medical and first aid", name: "Dust masks or respirators (2)", note: "Typical estimate.", oz: 1, kind: "estimate" },
    { id: "tool-multi", category: "Tools", name: "Multi-tool or pocket knife", note: "Typical estimate.", oz: 7, kind: "estimate" },
    { id: "tool-gloves", category: "Tools", name: "Work gloves", note: "Typical estimate.", oz: 4, kind: "estimate" },
    { id: "tool-whistle", category: "Tools", name: "Whistle", note: "Typical estimate.", oz: 0.5, kind: "estimate" },
    { id: "tool-tape", category: "Tools", name: "Small roll of duct tape", note: "Typical estimate.", oz: 2, kind: "estimate" },
    { id: "shelter-mylar", category: "Shelter and warmth", name: "Emergency (mylar) blanket", note: "Typical estimate for a full-size foil blanket.", oz: 2.5, kind: "estimate" },
    { id: "shelter-blanket", category: "Shelter and warmth", name: "Lightweight compact blanket or fleece", note: "Typical estimate.", oz: 12, kind: "estimate" },
    { id: "clothes-change", category: "Clothing", name: "Change of clothes", note: "Typical estimate for one outfit. Wear sturdy shoes; do not evacuate in flip-flops.", oz: 20, kind: "estimate" },
    { id: "clothes-socks", category: "Clothing", name: "Spare socks", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "clothes-underwear", category: "Clothing", name: "Spare underwear", note: "Typical estimate.", oz: 2, kind: "estimate" },
    { id: "clothes-warm", category: "Clothing", name: "Warm layer", note: "Typical estimate for a light fleece or similar.", oz: 10, kind: "estimate" },
    { id: "clothes-rain", category: "Clothing", name: "Rain gear", note: "Typical estimate for a compact jacket or poncho.", oz: 8, kind: "estimate" },
    { id: "light-headlamp", category: "Light and power", name: "Headlamp or flashlight", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "light-batteries", category: "Light and power", name: "Spare batteries", note: "Typical estimate for a small set.", oz: 3, kind: "estimate" },
    { id: "light-bank", category: "Light and power", name: "Charged power bank and cable", note: "Typical estimate for a ~20,000 mAh bank plus a cable. Weigh yours if you can.", oz: 14, kind: "estimate" },
    { id: "comm-radio", category: "Communications", name: "Battery or crank NOAA / AM-FM radio", note: "Typical estimate.", oz: 8, kind: "estimate" },
    { id: "comm-map", category: "Communications", name: "Paper map of the area", note: "Typical estimate.", oz: 2, kind: "estimate" },
    { id: "comm-list", category: "Communications", name: "Paper contact list and family-plan copy", note: "Typical estimate.", oz: 1, kind: "estimate" },
    { id: "hygiene-kit", category: "Hygiene and sanitation", name: "Travel hygiene kit (toothbrush, soap, wipes)", note: "Typical estimate.", oz: 6, kind: "estimate" },
    { id: "hygiene-sanitizer", category: "Hygiene and sanitation", name: "Hand sanitizer, small bottle", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "hygiene-personal", category: "Hygiene and sanitation", name: "Menstrual, infant, or incontinence supplies (if needed)", note: "Typical estimate. Skip or edit if this does not apply.", oz: 4, kind: "estimate" },
    { id: "hygiene-waste", category: "Hygiene and sanitation", name: "Toilet paper or waste bags (small pack)", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "docs-pouch", category: "Documents and money", name: "Waterproof pouch with document copies", note: "Typical estimate, including the pouch.", oz: 6, kind: "estimate" },
    { id: "docs-cash", category: "Documents and money", name: "Cash in small bills, house and car keys", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "pet-food", category: "Pets (optional)", name: "Pet food for about 3 days", note: "Typical estimate. Weigh the food you actually pack.", oz: 24, kind: "estimate" },
    { id: "pet-bowl", category: "Pets (optional)", name: "Collapsible bowl", note: "Typical estimate.", oz: 2, kind: "estimate" },
    { id: "pet-leash", category: "Pets (optional)", name: "Spare leash or harness with ID", note: "Typical estimate.", oz: 6, kind: "estimate" },
    { id: "pet-meds", category: "Pets (optional)", name: "Pet medicines and copies of records", note: "Typical estimate.", oz: 3, kind: "estimate" },
    { id: "pet-waste", category: "Pets (optional)", name: "Waste bags, litter, or cleanup supplies", note: "Typical estimate.", oz: 4, kind: "estimate" },
    { id: "pet-carrier", category: "Pets (optional)", name: "Pet carrier (often carried separately)", note: "Typical estimate. Include this in the total only if you will carry it with the bag.", oz: 80, kind: "estimate" }
  ];

  const root = document.getElementById("bob-app");
  if (!root) return;

  function trimNum(n, digits) {
    const v = Number(n);
    if (!Number.isFinite(v)) return "0";
    return String(Number(v.toFixed(digits)));
  }

  function formatWeight(oz) {
    const lb = oz / OZ_PER_LB;
    const kg = oz * KG_PER_OZ;
    return `${trimNum(oz, 1)} oz · ${trimNum(lb, 2)} lb · ${trimNum(kg, 2)} kg`;
  }

  function defaultState() {
    const items = {};
    for (const item of ITEMS) {
      items[item.id] = { checked: false, oz: item.oz };
    }
    return { limit: "", items };
  }

  function loadState() {
    const base = defaultState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      if (saved && typeof saved.limit === "string") base.limit = saved.limit;
      else if (saved && saved.limit != null) base.limit = String(saved.limit);
      if (saved && saved.items && typeof saved.items === "object") {
        for (const item of ITEMS) {
          const row = saved.items[item.id];
          if (!row || typeof row !== "object") continue;
          if (typeof row.checked === "boolean") base.items[item.id].checked = row.checked;
          const oz = Number(row.oz);
          if (Number.isFinite(oz) && oz >= 0) base.items[item.id].oz = oz;
        }
      }
    } catch (err) {
      return defaultState();
    }
    return base;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      /* ignore quota or private-mode errors */
    }
  }

  let state = loadState();

  function checkedOunces() {
    let total = 0;
    for (const item of ITEMS) {
      const row = state.items[item.id];
      if (row.checked) total += Number(row.oz) || 0;
    }
    return total;
  }

  function updateSummary() {
    const oz = checkedOunces();
    const totalEl = document.getElementById("bob-total");
    const remainEl = document.getElementById("bob-remaining");
    const warnEl = document.getElementById("bob-warning");
    if (totalEl) totalEl.textContent = formatWeight(oz);
    const limit = Number(state.limit);
    const hasLimit = state.limit !== "" && Number.isFinite(limit) && limit > 0;
    if (remainEl) {
      if (!hasLimit) {
        remainEl.textContent = "Set a pack-weight limit to compare against your checked items.";
      } else {
        const remainingOz = limit * OZ_PER_LB - oz;
        if (remainingOz >= 0) {
          remainEl.textContent = `${formatWeight(remainingOz)} remaining under a ${trimNum(limit, 2)} lb limit.`;
        } else {
          remainEl.textContent = `${formatWeight(-remainingOz)} over a ${trimNum(limit, 2)} lb limit.`;
        }
      }
    }
    const over = hasLimit && oz > limit * OZ_PER_LB + 1e-9;
    if (warnEl) {
      warnEl.hidden = !over;
    }
    const summary = document.getElementById("bob-summary");
    if (summary) summary.classList.toggle("is-over", over);
  }

  function render() {
    const groups = [];
    let current = null;
    for (const item of ITEMS) {
      if (!current || current.name !== item.category) {
        current = { name: item.category, items: [] };
        groups.push(current);
      }
      current.items.push(item);
    }

    const parts = [];
    parts.push('<div class="prep-bob" id="bob-checklist">');
    parts.push('<div class="prep-bob-summary" id="bob-summary">');
    parts.push('<div class="prep-bob-summary-grid">');
    parts.push('<label class="prep-bob-limit"><span>Pack-weight limit (pounds)</span>');
    parts.push(`<input type="number" id="bob-limit" inputmode="decimal" min="0" step="0.1" value="${escapeAttr(state.limit)}" aria-describedby="bob-limit-hint">`);
    parts.push("</label>");
    parts.push('<div class="prep-bob-totals">');
    parts.push('<p class="prep-bob-total">Checked weight: <strong id="bob-total">0 oz</strong></p>');
    parts.push('<p id="bob-remaining"></p>');
    parts.push('<p class="prep-bob-warning" id="bob-warning" hidden role="alert">Over your pack-weight limit. Uncheck items, reduce a weight, or raise the limit to a load you can actually carry.</p>');
    parts.push("</div></div>");
    parts.push('<p class="prep-bob-hint" id="bob-limit-hint">Only checked items count toward the total. Leave the limit blank if you do not want a comparison.</p>');
    parts.push('<p class="prep-bob-actions"><button type="button" class="button prep-bob-reset" id="bob-reset">Reset checklist</button></p>');
    parts.push("</div>");

    for (const group of groups) {
      const slug = group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      parts.push(`<fieldset class="prep-bob-group" id="bob-${slug}">`);
      parts.push(`<legend>${escapeHtml(group.name)}</legend>`);
      parts.push('<ul class="prep-bob-list">');
      for (const item of group.items) {
        const row = state.items[item.id];
        const kind = item.kind === "verified" ? "Verified weight" : "Typical estimate";
        parts.push("<li class=\"prep-bob-item\">");
        parts.push('<div class="prep-bob-item-main">');
        parts.push(`<label class="prep-bob-check"><input type="checkbox" data-bob-check="${escapeAttr(item.id)}"${row.checked ? " checked" : ""}> <span>${escapeHtml(item.name)}</span></label>`);
        parts.push(`<p class="prep-bob-note">${escapeHtml(item.note)} <span class="prep-bob-kind">${escapeHtml(kind)}</span></p>`);
        parts.push("</div>");
        parts.push('<div class="prep-bob-weight">');
        parts.push(`<label><span>Weight (oz)</span><input type="number" inputmode="decimal" min="0" step="0.1" value="${escapeAttr(String(row.oz))}" data-bob-oz="${escapeAttr(item.id)}" aria-label="Weight in ounces for ${escapeAttr(item.name)}"></label>`);
        parts.push(`<p class="prep-bob-converted" data-bob-converted="${escapeAttr(item.id)}">${formatWeight(row.oz)}</p>`);
        parts.push("</div></li>");
      }
      parts.push("</ul></fieldset>");
    }
    parts.push("</div>");
    root.innerHTML = parts.join("");
    updateSummary();
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  root.addEventListener("change", (event) => {
    const check = event.target.closest("[data-bob-check]");
    if (check) {
      const id = check.getAttribute("data-bob-check");
      if (state.items[id]) {
        state.items[id].checked = check.checked;
        saveState();
        updateSummary();
      }
      return;
    }
    const weight = event.target.closest("[data-bob-oz]");
    if (weight) {
      const id = weight.getAttribute("data-bob-oz");
      const oz = Number(weight.value);
      if (state.items[id] && Number.isFinite(oz) && oz >= 0) {
        state.items[id].oz = oz;
        const converted = root.querySelector(`[data-bob-converted="${id}"]`);
        if (converted) converted.textContent = formatWeight(oz);
        saveState();
        updateSummary();
      }
    }
  });

  root.addEventListener("input", (event) => {
    if (event.target.id === "bob-limit") {
      state.limit = event.target.value;
      saveState();
      updateSummary();
      return;
    }
    const weight = event.target.closest("[data-bob-oz]");
    if (weight) {
      const id = weight.getAttribute("data-bob-oz");
      const oz = Number(weight.value);
      const converted = root.querySelector(`[data-bob-converted="${id}"]`);
      if (converted && Number.isFinite(oz) && oz >= 0) {
        converted.textContent = formatWeight(oz);
      }
    }
  });

  root.addEventListener("click", (event) => {
    if (!event.target.closest("#bob-reset")) return;
    state = defaultState();
    saveState();
    render();
  });

  render();
})();
