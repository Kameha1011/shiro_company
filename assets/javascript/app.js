const nav = document.querySelector('nav');
const allIcons = document.querySelectorAll('.social-media-icons');
const artistNames = document.querySelectorAll('.artist-name');
const artistImgs = document.querySelectorAll('.artist-picture');
// change nav bgcolor
window.addEventListener('scroll', () => {
    (window.scrollY >= 100)? nav.setAttribute('id', 'navbar') : nav.removeAttribute('id');
})
// alternate visibility for artist names and icos
for (let i = 0; i < allIcons.length; i++) {
    const icons = allIcons[i];
    const artistName = artistNames[i];
    const artistImg = artistImgs[i];
    
    artistImg.addEventListener('mouseover', () => {
        artistName.classList.add('show-block');
        icons.classList.add('show-block');
    });
    artistImg.addEventListener('mouseleave', () => {
        artistName.classList.remove('show-block');
        icons.classList.remove('show-block');
    })
}
// animation
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
