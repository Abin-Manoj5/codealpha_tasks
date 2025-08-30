


const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); 
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
