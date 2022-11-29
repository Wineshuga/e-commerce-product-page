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

// TO DISPLAY MODAL ON DESKTOP

function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

// TO HIDE MODAL ON DESKTOP

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// TO SLIDE IMAGES ON DESKTOP AND MOBILE

let slideIndex = 1;
showSlides(slideIndex);
// previous and next arrows
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// current images
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("main--slide");
    let dots = document.getElementsByClassName("demo");
    let i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}