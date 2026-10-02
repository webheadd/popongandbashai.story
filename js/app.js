import { navigateTo, getCurrentPage } from "./navigation.js";
import { initMusic, playMusic, toggleMusic } from "./music.js";
// import { initScrollAnimations } from "./animation.js";

const app = document.querySelector("#app");
const nav = document.querySelector(".main-nav");
// const menuToggle = document.querySelector("#menuToggle");
const musicToggle = document.querySelector("#musicToggle");
const scrollToTopButton = document.querySelector("#scrollToTop");

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

window.app = { navigateTo, playMusic, toggleMusic, showToast };

// function setActiveNav(page) {
//   document.querySelectorAll("[data-route]").forEach((button) => {
//     button.classList.toggle("active", button.dataset.route === page);
//   });
// }

// window.addEventListener("app:navigate", (event) => {
//   setActiveNav(event.detail.page);
//   nav.classList.remove("open");
//   menuToggle.setAttribute("aria-expanded", "false");
//   requestAnimationFrame(() => app.focus({ preventScroll: true }));
// });

// document.addEventListener("click", (event) => {
//   const routeButton = event.target.closest("[data-route]");
//   if (!routeButton) return;
//   navigateTo(routeButton.dataset.route);
// });

// menuToggle.addEventListener("click", () => {
//   const open = nav.classList.toggle("open");
//   menuToggle.setAttribute("aria-expanded", String(open));
// });

musicToggle.addEventListener("click", toggleMusic);
scrollToTopButton.addEventListener("click", () => {
  app.scrollTo({ top: 0, behavior: "smooth" });
});
app.addEventListener("scroll", () => {
  scrollToTopButton.classList.toggle("is-visible", app.scrollTop > 160);
});

initMusic();
navigateTo("landing");
