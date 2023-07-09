// Splash screen
let intro = document.querySelector(".intro");
let logoHeader = document.querySelector(".logo__header");
let logoSpan = document.querySelectorAll(".logo__splash");

// Lock scrolling
let lockScrolling = true;

// Prevent scrolling
function preventScroll(e) {
  if (lockScrolling) {
    e.preventDefault();
  }
}

// Check if the keydown event should be prevented
function preventKeyScroll(e) {
  if (
    lockScrolling &&
    (e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "PageUp" ||
      e.key === "PageDown" ||
      e.key === "Home" ||
      e.key === "End")
  ) {
    e.preventDefault();
  }
}

document.addEventListener("wheel", preventScroll, { passive: false }); // Prevent wheel scrolling
document.addEventListener("touchmove", preventScroll, { passive: false }); // Prevent touchmove
document.addEventListener("keydown", preventKeyScroll, { passive: false }); // Prevent arrow keys, Page Up/Down, Home and End keys

// Unlock scrolling after 2.5 seconds
setTimeout(() => {
  lockScrolling = false;
}, 2500);

// Remove the splash screen after 2.5 seconds
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
