const header = document.querySelector('#navigation');
document.addEventListener('scroll', () => {
    header.classList[
        window.scrollY > 0
        ? 'add'
        : 'remove'
    ]('sticky');
});