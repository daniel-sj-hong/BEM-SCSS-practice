const $toggleButton = document.querySelector('.header__toggle');
const $navList = document.querySelector('.header__list');

$toggleButton.addEventListener('click', handleClick);

function handleClick(event) {
  if ($navList.className === 'header__list') {
    $navList.className = 'header__responsive';
  } else {
    $navList.className = 'header__list'
  }
}
