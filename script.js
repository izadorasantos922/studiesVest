const menuBtn = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('.menu-mobile');

menuBtn.addEventListener("click", (e) =>{
    menu.classList.add('active');
});
closeMenu.addEventListener("click", (e) =>{
    menu.classList.remove('active');
});