import { setupPageAnimations } from "../observers.js";
import handleForm from "./contact-us.js";

document.addEventListener("DOMContentLoaded", () => {
  setupPageAnimations();
  handleForm();
});
