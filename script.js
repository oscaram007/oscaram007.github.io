// --------------------------------------------------
// Hero Parallax
// --------------------------------------------------

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  if (!heroBg) return;

  const scrollY = window.scrollY;
  const speed = 0.35; // subtle, cinematic
  heroBg.style.transform = `translateY(${scrollY * speed}px)`;
});


// --------------------------------------------------
// Scroll Reveal Animation
// Elements fade in and rise slightly when visible
// --------------------------------------------------

const revealElements = document.querySelectorAll(
  ".featured-project, .project-image, .project-text"
);

// Add initial hidden state
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealElements.forEach(el => {
  revealObserver.observe(el);
});


// --------------------------------------------------
// Featured Image Depth Effect
// Slight parallax inside each image on scroll
// --------------------------------------------------

const featuredImages = document.querySelectorAll(".project-image img");

function updateImageDepth() {
  const scrollY = window.scrollY;

  featuredImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const offset = (rect.top + window.scrollY - scrollY) * -0.03;
    img.style.transform = `translateY(${offset}px) scale(1.02)`;
  });
}

window.addEventListener("scroll", updateImageDepth);


// --------------------------------------------------
// Smooth Anchor Scroll (future-proof if nav is added)
// --------------------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// --------------------------------------------------
// Performance Guard
// Prevent excessive scroll calculations
// --------------------------------------------------

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateImageDepth();
      ticking = false;
    });
    ticking = true;
  }
});
