const menuBtn = document.getElementById('menu-btn');
const headerLinks = document.getElementById('header-links');
const headerSearch = document.getElementById('header-search');
const searchIcon = document.getElementById('search-icon');

menuBtn.addEventListener('click', (e) => {
    headerLinks.classList.toggle('open');
    const isOpen = headerLinks.classList.contains('open');
    isOpen ? menuBtn.classList.add('close') : menuBtn.classList.remove('close');
});

searchIcon.addEventListener('click', (e) => {
    headerSearch.classList.toggle('open')
});