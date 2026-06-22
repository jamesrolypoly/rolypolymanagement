const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const cursor = document.querySelector(".custom-cursor");
const trail = document.querySelector(".cursor-trail");
const emailLink = document.querySelector(".email-link");

if (finePointer.matches && !reducedMotion.matches && cursor && trail) {
  let pointerX = 0;
  let pointerY = 0;
  let trailX = 0;
  let trailY = 0;

  const animateTrail = () => {
    trailX += (pointerX - trailX) * 0.13;
    trailY += (pointerY - trailY) * 0.13;
    trail.style.left = `${trailX}px`;
    trail.style.top = `${trailY}px`;
    requestAnimationFrame(animateTrail);
  };

  window.addEventListener("mousemove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.classList.add("is-visible");
    trail.classList.add("is-visible");
  });

  document.documentElement.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-visible");
    trail.classList.remove("is-visible");
  });

  if (emailLink) {
    emailLink.addEventListener("mouseenter", () => {
      cursor.classList.add("is-over-link");
    });

    emailLink.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-over-link");
    });
  }

  animateTrail();
}
