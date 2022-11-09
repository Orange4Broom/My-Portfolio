const header = document.querySelector('#navigation');
document.addEventListener('scroll', () => {
    header.classList[
        window.scrollY > 0
        ? 'add'
        : 'remove'
    ]('sticky');
});

const showButton = document.querySelector('#menuButton');
const homeButton = document.querySelector('#homeButton');
const aboutButton = document.querySelector('#aboutButton');
const contactButton = document.querySelector('#socialButton');
const menu = document.querySelector('#menu');
menu.classList.add('hide');
let click = 0;

showButton.onclick = function () {
        menu.classList[click%2==0 ?'remove' :'add']('hide');
    click++;
}

homeButton.onclick = function () {
        menu.classList[click%2==0 ?'remove' :'add']('hide');
    click++;
}

aboutButton.onclick = function () {
    menu.classList[click%2==0 ?'remove' :'add']('hide');
click++;
}

contactButton.onclick = function () {
    menu.classList[click%2==0 ?'remove' :'add']('hide');
click++;
}