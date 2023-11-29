
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
