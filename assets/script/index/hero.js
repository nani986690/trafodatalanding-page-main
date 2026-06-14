/**
 * Dynamically adds hero corousel to the DOM on load
 */

const addHeroCarousel = () => {
  const heroContainer = document.querySelector(".hero-corousel");
  if (!heroContainer) return;

  // If a hero <video> is present, skip injecting image slides
  if (heroContainer.querySelector('video') || document.querySelector('.hero-video')) return;

  heroContainer.innerHTML = `
    <div class="hero">
      <div class="hero-slide active" style="background-image: url('./assets/images/index/hero/hero-bg-1.jpg');"></div>
      <div class="hero-slide" style="background-image: url('./assets/images/index/hero/hero-bg-2.jpg');"></div>
      <div class="hero-slide" style="background-image: url('./assets/images/index/hero/hero-bg-3.jpg');"></div>
    </div>
  `;

  let currentSlideIndex = 0;
  const slides = heroContainer.querySelectorAll(".hero-slide");
  const totalSlides = slides.length;

  // preload images
  slides.forEach((slide) => {
    const bg = slide.style.backgroundImage.replace(/url\(|\)|'|"/g, "");
    const img = new Image();
    img.src = bg;
  });

  const showSlide = (index) => {
    slides[currentSlideIndex].classList.remove("active");

    setTimeout(() => {
      slides[index].classList.add("active");
    }, 300);

    currentSlideIndex = index;
  };

  const changeSlide = (direction) => {
    const newIndex =
      (currentSlideIndex + direction + totalSlides) % totalSlides;
    showSlide(newIndex);
  };

  // auto slide
  let intervalId = setInterval(() => changeSlide(1), 5000);

  // pause on hover
  heroContainer.addEventListener("mouseenter", () => clearInterval(intervalId));
  heroContainer.addEventListener("mouseleave", () => {
    intervalId = setInterval(() => changeSlide(1), 5000);
  });
};

export default addHeroCarousel;
