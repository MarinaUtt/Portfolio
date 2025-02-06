import {sliderDots, slides } from "../script.js"

export function scrollSlide(i) {
  slides.forEach(element => {
    element.classList.remove('active-slide');
  })
  sliderDots.forEach(element => {
    element.classList.remove('active-dot');
  })
  slides[i].classList.add('active-slide');
  sliderDots[i].classList.add('active-dot');
}