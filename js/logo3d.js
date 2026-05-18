export function initLogo3D() {
  const wrapper = document.getElementById('logo3dWrapper');
  const img     = document.getElementById('logo3dImg');
  if (!wrapper || !img) return;

  // Skip on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const MAX_TILT  = 22;   // max degrees of rotation
  const MAX_SCALE = 1.06; // subtle scale-up on hover

  let animFrame;
  let currentX = 0;
  let currentY = 0;
  let targetX  = 0;
  let targetY  = 0;
  let isOver   = false;

  // Smooth lerp loop — runs only while hovering
  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick() {
    currentX = lerp(currentX, targetX, 0.1);
    currentY = lerp(currentY, targetY, 0.1);

    img.style.transform =
      `rotateX(${currentX}deg) rotateY(${currentY}deg) scale(${MAX_SCALE})`;

    animFrame = requestAnimationFrame(tick);
  }

  function startTilt() {
    if (!isOver) {
      isOver = true;
      img.classList.add('is-tilting');
      tick();
    }
  }

  function stopTilt() {
    isOver = false;
    img.classList.remove('is-tilting');
    cancelAnimationFrame(animFrame);

    // Smoothly reset to neutral before returning animation control to CSS
    targetX = 0;
    targetY = 0;
    img.style.transform = '';
  }

  // Track cursor relative to the wrapper center
  wrapper.addEventListener('mousemove', e => {
    startTilt();

    const rect   = wrapper.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2); // -1 to +1
    const dy     = (e.clientY - cy) / (rect.height / 2); // -1 to +1

    targetY =  dx * MAX_TILT;   // move right → rotate right
    targetX = -dy * MAX_TILT;   // move down  → tilt back
  });

  wrapper.addEventListener('mouseleave', stopTilt);

  // Global mouse — broader tracking zone (whole viewport, reduced intensity)
  document.addEventListener('mousemove', e => {
    if (isOver) return; // wrapper handler takes priority

    const rect = wrapper.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Normalize against full screen, reduced effect
    const dx = (e.clientX - cx) / vw;
    const dy = (e.clientY - cy) / vh;

    targetY =  dx * MAX_TILT * 0.4;
    targetX = -dy * MAX_TILT * 0.4;

    // Apply only a gentle rotation, keep CSS float animation running
    img.style.transform =
      `rotateX(${targetX}deg) rotateY(${targetY}deg) scale(1)`;
  });
}
