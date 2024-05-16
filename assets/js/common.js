// menu_btn
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    const barIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-xmark');

    navLinks.classList.toggle('menu_active');
    barIcon.classList.toggle('close_active');
    closeIcon.classList.toggle('close_active');
}
// 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide_bg');
const indicators = document.querySelectorAll('.indicator');
let autoSlideInterval;
let isAutoSlidePaused = false;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    slider.style.transform = `translateY(-${currentSlide * 100}%)`;
}
function nextSlide() {
    showSlide(currentSlide + 1);
}
function prevSlide() {
    showSlide(currentSlide - 1);
}
document.querySelector('.nextBtn').addEventListener('click', nextSlide);
document.querySelector('.prevBtn').addEventListener('click', prevSlide);
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
updateIndicators();
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); 
}
function pauseAutoSlide() {
    clearInterval(autoSlideInterval);
    isAutoSlidePaused = true;
}
function toggleAutoSlide() {
    if (isAutoSlidePaused) {
        startAutoSlide();
        isAutoSlidePaused = false;
    } else {
        pauseAutoSlide();
        isAutoSlidePaused = true;
    }
}
startAutoSlide();
document.querySelector('.slide_btn_gp button:nth-child(2)').addEventListener('click', toggleAutoSlide);

// conts 1 carousel 2


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 50,
  loop: true, 
  initialSlide: 1, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
   
},
  navigation: {
      nextEl: '.next',
      prevEl: '.prev',
  },
  on: {
      slideChange: function () {
        
          document.querySelectorAll('.swiper-slide').forEach(function (el) {
              el.classList.remove('active_2');
          });
        
          this.slides[this.activeIndex].classList.add('active_2');
      }
  }
});

// conts 1 carousel 3

var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 'auto',
    spaceBetween: 28,
    loop: true, 
    initialSlide: 0, 
    speed:350,
  
    navigation: {
        nextEl: '.next2',
        prevEl: '.prev2',
    },
    on: {
        slideChange: function () {
          
            document.querySelectorAll('.swiper-slide').forEach(function (el2) {
                el2.classList.remove('active_3');
            });
          
            this.slides[this.activeIndex].classList.add('active_3');
        }
    }
  });
//   page5_btn_active 
function toggleActive(button) {
    const currentlyActiveButton = document.querySelector('.active_btn');

    if (currentlyActiveButton && currentlyActiveButton !== button) {
        currentlyActiveButton.classList.remove('active_btn');
        currentlyActiveButton.textContent = '상담완료';
    }

    button.classList.add('active_btn');
    button.textContent = '상담중';
}