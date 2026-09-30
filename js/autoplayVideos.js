let observer;
const observedVideos = new Set();

export function initAutoplayVideos(root = document) {
  observedVideos.forEach((video) => {
    if (!video.isConnected || !root.contains(video)) {
      observer?.unobserve(video);
      video.pause();
      observedVideos.delete(video);
    }
  });

  const videos = root.querySelectorAll(".autoplay-video");
  if (!videos.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  videos.forEach((video) => {
    // video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = "metadata";

    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const currentVideo = entry.target;
          const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;

          if (isVisible) {
            observedVideos.forEach((otherVideo) => {
              if (otherVideo !== currentVideo) otherVideo.pause();
            });
            void currentVideo.play().catch(() => {});
          } else {
            currentVideo.pause();
          }
        });
      }, { threshold: 0.5 });
    }

    if (!observedVideos.has(video)) {
      observer.observe(video);
      observedVideos.add(video);
    }
  });
}