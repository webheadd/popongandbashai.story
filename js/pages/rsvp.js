export function renderRSVP(app) {
  app.innerHTML = `
    <section class="page rsvp-page" aria-labelledby="rsvp-title">
      <button class="page-back" type="button" aria-label="Go back to main page">GO BACK</button>
      <div class="page-inner">
        <section class="rsvp-faq" aria-labelledby="rsvp-faq-title">
          <p class="eyebrow">A few helpful notes</p>
          <h3 id="rsvp-faq-title" class="font-new-icon">Frequently Asked Questions</h3>
          <div class="faq-list">
            <details class="faq-item">
              <summary><img src="assets/imgs/rsvp/rsvp_due.png" alt=""><span>RSVP Due Date</span><span class="faq-chevron" aria-hidden="true"></span></summary>
              <div class="faq-answer">
                <p>Please let us know if you can attend by October 12, 2026, so we can finalize our headcount for food and seating.</p>
                <p>You can send your <a href="#rsvp-card">RSVP response here</a>.</p>
                <p>Thank you for responding promptly!</p>
              </div>
            </details>
            <details class="faq-item">
              <summary><img src="assets/imgs/rsvp/plus_one.png" alt=""><span>Can I bring a plus-one?</span><span class="faq-chevron" aria-hidden="true"></span></summary>
              <div class="faq-answer"><p>As we are celebrating our love in a very intimate setting with our absolute closest family and friends, we can only accommodate guests who are explicitly invited. Thank you for your understanding!</p></div>
            </details>
            <details class="faq-item">
              <summary><img src="assets/imgs/rsvp/children.png" alt=""><span>Adult Only Party</span><span class="faq-chevron" aria-hidden="true"></span></summary>
              <div class="faq-answer">
                <p>To allow all of our guests—including parents—a night of relaxation and celebration, we have chosen to make our special day an adults-only event.</p>
                <p>Get ready for an evening filled with dancing, drinks, and late-night fun. Let's give the parents a well-deserved night off!</p>
              </div>
            </details>
            <details class="faq-item">
              <summary><img src="assets/imgs/rsvp/dress.png" alt=""><span>What to wear?</span><span class="faq-chevron" aria-hidden="true"></span></summary>
              <div class="faq-answer">
                <p>We kindly ask our guests to join us in style by dressing in Formal Attire that beautifully complements our special day.</p>
                <p>For the ladies, we request a formal gown or a floor-length dress in lovely pastel colors: turquoise, sky blue, blush pink, soft peach, and butter yellow. Floral dresses and gowns are also welcome!</p>
                <p>For the gentlemen, please wear a formal suit in black, gray, light gray, or brown, paired with a pastel-colored inner shirt or necktie to match our theme.</p>
                <p>For visual examples and style inspiration, please visit our <a href="#details" class="faq-attire-link">Attire Guide Page</a>.</p>
                <p><strong>Restrictions:</strong> To maintain the formal atmosphere of our celebration, denims and slippers are not permitted. We gently ask that you reserve white (including cream and beige) for the bride and avoid solid red or solid black gowns.</p>
              </div>
            </details>
            <details class="faq-item">
              <summary><img src="assets/imgs/rsvp/photos.png" alt=""><span>Photos &amp; Videos</span><span class="faq-chevron" aria-hidden="true"></span></summary>
              <div class="faq-answer">
                <p>We absolutely love capturing memories!</p>
                <p>We want to see our wedding through your eyes, so please feel free to take and post photos. However, during the ceremony, we kindly request that you give our official photographers and videographers space to work, particularly in the center aisle.</p>
                <p>Thank you for your cooperation!</p>
              </div>
            </details>
            <details class="faq-item">
              <summary><img src="assets/imgs/rsvp/maps.png" alt=""><span>Parking &amp; Maps</span><span class="faq-chevron" aria-hidden="true"></span></summary>
              <div class="faq-answer">
                <h3>Parking</h3>
                <p>Allocated parking is available at both the church and the reception venue for your convenience.</p>
                <h3>Accessibility</h3>
                <p>Our ceremony will be held at Christ, Light of the Nations Parish Church, located in Model Community Pinatubo Resettlement Center, Barangay Pio, Porac, Pampanga, Philippines.</p>
                <p>Our reception venue, Annabelle Events Place (Purok 7, Jalung, Porac, Pampanga), is located just a convenient 6-minute drive away from the church.</p>
                <p class="faq-map-links">Maps below: <a href="https://maps.app.goo.gl/AZuNfrKi3KCNKM9X8" target="_blank" rel="noopener noreferrer">Church map</a> · <a href="https://maps.app.goo.gl/jmQLPmfaVZ5Mhc789" target="_blank" rel="noopener noreferrer">Reception map</a></p>
              </div>
            </details>
          </div>
        </section>

        <div class="rsvp-card" id="rsvp-card">
          <div class="rsvp-header">
            <p class="eyebrow">RSVP</p>
            <h3 id="rsvp-title">Répondez s'il vous plaît</h3>
            <p class="lead" style="margin-inline:auto">
              Kindly let us know if you will be celebrating with us by <b>October 12, 2026</b>.
              <br>
              Your response helps us prepare a wonderful day for everyone.
            </p>
          </div>
          <div style="position: relative; width: 100%; height: 0; padding-top: 177.8305%;
            padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
            border-radius: 8px; will-change: transform;">
              <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                src="https://www.canva.com/design/DAHWgDJ9elo/jZX3N0Q9xf2mwDwbHC7bkw/view?embed">
              </iframe>
            </div>
            <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAHWgDJ9elo&#x2F;jZX3N0Q9xf2mwDwbHC7bkw&#x2F;view?utm_content=DAHWgDJ9elo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
          </div>
      </div>
    </section>
  `;

  app.querySelector(".page-back").addEventListener("click", () => {
    window.app.navigateTo("main");
  });

  app.querySelectorAll(".faq-item summary").forEach((summary) => {
    summary.addEventListener("click", (event) => {
      event.preventDefault();
      const item = summary.parentElement;
      const answer = item.querySelector(".faq-answer");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const animate = (opening) => {
        if (opening) item.open = true;
        const from = opening ? 0 : answer.offsetHeight;
        const to = opening ? answer.scrollHeight : 0;
        if (reduceMotion) {
          item.open = opening;
          return;
        }
        if (!opening) answer.style.height = `${from}px`;
        const animation = answer.animate(
          [{ height: `${from}px`, opacity: opening ? 0 : 1 }, { height: `${to}px`, opacity: opening ? 1 : 0 }],
          { duration: 280, easing: "ease" }
        );
        animation.onfinish = () => {
          answer.style.height = "";
          if (!opening) item.open = false;
        };
      };

      if (item.open) {
        animate(false);
      } else {
        app.querySelectorAll(".faq-item[open]").forEach((other) => {
          const otherAnswer = other.querySelector(".faq-answer");
          const height = otherAnswer.offsetHeight;
          otherAnswer.style.height = `${height}px`;
          const closeAnimation = otherAnswer.animate(
            [{ height: `${height}px`, opacity: 1 }, { height: "0px", opacity: 0 }],
            { duration: 280, easing: "ease" }
          );
          closeAnimation.onfinish = () => { otherAnswer.style.height = ""; other.open = false; };
        });
        animate(true);
      }
    });
  });

  app.querySelector(".faq-attire-link").addEventListener("click", (event) => {
    event.preventDefault();
    window.app.navigateTo("details");
  });

  const rsvpForm = document.querySelector("#rsvpForm");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      window.app.showToast("Thank you! Your RSVP has been recorded in demo mode.");
      form.reset();
    });
  }
}
