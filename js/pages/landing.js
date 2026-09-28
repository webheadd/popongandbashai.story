export function renderLanding(app) {
  app.innerHTML = `
    <section class="page landing">
      <div class="landing__title scroll-animate slide-left">
        <h1 class="landing__title-text"><span>A</span>nd so, our<br>forever begins...</h1>
      </div>
      <button class="landing__image-button" type="button" aria-label="Enter the wedding">
        <img class="landing__image fade-in" src="assets/imgs/envelope.png" alt="Wedding invitation">
      </button>
      <div class="landing__sub-title scroll-animate slide-right">
        <h1 class="landing__sub-title-text">You are cordially invited...</h1>
      </div>
    </section>
  `;

  document.querySelector(".landing__image-button").addEventListener("click", async () => {
    window.app.navigateTo("main");
    await window.app.playMusic();
  });
}
