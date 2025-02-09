const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slide');
const sliderDots = document.querySelectorAll('.dot')
let currentSlide = 0;

import { scrollSlide } from "./modules/scrollslide.js";

arrowLeft.addEventListener('click', () =>{
  if (currentSlide == 0) {
    currentSlide = slides.length -1;
  } else {
    currentSlide -= 1;
  }
  scrollSlide(currentSlide,slides, sliderDots);
})

arrowRight.addEventListener('click', () =>{
  if (currentSlide == slides.length -1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  scrollSlide(currentSlide,slides, sliderDots);
})

sliderDots.forEach(function(dot, i) {
  dot.addEventListener('click', ()=>{
    currentSlide = i;
    scrollSlide(currentSlide,slides, sliderDots);
  })
})