const audio = document.querySelector("#backgroundMusic");
const toggle = document.querySelector("#musicToggle");

export function initMusic() {
  audio.addEventListener("play", updateUI);
  audio.addEventListener("pause", updateUI);
  audio.addEventListener("ended", updateUI);
  updateUI();
}

export async function playMusic() {
  try {
    await audio.play();
    updateUI();
    return true;
  } catch (error) {
    updateUI();
    return false;
  }
}

export function toggleMusic() {
  if (audio.paused) {
    playMusic();
  } else {
    audio.pause();
  }
}

function updateUI() {
  const playing = !audio.paused;
  toggle.classList.toggle("is-playing", playing);
  toggle.setAttribute("aria-pressed", String(playing));
  toggle.setAttribute("aria-label", playing ? "Pause music" : "Play music");
}
