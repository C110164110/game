let slideIndex = 0;

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

// 初始啟動輪播
showSlides();

// 添加自動輪播功能，每隔 3000 毫秒（3 秒）切換一次
setInterval(() => {
    showSlides();
}, 3000);
