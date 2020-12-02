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
refs.body.classList.add('light-theme');
refs.themeSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    refs.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});
// СОХРАННИЕНИЕ ТЕМЫ ПОСЛЕ ПЕРЕЗАГРУЗКИ
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark-theme') {
  refs.body.classList.add('dark-theme');
  refs.themeSwitch.checked = true;
}

if (savedTheme === 'light-theme') {
  refs.body.classList.add('light-theme');
  refs.themeSwitch.checked = false;
}
