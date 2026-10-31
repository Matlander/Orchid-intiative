document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("hero-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".hero-carousel-track");
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const count = document.getElementById("hero-carousel-count");
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const playback = carousel.querySelector("[data-carousel-toggle]");
  if (slides.length < 2 || !track || !count || !previous || !next || !playback) return;

  let current = 0;
  let paused = false;
  let keyboardFocus = false;
  let timer;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    count.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }

  function refreshPlayback() {
    clearInterval(timer);
    timer = undefined;
    playback.textContent = paused ? "Resume" : "Pause";
    playback.setAttribute("aria-label", paused ? "Resume automatic gallery" : "Pause automatic gallery");
    track.setAttribute("aria-live", paused ? "polite" : "off");
    if (!paused && !keyboardFocus && !document.hidden) {
      timer = window.setInterval(() => show(current + 1), 7000);
    }
  }

  function select(index) {
    paused = true;
    refreshPlayback();
    show(index);
  }

  previous.addEventListener("click", () => select(current - 1));
  next.addEventListener("click", () => select(current + 1));
  playback.addEventListener("click", () => {
    paused = !paused;
    refreshPlayback();
  });
  carousel.addEventListener("focusin", (event) => {
    if (!event.target.matches(":focus-visible")) return;
    keyboardFocus = true;
    refreshPlayback();
  });
  carousel.addEventListener("focusout", (event) => {
    if (carousel.contains(event.relatedTarget)) return;
    keyboardFocus = false;
    refreshPlayback();
  });
  document.addEventListener("visibilitychange", refreshPlayback);

  show(0);
  refreshPlayback();
});
