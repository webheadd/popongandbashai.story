import { renderLanding } from "./pages/landing.js";
import { renderMain } from "./pages/main.js";
import { renderStory } from "./pages/story.js";
import { renderDetails } from "./pages/details.js";
import { renderRSVP } from "./pages/rsvp.js";
import { initScrollAnimations } from "./animation.js";
import { initAutoplayVideos } from "./autoplayVideos.js";

const app = document.querySelector("#app");
let currentPage = null;

const pages = {
  landing: renderLanding,
  main: renderMain,
  story: renderStory,
  details: renderDetails,
  rsvp: renderRSVP
};

export function getCurrentPage() {
  return currentPage;
}

export function navigateTo(page) {
  if (!pages[page] || page === currentPage) return;

  const render = pages[page];
  app.innerHTML = "";
  render(app);
  initAutoplayVideos(app);
  app.scrollTo({ top: 0, behavior: "instant" });
  window.scrollTo(0, 0);
  currentPage = page;
  console.log(`Navigated to ${page}`);
  document.addEventListener("DOMContentLoaded", initScrollAnimations);
  window.dispatchEvent(new CustomEvent("app:navigate", {
    detail: { page }
  }));
}
