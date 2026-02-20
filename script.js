// Smooth scroll
document.querySelector('.scroll-down')?.addEventListener('click',()=>{ document.querySelector('#featured').scrollIntoView({ behavior:'smooth' }); });
document.querySelectorAll('.nav a').forEach(link=>{ link.addEventListener('click', e=>{ e.preventDefault(); document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' }); }); });

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.featured-project').forEach(project=>{
  project.addEventListener('click',()=>{
    lightbox.style.display='flex';
    lightboxImg.src=project.querySelector('img').src;
    lightboxTitle.textContent=project.querySelector('h3').textContent;
    lightboxCategory.textContent=project.querySelectorAll('p')[0].textContent;
    lightboxDesc.textContent=project.querySelectorAll('p')[1].textContent;
  });
});

closeBtn.addEventListener('click',()=>{ lightbox.style.display='none'; });
lightbox.addEventListener('click', e=>{ if(e.target===lightbox) lightbox.style.display='none'; });

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero .hero-content h1",{
  y:100, opacity:0, duration:1.5,
  scrollTrigger:{ trigger:"#hero", start:"top top", end:"bottom top", scrub:true }
});
gsap.from("#hero .hero-content p",{
  y:50, opacity:0, duration:1.2,
  scrollTrigger:{ trigger:"#hero", start:"top top", end:"bottom top", scrub:true }
});

gsap.utils.toArray(".featured-project").forEach(project=>{
  const direction = project.classList.contains('reverse') ? -100 : 100;
  gsap.from(project.querySelector('.project-text'),{
    x:direction, opacity:0, duration:1,
    scrollTrigger:{ trigger:project, start:"top 80%", end:"bottom 60%", scrub:true }
  });
  gsap.from(project.querySelector('.project-image img'),{
    x:-direction/2, opacity:0, duration:1.2,
    scrollTrigger:{ trigger:project, start:"top 80%", end:"bottom 60%", scrub:true }
  });
});
