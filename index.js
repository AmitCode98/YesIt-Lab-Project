
// menu desigen
const mobile_nav= document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");



const toggleNavbar = ()=>{ 
    nav_header.classList.toggle("active")
};

mobile_nav.addEventListener('click',() => toggleNavbar())



// first animation
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    }, 1000);
})