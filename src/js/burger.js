document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !isOpen);
    burger.classList.toggle("open");
    nav.classList.toggle("active");
  });

  // Close menu when clicking on a link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      nav.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
    });
  });
});
