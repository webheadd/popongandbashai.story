export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          // Only animate once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,

      // Trigger at the bottom edge of the viewport
      rootMargin: "0px 0px -1px 0px",
    },
  );

  function observeElements() {
    document
      .querySelectorAll(".scroll-animate:not(.show)")
      .forEach((element) => {
        observer.observe(element);
      });
  }

  // Initial elements
  observeElements();

  // Watch for dynamically added elements
  const mutationObserver = new MutationObserver(() => {
    observeElements();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

/*
   Wait until EVERYTHING has loaded
   including images
*/

window.addEventListener("load", () => {
  initScrollAnimations();
});
