/*
// ------------------------------------------------------------------------
// Template path: src/template/navbar/navbar.xml
// ------------------------------------------------------------------------
*/

const mainNavbar = document.querySelector('#mainNavbar');
const mainNavbarSearch = document.querySelector('#mainNavbarSearch');
const mainNavbarSearchOpen = document.querySelector('#mainNavbarSearchOpen');
const mainNavbarSearchClose = document.querySelector('#mainNavbarSearchClose');

if (mainNavbar !== null) {
  mainNavbarSearchOpen.addEventListener('click', () => {
    mainNavbar.classList.remove('navbar-search-hidden');
    mainNavbar.classList.add('navbar-search-open');
    $('#mainNavbarCollapse').collapse('hide');

    mainNavbarSearch.classList.add('open');
  });

  mainNavbarSearchClose.addEventListener('click', () => {
    mainNavbarSearch.classList.remove('open');

    mainNavbar.classList.remove('navbar-search-open');
    mainNavbar.classList.add('navbar-search-hidden');
    setTimeout(() => {
      mainNavbar.classList.remove('navbar-search-hidden');
    }, 500);
  });
}
