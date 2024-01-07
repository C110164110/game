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

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += ' active';
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
    } else if (touchEndX > touchStartX + sensitivity) {
        // 向右滑動
        slideIndex--;
    }

    showSlides();
}

// 添加觸摸事件監聽器
const carousel = document.querySelector('.carousel');
carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchend', handleTouchEnd, false);

// 添加滑鼠滾輪事件監聽器
carousel.addEventListener('wheel', handleWheel, false);

// 初始啟動輪播
showSlides();

// 滑鼠滾輪事件處理
function handleWheel(event) {
    if (event.deltaY < 0) {
        // 滑鼠向上滾動，向左切換
        slideIndex--;
    } else {
        // 滑鼠向下滾動，向右切換
        slideIndex++;
    }

    showSlides();
    // 防止預設滾動事件
    event.preventDefault();
}
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// 修改 showSlides 函數中的邏輯，以處理循環切換
function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    dots[slideIndex].className += ' active';
}
