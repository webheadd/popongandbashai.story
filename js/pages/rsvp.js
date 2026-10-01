export function renderRSVP(app) {
  app.innerHTML = `
    <section class="page rsvp-page" aria-labelledby="rsvp-title">
      <button class="page-back" type="button" aria-label="Go back to main page">GO BACK</button>
      <div class="page-inner">
        <div class="rsvp-header">
          <p class="eyebrow">We hope you can join us</p>
          <h1 id="rsvp-title">RSVP</h1>
          <p class="lead" style="margin-inline:auto">
            Kindly let us know if you will be celebrating with us. Your response helps us prepare a wonderful day for everyone.
          </p>
        </div>

        <div class="rsvp-card">
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
