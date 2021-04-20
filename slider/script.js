const slides = document.querySelectorAll('#slides .slider');
let currentSlide = 0;

const nextSlide = () =>{
  slides[currentSlide].className = 'slider';
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].className = `slider slider-${currentSlide+1} showing`;
}
const slideInterval = setInterval(nextSlide, 10000);