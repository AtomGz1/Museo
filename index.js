document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.querySelectorAll('.slider-item');
    const navLinks = document.querySelectorAll('.slider-nav a');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 5000;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function pauseSlideShow() {
        clearInterval(slideInterval);
    }

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            showSlide(currentIndex);
            pauseSlideShow();
            startSlideShow();
        });
    });

    showSlide(currentIndex);
    startSlideShow();

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                console.log(`Navegando a ${targetId}`);
                window.scrollTo({
                    top: targetElement.offsetTop - 100, 
                    behavior: "smooth"
                });
            }
        });
    });
});
    
