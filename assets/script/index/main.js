import { setupHomePageAnimations } from "../observers.js";
import populateServices from "./our-services.js";
import addHeroCarousel from "./hero.js";

document.addEventListener("DOMContentLoaded", () => {
  setupHomePageAnimations();
  populateServices();
  addHeroCarousel();
});
