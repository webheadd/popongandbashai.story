export function renderMain(app) {
  app.innerHTML = `
    <section class="page main-page" aria-labelledby="main-title">
      <div class="grid_container">
        <div class="image-grid">
          <div class="grid-item one scroll-animate hover-effect"><img src="/assets/imgs/1.png" alt="One" /></div>
          <div class="grid-item two scroll-animate slide-left hover-effect"><img src="/assets/imgs/2.png" alt="Two" /></div>
          <div class="grid-item three scroll-animate slide-right hover-effect"><img src="/assets/imgs/3.png" alt="Three" /></div>
          <div class="grid-item four scroll-animate slide-left hover-effect"><img src="/assets/imgs/4.png" alt="Four" /></div>
          
          <div class="grid-item five scroll-animate slide-right hover-effect clickable"><img src="/assets/imgs/5.png" alt="Five" /></div>
          
          <div class="grid-item six scroll-animate slide-left hover-effect clickable"><img src="/assets/imgs/6.png" alt="Six" /></div>

          <div class="grid-item seven scroll-animate slide-right hover-effect clickable"><img src="/assets/imgs/7.png" alt="Seven" /></div>
        </div>

        <div class="with-love-section">
          <p class="with-love-section__text font-seasons uppercase" style="margin-bottom: 0;">With Love,</p>
          <p class="with-love-section__title font-new-icon" style="font-size: 2.5rem; margin: 20px 0;">Shai & Pong</p>
          <p class="with-love-section__text font-seasons uppercase" style="margin-bottom: 0;">7<sup style="font-size: 1rem;">th</sup> November 2026</p>
        </div>
      </div>
      <section class="countdown-section" aria-labelledby="countdown-title">
        <div class="countdown-watermark" aria-hidden="true"></div>
        <h2 class="countdown-section__title font-new-icon" id="countdown-title">UNTIL WE DO</h2>
        <div class="countdown" role="timer" aria-label="Countdown to November 7, 2026">
          <div class="countdown__unit">
            <span class="countdown__value" data-countdown="days">00</span>
            <span class="countdown__label">Days</span>
          </div>
          <div class="countdown__unit">
            <span class="countdown__value" data-countdown="hours">00</span>
            <span class="countdown__label">Hours</span>
          </div>
          <div class="countdown__unit">
            <span class="countdown__value" data-countdown="minutes">00</span>
            <span class="countdown__label">Minutes</span>
          </div>
          <div class="countdown__unit">
            <span class="countdown__value" data-countdown="seconds">00</span>
            <span class="countdown__label">Seconds</span>
          </div>
        </div>
      </section>
      <footer class="main-footer">
        <button class="main-footer__button" type="button">View Our Story</button>
      </footer>
    </section>
  `;

  const watermark = app.querySelector(".countdown-watermark");
  const watermarkColumns = 4;
  const watermarkRows = 3;
  const watermarkMarks = [];

  for (let index = 0; index < watermarkColumns * watermarkRows; index += 1) {
    const column = index % watermarkColumns;
    const row = Math.floor(index / watermarkColumns);
    const mark = document.createElement("img");

    mark.src = "/assets/imgs/logo.svg";
    mark.alt = "";
    Object.assign(mark.style, {
      opacity: String(0.45 + Math.random() * 0.5),
      transform: "translate(-50%, -50%) rotate(-18deg)"
    });
    watermark.append(mark);
    watermarkMarks.push({
      element: mark,
      column,
      row,
      sizeScale: 0.52 + Math.random() * 0.48,
      offsetX: (Math.random() - 0.5) * 0.1,
      offsetY: (Math.random() - 0.5) * 0.1
    });
  }

  const layoutWatermarks = () => {
    const { width, height } = watermark.getBoundingClientRect();
    if (!width || !height) return;

    const cellWidth = width / watermarkColumns;
    const cellHeight = height / watermarkRows;
    const maxMarkSize = Math.min(cellWidth, cellHeight) * 0.56;

    watermarkMarks.forEach(({ element, column, row, sizeScale, offsetX, offsetY }) => {
      element.style.left = `${((column + 0.5 + offsetX) / watermarkColumns) * 100}%`;
      element.style.top = `${((row + 0.5 + offsetY) / watermarkRows) * 100}%`;
      element.style.width = `${maxMarkSize * sizeScale}px`;
    });
  };

  const watermarkObserver = new ResizeObserver(layoutWatermarks);
  watermarkObserver.observe(watermark);
  layoutWatermarks();

  const targetDate = new Date(2026, 10, 7, 0, 0, 0).getTime();
  const countdownValues = {
    days: app.querySelector('[data-countdown="days"]'),
    hours: app.querySelector('[data-countdown="hours"]'),
    minutes: app.querySelector('[data-countdown="minutes"]'),
    seconds: app.querySelector('[data-countdown="seconds"]')
  };

  const updateCountdown = () => {
    let remainingSeconds = Math.floor(Math.max(0, targetDate - Date.now()) / 1000);
    const days = Math.floor(remainingSeconds / 86400);
    remainingSeconds %= 86400;
    const hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds %= 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    countdownValues.days.textContent = String(days).padStart(2, "0");
    countdownValues.hours.textContent = String(hours).padStart(2, "0");
    countdownValues.minutes.textContent = String(minutes).padStart(2, "0");
    countdownValues.seconds.textContent = String(seconds).padStart(2, "0");

    if (targetDate <= Date.now()) window.clearInterval(intervalId);
  };

  const intervalId = window.setInterval(updateCountdown, 1000);
  updateCountdown();

  const stopCountdownOnNavigation = (event) => {
    if (event.detail.page === "main") return;
    window.clearInterval(intervalId);
    watermarkObserver.disconnect();
    window.removeEventListener("app:navigate", stopCountdownOnNavigation);
  };
  window.addEventListener("app:navigate", stopCountdownOnNavigation);

  document
    .querySelector(".grid-item.five")
    .addEventListener("click", async () => {
      window.app.navigateTo("story");
    });

  document
    .querySelector(".grid-item.six")
    .addEventListener("click", async () => {
      window.app.navigateTo("details");
    });

    document
      .querySelector(".grid-item.seven")
      .addEventListener("click", async () => {
        window.app.navigateTo("rsvp");
      });

  app.querySelector(".main-footer__button").addEventListener("click", () => {
    window.app.navigateTo("story");
  });
}
