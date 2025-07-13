function setupMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
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
  });

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
