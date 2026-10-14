const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navCollapse = mainNav ? new bootstrap.Collapse(mainNav, { toggle: false }) : null;

if (menuToggle && navCollapse) {
  menuToggle.addEventListener("click", () => {
    navCollapse.toggle();
  });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992 && mainNav.classList.contains("show")) {
      navCollapse.hide();
    }
  });
});

document.querySelectorAll(".progress-ring").forEach((ring) => {
  const value = Number(ring.dataset.progress || 0);
  const degrees = Math.max(0, Math.min(100, value)) * 3.6;
  ring.style.setProperty("--progress", `${degrees}deg`);
});

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    portfolioItems.forEach((item) => {
      const categories = item.dataset.category.split(" ");
      const match = selected === "all" || categories.includes(selected);
      item.classList.toggle("is-hidden", !match);
    });
  });
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const syncActiveLink = () => {
  const offset = window.scrollY + 140;
  let currentId = "home";

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", active);
  });
};

window.addEventListener("scroll", syncActiveLink);
window.addEventListener("load", syncActiveLink);

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thanks, your message is ready to send.";
    contactForm.reset();
  });
}
