document.addEventListener("DOMContentLoaded", function () {
    const sliderList = document.querySelector(".slider-list");
    const slides = document.querySelectorAll(".slider-list li");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicators = document.querySelectorAll(".status span");
    
    let currentIndex = 0;
    let startX = 0;
    let isSwiping = false;

    function getSlideWidth() {
        if (window.innerWidth <= 914) {
            return slides[0].offsetWidth + 20; 
        } else {
            return slides[0].offsetWidth*2 + 40; 
        }
    }

    function updateSliderPosition() {
        const slideWidth = getSlideWidth();
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

    sliderList.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    sliderList.addEventListener("touchmove", (e) => {
        if (isSwiping) {
            const moveX = e.touches[0].clientX;
            const diffX = startX - moveX;
            
            if (diffX > 50) { 
                if (currentIndex < slides.length - 1) {
                    currentIndex++;
                    updateSliderPosition();
                    isSwiping = false; 
                }
            } else if (diffX < -50) { 
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSliderPosition();
                    isSwiping = false; 
                }
            }
        }
    });

    sliderList.addEventListener("touchend", () => {
        isSwiping = false;
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