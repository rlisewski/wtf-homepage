const navButton = document.querySelector('.navigation__button--js');

navButton.innerHTML = '☰';
navButton.addEventListener('click', (e) => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation__menu--visible');
  if (nav.classList.contains('navigation__menu--visible')) {
    navButton.innerHTML = 'X';
  } else {
    navButton.innerHTML = '☰';
  }
})