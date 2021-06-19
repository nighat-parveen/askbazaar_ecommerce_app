const sliderContainer = document.querySelector('.banner-slider');
const sliderImages = document.querySelectorAll('.banner-slider img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
// current index on slider
let currentIndex = 1;
// get the width of image
const size = sliderImages[0].clientWidth;


sliderContainer.style.transform = 'translateX('+ (-size*currentIndex) + 'px)';

prev.addEventListener('click', () => {
    sliderContainer.style.transition = 'transform 0.2s ease-in'
    console.log('hello');
    if(currentIndex <= 0) {
        return;
    }
    currentIndex--;
    sliderContainer.style.transform = 'translateX('+ (-size * currentIndex) + 'px)';
});

next.addEventListener('click', () => {
   currentIndex++;
   sliderContainer.style.transform = 'translateX('+ (-size * currentIndex) + 'px)';
});



