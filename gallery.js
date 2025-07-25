document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const slidesContainer = document.querySelector('.slides');

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  // Event Listeners
  document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  // Initial Display
  showSlide(slideIndex);

  // Auto Scroll (Optional)
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);
});
