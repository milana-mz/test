document.addEventListener("DOMContentLoaded", function () {
    const sliderList = document.querySelector(".slider-list");
    const slides = document.querySelectorAll(".slider-list li");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicators = document.querySelectorAll(".status span");
    
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth+slides[0].offsetWidth + 50; 

    function updateSliderPosition() {
        sliderList.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.style.backgroundColor = index === currentIndex ? "#0297D4" : "#B3C8D1";
        });
    }

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });
    nextBtn.addEventListener("click", () => {
        if (currentIndex < slides.length - 3) {
            currentIndex++;
            updateSliderPosition();
        }
    });
    updateSliderPosition();
});

document.addEventListener('DOMContentLoaded', function () {
    const tabTitles = document.querySelectorAll('.tab-title');   

    tabTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            tabTitles.forEach(function (t) {
                t.classList.remove('active');
            });

            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            title.classList.add('active');

            const tabId = title.getAttribute('data-tab');
            const tabPane = document.getElementById(tabId);
            tabPane.classList.add('active');
        });
    });
});