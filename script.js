// Scroll reveal for sections
const sections = document.querySelectorAll('section');
const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{ threshold:0.15 });

sections.forEach(sec => { sec.classList.add('hidden'); reveal.observe(sec); });

// Smooth scroll: scroll-down arrow
document.querySelector('.scroll-down')?.addEventListener('click',()=>{
  document.querySelector('#featured').scrollIntoView({ behavior:'smooth' });
});

// Smooth scroll: navbar links
document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Lightbox modal functionality
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

// Parallax effect for project images
const projectImages = document.querySelectorAll('.project img');
window.addEventListener('scroll',()=>{
  const scrollTop = window.scrollY;
  projectImages.forEach(img=>{
    const offset = img.parentElement.offsetTop;
    const height = img.parentElement.offsetHeight;
    if(scrollTop + window.innerHeight > offset && scrollTop < offset + height){
      img.style.transform = `translateY(${(scrollTop - offset) * 0.3}px) scale(1.05)`;
    }
  });
});

