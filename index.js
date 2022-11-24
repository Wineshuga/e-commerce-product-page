const menu = document.querySelector('#mobile--menu');

//Hamburger menu show on mobile view

function menuBar() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

//Hamburger menu show on mobile view

function noMenuBar() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

document.getElementById('header--menu_icon').addEventListener('click', menuBar)
document.getElementById('close').addEventListener('click', noMenuBar);