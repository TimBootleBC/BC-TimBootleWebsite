(function () {
  const nav = document.querySelector(".prep-nav");
  const toggle = document.querySelector(".prep-nav-toggle");
  const menu = document.querySelector(".prep-nav-menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    if (nav) {
      // Lets the open mobile panel cap its height and scroll on its own.
      nav.classList.toggle("is-menu-open", open);
      if (!open) {
        nav.scrollTop = 0;
      }
    }
  });
})();
