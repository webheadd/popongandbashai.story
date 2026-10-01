export function renderLanding(app) {
  app.innerHTML = `
    <section class="page landing">
      <div class="landing__title scroll-animate slide-left">
        <h1 class="landing__title-text"><span>A</span>nd so, our<br>forever begins...</h1>
      </div>
      <button class="landing__image-button" type="button" aria-label="Enter the wedding" data-zoom-src="assets/imgs/envelope-clean.png">
        <img class="landing__image fade-in" src="assets/imgs/envelope.png" alt="Wedding invitation">
      </button>
      <div class="landing__sub-title scroll-animate slide-right">
        <h1 class="landing__sub-title-text">You are cordially invited...</h1>
      </div>
    </section>
  `;

  const imageButton = document.querySelector(".landing__image-button");
  const image = imageButton.querySelector(".landing__image");

  imageButton.addEventListener("click", async () => {
    imageButton.disabled = true;

    const bounds = image.getBoundingClientRect();
    const zoomImage = image.cloneNode();
    zoomImage.className = "landing__zoom-image";
    zoomImage.setAttribute("aria-hidden", "true");
    zoomImage.src = imageButton.dataset.zoomSrc;
    try {
      await zoomImage.decode();
    } catch {
      zoomImage.src = image.currentSrc || image.src;
      await zoomImage.decode();
    }

    Object.assign(zoomImage.style, {
      position: "fixed",
      left: `${bounds.left}px`,
      top: `${bounds.top}px`,
      width: `${bounds.width}px`,
      height: `${bounds.height}px`,
      maxWidth: "none",
      maxHeight: "none",
      margin: "0",
      objectFit: "contain",
      transformOrigin: "center center",
      pointerEvents: "none",
      zIndex: "1000"
    });
    document.body.append(zoomImage);

    console.log("Zooming image with bounds:", bounds);
    const scale = Math.max(window.innerWidth / bounds.width, window.innerHeight / bounds.height) * 2.05;
    const zoom = zoomImage.animate(
      [{ transform: "scale(1)" }, { transform: `scale(${scale})` }],
      { duration: 1500, easing: "cubic-bezier(0.25, 1, .25, 0.5)", fill: "forwards" }
    );
    
    console.log("zoom:", zoom);
    await zoom.finished;
    zoomImage.remove();
    window.app.navigateTo("main");
    setTimeout(async () => {
      const musicPlayback = window.app.playMusic();
      await musicPlayback;
    }, 1000)
  });
}
