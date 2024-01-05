
// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.getElementById('toggleButton');
//     const navMenu = document.querySelector('.nav-menu');

//     toggleButton.addEventListener('click', function () {
//         navMenu.classList.toggle('menu-visible');
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navBar = document.querySelector('.nav-bar');

    toggleButton.addEventListener('click', function () {
        navBar.classList.toggle('expanded');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});