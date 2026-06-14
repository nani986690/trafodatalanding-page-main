/**
 * Animate elements using intersection observer
 */
const observeOnce = (selector, className = "animate-visible", options = {}) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(element);
};

const observeMultiple = (
  selector,
  className = "animate-visible",
  options = { threshold: 0.2 },
) => {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  items.forEach((item) => observer.observe(item));
};

const setupHomePageAnimations = () => {
  observeOnce("#contact-section .overlay-content", "visible");

  observeOnce("#about-us .about-us-content");
  observeOnce("#about-us .image-wrapper");
  observeOnce("#about-us .title");
  observeOnce("#about-us .subtitle");
};

const setupPageAnimations = () => {
  observeMultiple(".animate-item");
};

export { setupHomePageAnimations, setupPageAnimations };
