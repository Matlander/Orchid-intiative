document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("sliding-menu");
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll("#sliding-menu a");

  if (!navMenu || !toggleButton) return; // safety check

  // Toggle menu open/close
  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // Toggle aria-expanded for accessibility
    const isOpen = navMenu.classList.contains("open");
    toggleButton.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });

  // Optional: Close menu when clicking outside of it
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
      navMenu.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
