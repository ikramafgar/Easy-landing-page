document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const crossButton = document.querySelector(".cross-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("active");
    hamburgerButton.classList.toggle("active");
    crossButton.classList.toggle("active");
  };

  hamburgerButton.addEventListener("click", toggleMenu);
  crossButton.addEventListener("click", toggleMenu);
});
