const CONFETTI_COLORS = [
  "#b4a7d6",
  "#9b8fcc",
  "#c8bde8",
  "#d4cceb",
  "#ffffff",
  "#f5e6a8",
];

/** 主爆發粒子數 */
const MAIN_BURST_PARTICLES = 72;
/** 兩側小爆發粒子數 */
const SIDE_BURST_PARTICLES = 28;
/** 畫布保留時間（毫秒），略大於粒子自然落下 */
const CANVAS_LIFETIME_MS = 1600;

type ConfettiOptions = import("canvas-confetti").Options;

export async function fireCheckoutSuccessConfetti(): Promise<void> {
  if (typeof window === "undefined") return;

  const confettiModule = await import("canvas-confetti");
  const confetti = confettiModule.default;

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "99999";
  document.body.appendChild(canvas);

  const shoot = confetti.create(canvas, {
    resize: true,
    useWorker: true,
    disableForReducedMotion: false,
  });

  const burst = (options: ConfettiOptions) => {
    shoot({
      ...options,
      colors: CONFETTI_COLORS,
      shapes: ["star"],
    });
  };

  burst({
    particleCount: MAIN_BURST_PARTICLES,
    spread: 68,
    startVelocity: 38,
    gravity: 1.05,
    scalar: 0.92,
    origin: { x: 0.5, y: 0.56 },
  });

  window.setTimeout(() => {
    burst({
      particleCount: SIDE_BURST_PARTICLES,
      angle: 62,
      spread: 48,
      startVelocity: 32,
      gravity: 1.1,
      scalar: 0.88,
      origin: { x: 0.12, y: 0.62 },
    });
    burst({
      particleCount: SIDE_BURST_PARTICLES,
      angle: 118,
      spread: 48,
      startVelocity: 32,
      gravity: 1.1,
      scalar: 0.88,
      origin: { x: 0.88, y: 0.62 },
    });
  }, 100);

  window.setTimeout(() => {
    canvas.remove();
  }, CANVAS_LIFETIME_MS);
}
