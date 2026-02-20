// Parallax Hero
window.addEventListener("scroll", () => {
  const heroBg = document.querySelector(".hero-bg");
  let offset = window.scrollY * 0.4;
  heroBg.style.transform = `translateY(${offset}px)`;
});

// Lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".grid-item").forEach(item=>{
  item.addEventListener("click", ()=>{
    lightbox.classList.add("active");
    lightboxImg.src = item.dataset.img;
  });
});

lightbox.addEventListener("click", ()=>{
  lightbox.classList.remove("active");
});
