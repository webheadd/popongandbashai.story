export function renderDetails(app) {
  app.innerHTML = `
    <section class="page details-page" aria-labelledby="details-title">
      <button class="page-back" type="button" aria-label="Go back to main page">GO BACK</button>
      <header class="details-banner">
        <h1 id="details-title" class="scroll-animate slide-left"><span class="font-new-icon">The</span> Finer Details</h1>
      </header>
      <div class="division-white">
        <div class="embossed-background"></div>
        <section class="details-section" aria-labelledby="date-location-title">
          <header class="details-section__header">
            <h3 id="date-location-title" class="font-new-icon scroll-animate slide-right">Date and Location</h3>
            <h2 class="details-date scroll-animate slide-left">seventh of november <br>
two thousand aNd twenty Six</h2>
          </header>
          <div class="location-grid">
            <article class="location-item">
              <a class="location-item__map-link" href="https://maps.app.goo.gl/AZuNfrKi3KCNKM9X8" target="_blank" rel="noopener noreferrer" aria-label="Open Ceremony location in Google Maps">
                <img class="location-item__icon scroll-animate slide-left" src="assets/imgs/details/ceremony.png" alt="Ceremony location map">
              </a>
              <p class="font-seasons uppercase bold text-blue scroll-animate">Ceremony</p>
              <p class="location-item__time font-seasons scroll-animate">two Thirty in the afternoon</p>
              <p class="font-monotype-corsiva scroll-animate">The ceremony will be held at 
Christ, Light of the Nations Parish, 
a welcoming Catholic church in Barangay Pio, Porac, Pampanga, established as a beacon of hope for families resettled after the 1991 Mount Pinatubo eruption</p>
              <a class="location-item__action scroll-animate" href="https://maps.app.goo.gl/AZuNfrKi3KCNKM9X8" target="_blank" rel="noopener noreferrer">View Location</a>
            </article>

            <article class="location-item">
              <a class="location-item__map-link" href="https://maps.app.goo.gl/jmQLPmfaVZ5Mhc789" target="_blank" rel="noopener noreferrer" aria-label="Open Reception location in Google Maps">
                <img class="location-item__icon scroll-animate slide-right" src="assets/imgs/details/reception.png" alt="Reception location map">
              </a>
              <p class="font-seasons uppercase bold text-blue scroll-animate">Reception</p>
              <p class="location-item__time font-seasons scroll-animate">Four thirty in the afternoon</p>
              <p class="font-monotype-corsiva scroll-animate">Dining and Dancing will take place at
Annabelle Events Place, a 5-minute drive from the church located at Purok 7, Jalung, Porac, Pampanga.</p>
              <a class="location-item__action scroll-animate" href="https://maps.app.goo.gl/jmQLPmfaVZ5Mhc789" target="_blank" rel="noopener noreferrer">View Location</a>
            </article>
          </div>
        </section>
      </div>
      <div class="page-inner page-inner--details">
        <section class="details-section theme-section" aria-labelledby="theme-title">
          <div class="theme-section__inner">
            <h3 id="theme-title" class="font-new-icon scroll-animate slide-left">Wedding Theme</h3>
            <p class="font-monotype-corsiva scroll-animate">
              Dearest gentle guests, 
              <br>
              Inspired by the Regency era weddings and Bridgerton romance, our intimate wedding will feature a soft pastel palette drawn from hydrangeas, carnations, peonies, and spring flowers
              <br>
              As this is a small gathering of our nearest and dearest, we look forward to sharing this elegant day with you.
            </p>
          </div>
          <img class="details-separator details-separator--theme" src="assets/imgs/design/separator_2.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
        </section>

        <section class="details-section attire-section" aria-labelledby="attire-title">
          <header class="details-section__header">
            <h3 id="attire-title" class="font-new-icon scroll-animate slide-right">Attire Guide</h3>
            <p style="font-size: 1.5rem;" class="font-hello-paris scroll-animate">We would love to see you dressed in formal attire to celebrate our special day with us. </p>
          </header>
          <div class="attire-list">
            <article class="attire-panel">
              <div class="attire-panel__copy">
                <h3 id="attire-title" class="font-new-icon scroll-animate slide-left">For the Ladies</h3>
                <p class="font-seasons uppercase scroll-animate">Join us in your favorite floor<span class="font-sans">-</span>length gown or dress in a long, flowy silhouette.</p>
                <p class="font-monotype-corsiva scroll-animate">Our color palette draws from whimsical, pastel garden flowers—think turquoise, sky blue, blush pink, soft peach, and butter yellow. Any similar pastel shades or floral patterns that complement the theme are also warmly welcome.</p>
                <img class="details-separator--ladies" src="assets/imgs/design/boquet.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
              </div>
              <img class="attire-panel__image" src="assets/imgs/details/ladies.png" alt="Ladies' wedding attire inspiration">
            </article>
            <img class="details-separator--ladies details-separator--ladies-mobile" src="assets/imgs/design/boquet.png" alt="" aria-hidden="true" loading="lazy" decoding="async">

            <article class="attire-panel attire-panel--reverse">
              <img class="attire-panel__image" src="assets/imgs/details/gentlemen.png" alt="Gentlemen's wedding attire inspiration">
              <div class="attire-panel__copy">
                <h3 id="attire-title" class="font-new-icon scroll-animate slide-right">For the Gentlemen</h3>
                <p class="font-seasons uppercase scroll-animate">Gentlemen are requested to wear a formal suit in Black, Gray, light Gray, or Brown, paired with dress shoes.</p>
                <p class="font-monotype-corsiva scroll-animate">To help bring our wedding palette to life, we warmly encourage the gentlemen to incorporate a pastel-colored dress shirt or necktie into their attire!</p>
                <img class="details-separator--gentlemen" src="assets/imgs/design/separator_1.png" alt="" aria-hidden="true" loading="lazy" decoding="async">
              </div>
            </article>

            <img class="details-separator--gentlemen details-separator--gentlemen-mobile" src="assets/imgs/design/separator_1.png" alt="" aria-hidden="true" loading="lazy" decoding="async">

            <article class="attire-notes">
              <p class="font-seasons uppercase scroll-animate">Your presence means the world to us as we celebrate<span class="font-sans">!</span> We respectfully request that our guests honor the event<span class="font-sans">'</span>s dress code.</p>
              <p class="font-seasons uppercase scroll-animate"><span style="text-decoration: underline;">colors to avoid</span>: white<span class="font-sans">/</span>cream<span class="font-sans">/</span>beige <span class="font-sans">(</span>reserved for the bride<span class="font-sans">)</span>, and solid red or black for the ladies,
              <br>  
              <span style="text-decoration: underline;">attire to skip</span>: please avoid denim and casual footwear<span class="font-sans">/</span>slippers.</p>
            </article>
          </div>
        </section>
      </div>
      <div class="division-light-blue">
        <section class="details-section timeline-section" aria-labelledby="timeline-title">
            <header class="details-section__header">
              <h3 id="timeline-title" class="font-new-icon scroll-animate slide-left">Timeline</h3>
            </header>
            <div class="timeline">
              <div class="timeline__item scroll-animate slide-left"><img src="assets/imgs/details/ic_ceremony.png"/><strong>2:30 PM</strong><span>Wedding Ceremony</span></div>
              <div class="timeline__item scroll-animate slide-right"><img src="assets/imgs/details/ic_cocktail.png"/><strong>4:30 PM</strong><span>Cocktail hour</span></div>
              <div class="timeline__item scroll-animate slide-left"><img src="assets/imgs/details/ic_reception.png"/><strong>5:00 PM</strong><span>Reception</span></div>
              <div class="timeline__item scroll-animate slide-right"><img src="assets/imgs/details/ic_cake.png"/><strong>6:00 PM</strong><span>Cake Cutting</span></div>
              <div class="timeline__item scroll-animate slide-left"><img src="assets/imgs/details/ic_dinner.png"/><strong>6:30 PM</strong><span>Dinner</span></div>
              <div class="timeline__item scroll-animate slide-right"><img src="assets/imgs/details/ic_party.png"/><strong>7:00 PM</strong><span>Party</span></div>

            </div>
          </section>
          <section class="more-details" aria-labelledby="more-details-title">
            <p class="font-monotype-corsiva text-center">
              Short on formalities, big on fun! 
              <br>
              We’ll keep the traditions brief (cake, toasts, and a first dance) so we can jump straight into dinner, drinks, and the party.
            </p>
            <p class="font-monotype-corsiva text-center text-blue" style="font-size: 20px;">See you on the dance floor!</p>
          </section>
      </div>
        <footer class="main-footer">
          <button class="main-footer__button" type="button">Continue to RSVP</button>
        </footer>
    </section>
  `;

    app.querySelector(".main-footer__button").addEventListener("click", () => {
      window.app.navigateTo("rsvp");
    });
    app.querySelector(".page-back").addEventListener("click", () => {
      window.app.navigateTo("main");
    });
}
