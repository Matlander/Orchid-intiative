document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const slidesContainer = document.querySelector(".slides");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (!slidesContainer || slides.length === 0) return;

  slidesContainer.style.position = "relative";
  slidesContainer.style.overflow = "hidden";

  slides.forEach((slide, i) => {
    slide.style.position = "absolute";
    slide.style.top = 0;
    slide.style.left = 0;
    slide.style.width = "100%";
    slide.style.opacity = i === 0 ? "1" : "0";
    slide.style.transition = "opacity 1s ease-in-out";
  });
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.zIndex = i === index ? "1" : "0";
    });

    const activeImg = slides[index].querySelector("img");
    if (activeImg) {
      slidesContainer.style.height = activeImg.clientHeight + "px";
    }
  }

  window.addEventListener("resize", () => {
    const activeImg = slides[slideIndex].querySelector("img");
    if (activeImg) slidesContainer.style.height = activeImg.clientHeight + "px";
  });
  nextBtn?.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  prevBtn?.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  let autoSlide = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);

  slidesContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
  slidesContainer.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 5000);
  });

  showSlide(slideIndex);
});
