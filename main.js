    let delay = 5000;
let scroller = document.getElementById('scroller');
let images = document.getElementById('scroller').getElementsByTagName('img');

let index = 0;

window.setInterval(function () {
    index = (index + 1) % images.length;
    scroller.style.transform = 'translateX(' + (index * -100) + 'vw)';
}, delay);


const burgerMenu = document.getElementById('burgerIcon');
const sideMenu = document.getElementById('sidemenu');
const aside = document.getElementById('aside');

function showMenu() {
    sideMenu.classList.toggle('show');
    burgerMenu.style.display = 'none';
}

burgerMenu.addEventListener('click', showMenu);

sideMenu.addEventListener('click', function(e) {
    if(e.target === sideMenu) {
        sideMenu.classList.toggle('show');
        burgerMenu.style.display = 'inline';
    }
}, false);
