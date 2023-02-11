console.log('hi!!!!!!!!!!');
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    (window.scrollY >= 100)? nav.setAttribute('id', 'navbar') : nav.removeAttribute('id');
})