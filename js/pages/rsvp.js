export function renderRSVP(app) {
  app.innerHTML = `
    <section class="page rsvp-page" aria-labelledby="rsvp-title">
      <div class="page-inner">
        <div class="rsvp-header">
          <p class="eyebrow">We hope you can join us</p>
          <h1 id="rsvp-title">RSVP</h1>
          <p class="lead" style="margin-inline:auto">
            Kindly let us know if you will be celebrating with us. Your response helps us prepare a wonderful day for everyone.
          </p>
        </div>

        <form id="rsvpForm" class="rsvp-card ornate-card" novalidate>
          <div class="form-grid">
            <div class="field field--full">
              <label for="guestName">Your name</label>
              <input id="guestName" name="guestName" autocomplete="name" required placeholder="Full name">
            </div>

            <div class="field field--full">
              <label>Will you attend?</label>
              <div class="attendance">
                <label><input type="radio" name="attendance" value="accept" required> Joyfully accept</label>
                <label><input type="radio" name="attendance" value="decline"> Regretfully decline</label>
              </div>
            </div>

            <div class="field">
              <label for="guests">Number of guests</label>
              <select id="guests" name="guests">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
              </select>
            </div>

            <div class="field">
              <label for="meal">Meal preference</label>
              <select id="meal" name="meal">
                <option value="">Select one</option>
                <option>Regular</option>
                <option>Vegetarian</option>
                <option>Other dietary requirement</option>
              </select>
            </div>

            <div class="field field--full">
              <label for="message">A little message</label>
              <textarea id="message" name="message" placeholder="Leave a note for the couple..."></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button class="btn btn--solid" type="submit">Send RSVP</button>
          </div>
          <p class="form-note">Demo mode: connect this form to your preferred RSVP service before launch.</p>
        </form>
      </div>
    </section>
  `;

  document.querySelector("#rsvpForm").addEventListener("submit", (event) => {
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
