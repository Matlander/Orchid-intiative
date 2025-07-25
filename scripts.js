document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#sliding-menu a");
  const toggleButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("sliding-menu");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
