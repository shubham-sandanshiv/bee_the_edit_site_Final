// Simple interactivity: mobile menu & smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', ()=> {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.background = 'white';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = '0 8px 30px rgba(11,11,11,0.12)';
  });

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        window.scrollTo({top: target.offsetTop - 70, behavior: 'smooth'});
        // hide mobile nav
        if(window.innerWidth < 900 && nav){
          nav.style.display = 'none';
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function activateMenu() {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80; // adjust for navbar height
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
  activateMenu(); // run on page load
});
