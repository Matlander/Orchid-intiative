document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("sliding-menu");
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll("#sliding-menu a");

  if (!navMenu || !toggleButton) return; 


  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  
    const isOpen = navMenu.classList.contains("open");
    toggleButton.setAttribute("aria-expanded", isOpen);
  });


  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });


  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      navMenu.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
