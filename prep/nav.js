(function () {
  const toggle = document.querySelector(".prep-nav-toggle");
  const menu = document.querySelector(".prep-nav-menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
})();
