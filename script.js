// HERO PARALLAX
const heroBg=document.querySelector(".hero-bg");
window.addEventListener("scroll",()=>{if(heroBg){heroBg.style.transform=`translateY(${window.scrollY*0.35}px)`;}});

// SCROLL REVEAL
const revealTargets=document.querySelectorAll(".featured-project,.grid-section,.section-title");
revealTargets.forEach(el=>{el.style.opacity="0";el.style.transform="translateY(50px)";el.style.transition="opacity .9s ease,transform .9s ease";});
const revealObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity="1";entry.target.style.transform="translateY(0)";revealObserver.unobserve(entry.target);}})},{threshold:.2});
revealTargets.forEach(el=>revealObserver.observe(el));

// FEATURED IMAGE DEPTH
const featuredImages=document.querySelectorAll(".project-image img");
function updateImageDepth(){featuredImages.forEach(img=>{const rect=img.getBoundingClientRect();const offset=rect.top*-0.04;img.style.transform=`translateY(${offset}px) scale(1.02)`;});}
window.addEventListener("scroll",()=>{requestAnimationFrame(updateImageDepth);});

// CINEMATIC STACK PINNING
const featuredSections=document.querySelectorAll(".featured-project");
const pinObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-active");}else{entry.target.classList.remove("is-active");}})},{threshold:.6});
featuredSections.forEach(section=>pinObserver.observe(section));

// LIGHTBOX
const lightbox=document.querySelector(".lightbox");
const lightboxImg=lightbox?.querySelector("img");
document.querySelectorAll(".grid-item").forEach(item=>{item.addEventListener("click",()=>{if(!lightbox) return; lightbox.classList.add("active"); lightboxImg.src=item.dataset.img;});});
lightbox?.addEventListener("click",()=>{lightbox.classList.remove("active");});
