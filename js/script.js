// humberger
const humberger = document.querySelector(".humberger");
const navMenu = document.querySelector("nav");

humberger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// dark 
const darkModeBtn = document.querySelector('.darkmode');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
});