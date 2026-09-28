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
      </div>
    </section>
  `;

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
}
