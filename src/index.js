import './sass/main.scss';
import marcupCardsTpl from './templates/marcup-cards.hbs';
import menu from '/menu.json';
console.log(menu);
console.log(marcupCardsTpl(menu));

const mainMenu = menu.map(marcupCardsTpl).join('');
console.log(mainMenu);
const ul = document.querySelector('.js-menu');
ul.insertAdjacentHTML('afterbegin', mainMenu);
console.log(ul);

// console.log(createCardsMenu(menu));

const input = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);

input.addEventListener('change', onInputChange);

function onInputChange(event) {
  event.preventDefault();
  const darkTheme = document.body.classList.contains(Theme.DARK);

  if (!darkTheme) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', document.body.classList);
  } else if (darkTheme) {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', document.body.classList);
  }
}

function keepsTheme() {
  if (!localStorage.getItem('theme')) {
    return localStorage.setItem('theme', document.body.classList);
  } else {
    return document.body.classList.add(localStorage.getItem('theme'));
  }
}

keepsTheme();

const localStorageTheme = localStorage.getItem('theme');

function keepsSwitch(value) {
  if (value === Theme.LIGHT) {
    return (input.checked = false);
  } else if (value === Theme.DARK) {
    return (input.checked = true);
  }
}

keepsSwitch(localStorageTheme);
