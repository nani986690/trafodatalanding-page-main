import DATA from "../data.js";

/**
 * populates the service section with accordion items
 */
const populateServices = () => {
  function createAccordion(title, content, image, count) {
    const id = title.toLowerCase().replace(/\s+/g, "-");
    const formattedCount = count.toString().padStart(2, "0");

    return `
  <div class="accordion-item shadow-sm border-0 rounded-4 mb-3 overflow-hidden">
    <h2 class="accordion-header" id="heading-${id}">
      <button
        class="accordion-button collapsed fw-semibold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse-${id}"
        aria-expanded="false"
        aria-controls="collapse-${id}"
      >
        ${title}
      </button>
    </h2>
    <div
      id="collapse-${id}"
      class="accordion-collapse collapse ${count === 1 ? "show" : ""}"
      data-bs-parent="#servicesAccordion"
    >
      <div class="accordion-body row align-items-center g-4 px-3 px-lg-4 py-4 fade-slide">
        <div class="col-12 col-lg-5 text-center fade-item delay-0">
          <img
            src="./assets/images/index/our-services/${image}"
            alt="${title}"
            class="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div class="col-12 col-lg-6 fade-item delay-1">
          <div class="service-card-count display-3 fw-bold text-primary opacity-50 mb-3">
            ${formattedCount}
          </div>
          <p class="text-muted lh-lg">${content}</p>
        </div>
      </div>
    </div>
  </div>`;
  }

  function initializeAccordions() {
    const container = document.querySelector("#servicesAccordion");
    const services = Object.entries(DATA.services);

    let nodes = [];
    let count = 1;

    for (let service of services) {
      const [title, { content, image }] = service;
      nodes.push(createAccordion(title, content, image, count));
      count++;
    }

    container.innerHTML = nodes.join("");
  }

  initializeAccordions();
};

export default populateServices;
