// script.js

let slideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    const sensitivity = 50;

    if (touchEndX < touchStartX - sensitivity) {
        // 向左滑動
        slideIndex++;
        showSlides();
    } else if (touchEndX > touchStartX + sensitivity) {
        // 向右滑動
        slideIndex--;
        showSlides();
    }
}

// 添加觸摸事件監聽器
const carousel = document.querySelector('.carousel');
carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchend', handleTouchEnd, false);

// 初始啟動輪播
showSlides();

