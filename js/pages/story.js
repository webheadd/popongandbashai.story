const stories = [
  {
    title: "First Meet",
    image: "Chapter I",
    text: "Every story has a beginning. Ours started with an ordinary moment that, looking back, was anything but ordinary."
  },
  {
    title: "First Date",
    image: "Chapter II",
    text: "One conversation became another, one date became many, and somewhere along the way we started imagining a future together."
  },
  {
    title: "The Proposal",
    image: "Chapter III",
    text: "A question, a promise, and a yes. The next chapter began — and now we cannot wait to celebrate it with you."
  }
];

export function renderStory(app) {
  let index = 0;

  app.innerHTML = `
    <section class="page story-page" aria-labelledby="story-title">
      <div class="page-inner">
        <div class="story-header">
          <p class="eyebrow">Three little chapters</p>
          <h1 id="story-title">Our Story</h1>
          <p class="lead" style="margin-inline:auto">
            Turn the pages of our story, from the first hello to the question that changed everything.
          </p>
        </div>

        <article class="story-book ornate-card" aria-live="polite">
          <div class="story-book__image" id="storyImage">Chapter I</div>
          <div class="story-book__content">
            <span class="story-step" id="storyStep">Chapter I · First Meet</span>
            <h2 id="storyHeading">First Meet</h2>
            <p id="storyText"></p>
          </div>
        </article>

        <div class="story-controls">
          <button id="storyPrev" aria-label="Previous story">←</button>
          <div class="story-dots" id="storyDots"></div>
          <button id="storyNext" aria-label="Next story">→</button>
        </div>
      </div>
    </section>
  `;

  const image = document.querySelector("#storyImage");
  const step = document.querySelector("#storyStep");
  const heading = document.querySelector("#storyHeading");
  const text = document.querySelector("#storyText");
  const dots = document.querySelector("#storyDots");

  stories.forEach((story, i) => {
    const dot = document.createElement("button");
    dot.className = "story-dot";
    dot.setAttribute("aria-label", `Show ${story.title}`);
    dot.addEventListener("click", () => {
      index = i;
      update();
    });
    dots.appendChild(dot);
  });

  function update() {
    const story = stories[index];
    image.textContent = story.image;
    step.textContent = `Chapter ${["I", "II", "III"][index]} · ${story.title}`;
    heading.textContent = story.title;
    text.textContent = story.text;
    [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  document.querySelector("#storyPrev").addEventListener("click", () => {
    index = (index - 1 + stories.length) % stories.length;
    update();
  });

  document.querySelector("#storyNext").addEventListener("click", () => {
    index = (index + 1) % stories.length;
    update();
  });

  update();
}
