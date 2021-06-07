import './sass/main.scss';
import { foodCards } from './js/create-cards';
// import foodCardsTpl from '../templates/food-card.hbs';
// console.log(foodCardsTpl);
// console.log(foodCards);
import { changesTheme } from './js/changes-background';
// console.log(changesTheme);
document.body.classList.add(localStorage.getItem('theme'));
