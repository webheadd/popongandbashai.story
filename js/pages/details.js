export function renderDetails(app) {
  app.innerHTML = `
    <section class="page" aria-labelledby="details-title">
      <div class="page-inner">
        <div class="details-header">
          <p class="eyebrow">Everything you need to know</p>
          <h1 id="details-title">The Details</h1>
          <p class="lead" style="margin-inline:auto">
            We would love to celebrate this day with you. Here is everything you need for the occasion.
          </p>
        </div>

        <div class="details-grid">
          <article class="detail-card ornate-card">
            <div class="detail-card__icon">✦</div>
            <h3>The Ceremony</h3>
            <p>Join us as we say our vows and begin this new chapter together.</p>
            <ul class="detail-meta">
              <li><strong>4:00 PM</strong></li>
              <li>Venue Name</li>
              <li>City, Philippines</li>
            </ul>
            <br>
            <button class="btn" data-map="ceremony">View Map</button>
          </article>

          <article class="detail-card ornate-card">
            <div class="detail-card__icon">✦</div>
            <h3>The Reception</h3>
            <p>Dinner, dancing, stories, and a celebration with the people we love.</p>
            <ul class="detail-meta">
              <li><strong>6:00 PM</strong></li>
              <li>Reception Venue</li>
              <li>City, Philippines</li>
            </ul>
            <br>
            <button class="btn" data-map="reception">View Map</button>
          </article>

          <article class="detail-card detail-card--wide ornate-card">
            <div class="detail-card__icon">❧</div>
            <h3>Dress Code</h3>
            <p>Garden Formal · Pastels & Elegant Florals</p>
            <p>Think romantic silhouettes, soft colors, florals, and a little bit of Regency charm.</p>
          </article>

          <article class="detail-card detail-card--wide ornate-card">
            <div class="detail-card__icon">✧</div>
            <h3>The Day</h3>
            <div class="timeline">
              <div class="timeline__item"><strong>4:00</strong><span>Ceremony</span></div>
              <div class="timeline__item"><strong>5:00</strong><span>Cocktail</span></div>
              <div class="timeline__item"><strong>6:00</strong><span>Reception</span></div>
              <div class="timeline__item"><strong>7:00</strong><span>Dinner</span></div>
              <div class="timeline__item"><strong>8:00</strong><span>Celebration</span></div>
            </div>
          </article>

          <article class="detail-card ornate-card">
            <div class="detail-card__icon">❦</div>
            <h3>Parking</h3>
            <p>Parking information will be added here once the final venue arrangements are confirmed.</p>
          </article>

          <article class="detail-card ornate-card">
            <div class="detail-card__icon">❦</div>
            <h3>FAQ</h3>
            <p>Have a question? Add frequently asked questions here as the wedding plans come together.</p>
          </article>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll("[data-map]").forEach((button) => {
    button.addEventListener("click", () => {
      window.app.showToast("Add your Google Maps venue link here.");
    });
  });
}
