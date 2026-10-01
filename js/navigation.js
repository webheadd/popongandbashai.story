import { renderLanding } from "./pages/landing.js";
import { renderMain } from "./pages/main.js";
import { renderStory } from "./pages/story.js";
import { renderDetails } from "./pages/details.js";
import { renderRSVP } from "./pages/rsvp.js";
import { initScrollAnimations } from "./animation.js";
import { initAutoplayVideos } from "./autoplayVideos.js";

const app = document.querySelector("#app");
let currentPage = null;
let previousScrollTop = app.scrollTop;

app.addEventListener("scroll", () => {
  const backButton = document.querySelector(".site-shell > .page-back");
  const scrollTop = app.scrollTop;

  if (!backButton) {
    previousScrollTop = scrollTop;
    return;
  }

  backButton.classList.toggle("is-scrolled", scrollTop > 0);
  if (scrollTop === 0) {
    backButton.classList.remove("is-hidden");
  } else if (scrollTop > previousScrollTop) {
    backButton.classList.add("is-hidden");
  } else if (scrollTop < previousScrollTop) {
    backButton.classList.remove("is-hidden");
  }

  previousScrollTop = scrollTop;
});

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

  const siteShell = app.closest(".site-shell");
  siteShell.querySelector(".page-back")?.remove();

  const render = pages[page];
  app.innerHTML = "";
  render(app);
  const backButton = app.querySelector(".page-back");
  if (backButton) siteShell.append(backButton);
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
