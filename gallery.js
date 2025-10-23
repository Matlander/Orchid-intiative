document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slidesContainer || slides.length === 0) return; // safety check

  // Function to show current slide
  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    slidesContainer.style.transition = "transform 0.8s ease-in-out";
  }

  // Update on next/prev click
  nextBtn?.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  prevBtn?.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  // Handle window resizing (maintain proper position)
  window.addEventListener("resize", () => showSlide(slideIndex));

  // Auto-slide every 5 seconds
  let autoSlide = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);

  // Pause auto-slide when hovering (optional UX enhancement)
  slidesContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slidesContainer.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 5000);
  });

  // Initialize first slide
  showSlide(slideIndex);
});
