let val=true;
const toggleBtn = document.querySelector('#show-close i');
const mobNavOpt = document.querySelector('#mob-nav-opt');
const navLinks = document.querySelectorAll('#mob-nav-opt li');
const mobNavBtn = document.querySelector('#mob-nav-btn');
const source = document.querySelector('nav');
const target = document.querySelector('#center');

const sourceHeight = source.offsetHeight;
target.style.marginTop = `${sourceHeight}px`;

toggleBtn.addEventListener('click', () => {
    val?toggleBtn.classList.replace('ri-menu-line','ri-close-line'):toggleBtn.classList.replace('ri-close-line','ri-menu-line');
    val?mobNavOpt.style.display="flex":mobNavOpt.style.display="none";
    val=!val;
});

navLinks.forEach((li)=>li.addEventListener('click', () => {
    toggleBtn.classList.replace('ri-close-line','ri-menu-line');
    mobNavOpt.style.display="none";
    val=!val;
}));
mobNavBtn.addEventListener('click', () => {
    toggleBtn.classList.replace('ri-close-line','ri-menu-line');
    mobNavOpt.style.display="none";
    val=!val;
});