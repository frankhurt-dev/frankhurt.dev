/*==================== SPLASH SCREEN ====================*/
let intro = document.querySelector(".intro");
let logoHeader = document.querySelector(".logo__header");
let logoSpan = document.querySelectorAll(".logoSplash");

let lockScrolling = true;

    function preventScroll(e) {
      if (lockScrolling) {
        e.preventDefault();
      }
    }

    document.addEventListener('wheel', preventScroll, { passive: false });

    // Unlock scrolling after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      lockScrolling = false;
      console.log('Scrolling unlocked');
    }, 3000);

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