const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// ССЫЛКИ НА ОБЬЕКТЫ
const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),
};
// ПЕРЕЛЮЧЕНИЯ ТЕМЫ И СОХРАНЕНИЯ ДАННОЙ В LOCALSTORGE
console.log(Theme.DARK);
refs.themeSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
// СОХРАННИЕНИЕ ТЕМЫ ПОСЛЕ ПЕРЕЗАГРУЗКИ
const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
} else {
  refs.body.classList.add(Theme.LIGHT);
}
