const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    document.querySelector('.navBarLinks').classList.toggle('open');
    menuButton.classList.toggle('open');
})
