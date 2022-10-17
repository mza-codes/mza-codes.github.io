// Theme Controls

const page = document.querySelector('#page');
const toggle = page.querySelector('.toggle-input');
const toggleIcon = page.querySelector('.toggle-icon');

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  if (localStorage.color) {
    page.classList.replace(page.classList[0], localStorage.color)
  }
}

function toggleTheme() {
  replaceClassv2();
  updateLocalStorage();
}

let click = 0
function replaceClassv2() {
  click += 1
  const theme = ['orange', 'purple', 'blue', 'yellow', 'red', 'green', 'white', 'ylw', 'pale', 'brown']
  if (click == theme.length) { click = 0 }
  page.classList.replace(page.classList[0], theme[click])
  updateLocalStorage()
}

function updateLocalStorage() {
  localStorage.setItem('color', page.classList[0]);
}

// toggle.addEventListener('change', toggleTheme);

// ---- ENDS HERE ----//