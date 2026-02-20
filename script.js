gsap.registerPlugin(ScrollTrigger);

// Hero parallax & overlay
gsap.to(".hero-bg", { yPercent:20, ease:"none", scrollTrigger:{ trigger:"#hero", start:"top top", end:"bottom top", scrub:true } });
gsap.to(".hero-bg::after", { opacity:1, scrollTrigger:{ trigger:"#hero", start:"top top", end:"bottom top", scrub:true } });

// Featured projects
gsap.utils.toArray(".featured-project").forEach(project=>{
  const direction = project.classList.contains("reverse")?-100:100;

  // Pin
  ScrollTrigger.create({ trigger:project, start:"top 80%", end:"bottom 60%", pin:true, pinSpacing:false });

  // Animate text/image
  gsap.from(project.querySelector(".project-text"), { x:direction, opacity:0, duration:1, scrollTrigger:{ trigger:project, start:"top 90%", end:"bottom 60%", scrub:true } });
  gsap.from(project.querySelector(".project-image img"), { x:-direction/2, opacity:0, duration:1.2, scrollTrigger:{ trigger:project, start:"top 90%", end:"bottom 60%", scrub:true } });

  // Background number parallax
  const bgNumber = project.querySelector(".project-bg-number");
  if(bgNumber){ gsap.to(bgNumber, { yPercent:20, ease:"none", scrollTrigger:{ trigger:project, start:"top bottom", end:"bottom top", scrub:true } }); }

  // Overlay scroll fade
  const overlay = project.querySelector(".overlay");
  if(overlay){ gsap.to(overlay, { opacity:0.15, scrollTrigger:{ trigger:project, start:"top 90%", end:"bottom 60%", scrub:true } }); }

  // Hover depth effect
  project.addEventListener("mouseenter",()=>{ if(bgNumber) gsap.to(bgNumber,{x:10,y:-10,duration:0.5}); });
  project.addEventListener("mouseleave",()=>{ if(bgNumber) gsap.to(bgNumber,{x:0,y:0,duration:0.5}); });
});

// Smooth scroll
document.querySelector('.scroll-down')?.addEventListener('click',()=>{ document.querySelector('#featured').scrollIntoView({behavior:'smooth'}); });
document.querySelectorAll('.nav a').forEach(link=>{ link.addEventListener('click', e=>{ e.preventDefault(); document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'}); }); });

// Lightbox
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.querySelector('.lightbox-img');
const lightboxTitle=document.getElementById('lightbox-title');
const lightboxCategory=document.getElementById('lightbox-category');
const lightboxDesc=document.getElementById('lightbox-desc');
const closeBtn=document.querySelector('.lightbox .close');

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
