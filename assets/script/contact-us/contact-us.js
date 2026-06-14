const handleForm = () => {
  const form = document.getElementById("contactForm");
  // const animatedItems = document.querySelectorAll(".animate-item");

  // // Scroll fade-in animation
  // const fadeInOnScroll = () => {
  //   const triggerBottom = window.innerHeight * 0.85;
  //   animatedItems.forEach((item) => {
  //     const top = item.getBoundingClientRect().top;
  //     if (top < triggerBottom) item.classList.add("animate-visible");
  //   });
  // };

  // window.addEventListener("scroll", fadeInOnScroll);
  // fadeInOnScroll();

  // Form Submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim(); // NEW FIELD
    const message = form.message.value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill all required fields");
      return;
    }

    alert("Your message has been sent successfully!");
  });
};

export default handleForm;
