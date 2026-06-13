const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('show')
  navMenu.classList.toggle('show');
  console.log(navMenu);
});

// Footer info
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;