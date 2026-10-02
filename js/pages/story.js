import { playMusic } from "../music.js";
import { createPetals } from "../petals.js";

const STORY_PETAL_COUNT = 16;

export function renderStory(app) {
  app.innerHTML = `
    <section class="page story-page" aria-labelledby="story-title">
      <button class="page-back" type="button" aria-label="Go back to main page">GO BACK</button>
      <div class="page-inner">
        <header class="story-hero petal-host">
          <div class="petal-layer" aria-hidden="true"></div>
          <p class="story-hero__eyebrow scroll-animate fade-up">A celebration of us</p>
          <h1 class="story-hero__title scroll-animate fade-up" id="story-title">Our Story</h1>
        </header>

        <section class="story-chapter story-chapter--first" aria-labelledby="how-we-met-title">
          <div class="story-chapter__text">
            <h3 class="scroll-animate fade-up uppercase text-center" id="how-we-met-title">How We Met</h3>
            <div class="story-ornament story-ornament--rule scroll-animate fade-up" aria-hidden="true"><img src="assets/imgs/logo.svg" alt=""></div>
            <p class="story-description scroll-animate fade-up">
              The couple met during their college internship at Convergys in Eton, Centris QC.
              <br><br>
              Coming from different provinces and attending different schools, they never imagined their paths would cross. 
              Being a nonchalant introvert, Pong gathered the courage to send Shai a friend request on Facebook. 
              <br><br>
              A simple friend request started a simple connection, which soon turned into meaningful conversations, a genuine friendship, and eventually, a love story that led the couple here.
            </p>
          </div>
          <figure class="story-photo scroll-animate fade-up">
            <img src="assets/imgs/story/how_we_met.png" alt="Shai and Pong together" loading="lazy" decoding="async">
            <span class="story-flower" aria-hidden="true">
              <img src="assets/imgs/story/ribbon.png" alt="" loading="lazy" decoding="async">
            </span>
          </figure>
        </section>

        <section class="story-chapter story-chapter--proposal" aria-labelledby="proposal-title">
          <div class="story-chapter__text">
            <h2 class="scroll-animate fade-up uppercase" id="proposal-title">The Proposal</h2>
            <div class="story-ornament story-ornament--rule scroll-animate fade-up" aria-hidden="true"><img src="assets/imgs/logo.svg" alt=""></div>
            <div class="story-collage" role="group" aria-label="Proposal photo collage">
              <button class="scroll-animate fade-up story-polaroid story-polaroid--featured" type="button" data-story-lightbox aria-label="Enlarge proposal photo 1">
                <span class="story-seal" aria-hidden="true"></span>
                <img src="assets/imgs/story/the_proposal.gif" alt="Shai and Pong celebrating their proposal in Japan" loading="lazy" decoding="async">
              </button>
              <button class="scroll-animate fade-up story-polaroid" type="button" data-story-lightbox aria-label="Enlarge proposal photo 2">
                <img src="assets/imgs/story/proposal_1.png" alt="Shai and Pong celebrating their proposal in Japan" loading="lazy" decoding="async">
              </button>
              <button class="scroll-animate fade-up story-polaroid" type="button" data-story-lightbox aria-label="Enlarge proposal photo 3">
                <video class="autoplay-video" muted playsinline loop preload="metadata" aria-label="A moment from the proposal trip">
                  <source src="assets/imgs/story/proposal_3.mp4" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </button>
              <button class="scroll-animate fade-up story-polaroid" type="button" data-story-lightbox aria-label="Enlarge proposal photo 4">
                <img src="assets/imgs/story/proposal_2.png" alt="Shai and Pong celebrating their proposal in Japan" loading="lazy" decoding="async">
              </button>
            </div>
            <p class="story-description scroll-animate fade-up">
              A first trip to Japan became even more unforgettable during the beautiful autumn season.
              <br><br>
              Marking nine years together as a couple, a wedding proposal was made at Lake Kawaguchiko. To beautifully honor this milestone, the engagement ring was crafted with nine hidden diamonds, each representing a year of the journey.
              <br><br>
              Surrounded by golden leaves, the majestic Mt. Fuji stood in the background as a witness to one of life's most cherished moments. Among the vibrant colors of autumn, a heartfelt promise was made, a joyful "Yes" was shared, and a new chapter of forever began.
            </p>
          </div>
        </section>

        <section class="story-years" aria-labelledby="years-title">
          <h2 class="scroll-animate fade-up" id="years-title"><span class="font-seasons">11</span> Years Strong</h2>
          <div class="story-ornament story-ornament--rule scroll-animate fade-up" aria-hidden="true"><img src="assets/imgs/logo.svg" alt=""></div>
          <p class="story-subtitle scroll-animate fade-up">A glimpse into our 11-year journey before we finally say 'I do.'</p>
          <div class="story-video">
            <video class="autoplay-video scroll-animate fade-up" controls playsinline loop preload="metadata" aria-label="Our 11 years together">
              <source src="assets/imgs/story/11-years-strong.mp4" type="video/mp4">
              Your browser does not support HTML video.
            </video>
          </div>
          <p class="story-watch scroll-animate fade-up">Watch Our Story</p>
        </section>
        <img class="emblem" src="assets/imgs/emblem.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
        <section class="story-chopper" aria-label="Chopper joins our family">
          <video class="story-chopper__video scroll-animate" autoplay playsinline loop preload="metadata" aria-label="Video of Chopper">
            <source src="assets/imgs/details/chopper.mp4" type="video/mp4">
            Your browser does not support HTML video.
          </video>
          <p class="story-chopper__caption scroll-animate font-monotype-corsiva">
            Hand in hand (or paw in paw),<br>
            We cannot wait to officially begin our journey as a family of three.<br>
            A happily ever after with Chopper leading the way.
          </p>
        </section>
      </div>
      <footer class="main-footer">
        <button class="main-footer__button" type="button">View Details</button>
      </footer>
      <dialog class="story-lightbox" aria-label="Enlarged proposal photo">
        <button class="story-lightbox__close" type="button" aria-label="Close enlarged photo">×</button>
        <div class="story-lightbox__content"></div>
      </dialog>
    </section>
  `;

  createPetals(app.querySelector(".petal-layer"), STORY_PETAL_COUNT);

  const lightbox = app.querySelector(".story-lightbox");
  const lightboxContent = lightbox.querySelector(".story-lightbox__content");

  app.querySelectorAll("[data-story-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      const photo = button.querySelector("img, video, .story-photo-placeholder");
      const enlargedPhoto = photo.cloneNode(true);
      if (enlargedPhoto instanceof HTMLVideoElement) {
        enlargedPhoto.classList.remove("autoplay-video");
        enlargedPhoto.controls = true;
      }
      lightboxContent.replaceChildren(enlargedPhoto);
      lightbox.showModal();
    });
  });

  app.querySelector(".main-footer__button").addEventListener("click", () => {
    window.app.navigateTo("details");
  });

  app.querySelector(".page-back").addEventListener("click", () => {
    window.app.navigateTo("main");
  });

  lightbox.querySelector(".story-lightbox__close").addEventListener("click", () => {
    lightbox.close();
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  const backgroundMusic = document.querySelector("#backgroundMusic");
  const yearsSection = app.querySelector(".story-years");
  let resumeMusicOnExit = false;
  let yearsSectionIsVisible = false;

  const resumeMusic = () => {
    if (!resumeMusicOnExit) return;
    resumeMusicOnExit = false;
    void playMusic();
  };

  const yearsSectionObserver = new IntersectionObserver(([entry]) => {
    const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.01;
    if (isVisible === yearsSectionIsVisible) return;

    yearsSectionIsVisible = isVisible;
    if (isVisible) {
      resumeMusicOnExit = !backgroundMusic.paused;
      if (resumeMusicOnExit) backgroundMusic.pause();
    } else {
      resumeMusic();
    }
  }, { root: app, threshold: 0.01 });

  const handleNavigation = (event) => {
    if (event.detail.page === "story") return;
    yearsSectionObserver.disconnect();
    resumeMusic();
    window.removeEventListener("app:navigate", handleNavigation);
  };

  yearsSectionObserver.observe(yearsSection);
  window.addEventListener("app:navigate", handleNavigation);
}
