// Slideshow Variables
let slideIndex1 = 1;
let slideIndex2 = 1;
let autoSlideInterval1 = null;
let autoSlideInterval2 = null;
let isHovered1 = false;
let isHovered2 = false;

// Initialize slideshows
document.addEventListener('DOMContentLoaded', function() {
    // Show first slides
    showSlide(slideIndex1, 'slideshow1');
    showSlide(slideIndex2, 'slideshow2');

    // Start auto-rotation
    startAutoSlide('slideshow1');
    startAutoSlide('slideshow2');

    // Add hover listeners to first ad
    const ad1 = document.querySelector('.slideshow-container-1');
    if (ad1) {
        ad1.addEventListener('mouseenter', function() {
            isHovered1 = true;
            pauseAutoSlide('slideshow1');
        });
        ad1.addEventListener('mouseleave', function() {
            isHovered1 = false;
            startAutoSlide('slideshow1');
        });
    }

    // Add hover listeners to second ad
    const ad2 = document.querySelector('.slideshow-container-2');
    if (ad2) {
        ad2.addEventListener('mouseenter', function() {
            isHovered2 = true;
            pauseAutoSlide('slideshow2');
        });
        ad2.addEventListener('mouseleave', function() {
            isHovered2 = false;
            startAutoSlide('slideshow2');
        });
    }
});

// Show specific slide
function currentSlide(n, slideshow) {
    if (slideshow === 'slideshow1') {
        slideIndex1 = n;
    } else if (slideshow === 'slideshow2') {
        slideIndex2 = n;
    }
    showSlide(slideIndex1, slideshow);
}

// Display the slide
function showSlide(n, slideshow) {
    let slides, dots, slideIndex;
    
    if (slideshow === 'slideshow1') {
        slides = document.querySelectorAll('.slideshow-container-1 .slide');
        dots = document.querySelectorAll('.slideshow-container-1 .dot');
        if (n > slides.length) { slideIndex1 = 1; }
        if (n < 1) { slideIndex1 = slides.length; }
        slideIndex = slideIndex1;
    } else if (slideshow === 'slideshow2') {
        slides = document.querySelectorAll('.slideshow-container-2 .slide');
        dots = document.querySelectorAll('.slideshow-container-2 .dot');
        if (n > slides.length) { slideIndex2 = 1; }
        if (n < 1) { slideIndex2 = slides.length; }
        slideIndex = slideIndex2;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });

    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show current slide and mark dot as active
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
        slides[slideIndex - 1].style.display = 'block';
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto-rotate slides
function startAutoSlide(slideshow) {
    // Clear existing interval
    if (slideshow === 'slideshow1' && autoSlideInterval1) {
        clearInterval(autoSlideInterval1);
    } else if (slideshow === 'slideshow2' && autoSlideInterval2) {
        clearInterval(autoSlideInterval2);
    }

    // Set new interval (change slide every 3 seconds)
    const interval = setInterval(function() {
        if (slideshow === 'slideshow1') {
            slideIndex1++;
            showSlide(slideIndex1, slideshow);
        } else if (slideshow === 'slideshow2') {
            slideIndex2++;
            showSlide(slideIndex2, slideshow);
        }
    }, 3000);

    // Store the interval ID
    if (slideshow === 'slideshow1') {
        autoSlideInterval1 = interval;
    } else if (slideshow === 'slideshow2') {
        autoSlideInterval2 = interval;
    }
}

// Pause auto-rotation
function pauseAutoSlide(slideshow) {
    if (slideshow === 'slideshow1' && autoSlideInterval1) {
        clearInterval(autoSlideInterval1);
        autoSlideInterval1 = null;
    } else if (slideshow === 'slideshow2' && autoSlideInterval2) {
        clearInterval(autoSlideInterval2);
        autoSlideInterval2 = null;
    }
}
