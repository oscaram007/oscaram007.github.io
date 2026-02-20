// Scroll reveal sections
const sections = document.querySelectorAll('section');
const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{ threshold:0.15 });
sections.forEach(sec => { sec.classList.add('hidden'); reveal.observe(sec); });

// Smooth scroll: scroll-down & navbar
document.querySelector('.scroll-down')?.addEventListener('click',()=>{
  document.querySelector('#featured').scrollIntoView({ behavior:'smooth' });
});
document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Lightbox modal
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.project').forEach(project=>{
  project.addEventListener('click',()=>{
    lightbox.style.display='flex';
    lightboxImg.src=project.querySelector('img').src;
    lightboxTitle.textContent=project.querySelector('h3').textContent;
    lightboxCategory.textContent=project.querySelector('p').textContent;
    lightboxDesc.textContent='Detailed description of this project goes here.';
  });
});
closeBtn.addEventListener('click',()=>{ lightbox.style.display='none'; });
lightbox.addEventListener('click',e=>{ if(e.target===lightbox) lightbox.style.display='none'; });

// GSAP + ScrollTrigger Cinematic Animations
gsap.registerPlugin(ScrollTrigger);

// Hero fade-up
gsap.from("#hero .hero-content h1", { y:100, opacity:0, duration:1.5, scrollTrigger:{ trigger:"#hero", start:"top top", end:"bottom top", scrub:true } });
gsap.from("#hero .hero-content p", { y:50, opacity:0, duration:1.2, scrollTrigger:{ trigger:"#hero", start:"top top", end:"bottom top", scrub:true } });

// Project pinning + fade
gsap.utils.toArray(".projects .project").forEach((project) => {
  ScrollTrigger.create({
    trigger: project,
    start: "top 80%",
    end: "bottom 20%",
    pin: true,
    pinSpacing: false,
    scrub: true
  });
  gsap.from(project, { opacity:0, y:100, duration:1, scrollTrigger:{ trigger:project, start:"top 80%", end:"bottom 60%", scrub:true } });
});

// Parallax subtle images
gsap.utils.toArray(".project img").forEach(img=>{
  gsap.to(img, { y:-50, ease:"none", scrollTrigger:{ trigger: img.parentElement, start:"top bottom", end:"bottom top", scrub:true } });
});
