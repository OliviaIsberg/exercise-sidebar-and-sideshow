let delay = 5000;
let scroller = document.getElementById('scroller');
let images = document.getElementById('scroller').getElementsByTagName('img');

let index = 0;

window.setInterval(function () {
    index = (index + 1) % images.length;
    scroller.style.transform = 'translateX(' + (index * -100) + 'vw)';
}, delay);
