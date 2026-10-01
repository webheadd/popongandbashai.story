export function createPetals(layer, count = 40) {
  if (!layer || typeof layer.replaceChildren !== "function") return () => {};

  const petalCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 40;
  layer.classList.add("petal-layer");
  layer.setAttribute("aria-hidden", "true");
  layer.replaceChildren();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => layer.replaceChildren();
  }

  const petals = document.createDocumentFragment();
  for (let index = 0; index < petalCount; index += 1) {
    const petal = document.createElement("span");
    const size = 7 + Math.random() * 10;
    petal.className = "petal";
    petal.style.setProperty("--petal-left", `${Math.random() * 100}%`);
    petal.style.setProperty("--petal-size", `${size}px`);
    petal.style.setProperty("--petal-height", `${size * 1.45}px`);
    petal.style.setProperty("--petal-duration", `${8 + Math.random() * 8}s`);
    petal.style.setProperty("--petal-delay", `${-Math.random() * 16}s`);
    petal.style.setProperty("--petal-drift", `${Math.random() * 120 - 60}px`);
    petal.style.setProperty("--petal-turn", `${Math.random() * 540 - 270}deg`);
    petals.append(petal);
  }

  layer.append(petals);
  return () => layer.replaceChildren();
}