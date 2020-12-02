import foodListTemplate from '../template/food-list.hbs';
import menu from '../menu.json';

const markup = foodListTemplate(menu);
console.log(markup);

const foodListRef = document.querySelector('.js-menu');

foodListRef.insertAdjacentHTML('afterbegin', markup);
