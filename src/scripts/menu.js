function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  function toggleMenu(e) {
    if (e) e.preventDefault();
    const isOpen = menu.classList.contains("translate-y-0");
    if (isOpen) {
      menu.classList.remove("translate-y-0");
      menu.classList.add("-translate-y-full");
      document.body.classList.remove("overflow-hidden");
    } else {
      menu.classList.remove("-translate-y-full");
      menu.classList.add("translate-y-0");
      document.body.classList.add("overflow-hidden");
    }
  }

  btn.addEventListener("click", toggleMenu);
  btn.addEventListener("touchend", toggleMenu);

  window.closeMobileMenu = () => {
    menu.classList.add("-translate-y-full");
    menu.classList.remove("translate-y-0");
    document.body.classList.remove("overflow-hidden");
  };
}

setupMobileMenu();

document.addEventListener("astro:after-swap", () => {
  setupMobileMenu();
});
