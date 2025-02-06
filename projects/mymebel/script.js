let navigationList = document.querySelector('.menu-list');
let burgerButton = document.querySelector('.burger-menu');

burgerButton.addEventListener('click',function() {
  navigationList.classList.toggle('active')
  burgerButton.classList.toggle('open')
  document.body.classList.toggle('disabled-scroll')
})

let menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', function() {
    navigationList.classList.remove('active')
    burgerButton.classList.remove('open')
    document.body.classList.remove('disabled-scroll')
  })
})

const arrowLeftPortfolio = document.querySelector('.arrow-left-portfolio');
const arrowRightPortfolio = document.querySelector('.arrow-right-portfolio');
const SliderImages = document.querySelectorAll('.portfolio-img');
let currentIndex = 0;
let SliderDots = document.querySelectorAll('.dot')

function removeClass() {
  for (let i = 0; i < SliderImages.length; i++) {
    const element = SliderImages[i];
    element.classList.remove('active')
  }
  for (let i = 0; i < SliderDots.length; i++) {
    const element = SliderDots[i];
    element.classList.remove('active-dot')
  }
}

function addClass() {
  SliderImages[currentIndex].classList.add('active')
  SliderDots[currentIndex].classList.add('active-dot')
}

arrowRightPortfolio.addEventListener('click', function(){
  currentIndex += 1;
  if (currentIndex > SliderImages.length - 1) {
    currentIndex = 0;
  }
  removeClass(); 
  addClass();
})

arrowLeftPortfolio.addEventListener('click', function (){
  currentIndex -= 1;
  if (currentIndex < 0){
    currentIndex = SliderImages.length-1
  }
  removeClass(); 
  addClass();
})

SliderDots.forEach(function(dots,index) {
  dots.addEventListener('click', function () {
  removeClass(); 
  SliderImages[index].classList.add('active')
  SliderDots[index].classList.add('active-dot')
 })
})

const arrowLeftRewiews = document.querySelector('.arrow-left-reviews');
const arrowRightRewiews= document.querySelector('.arrow-right-reviews');
const reviews = document.querySelectorAll('.reviews');
let currentIndexRew=0;

arrowRightRewiews.addEventListener('click', function(){
  currentIndexRew += 1;
  if (currentIndexRew > reviews.length - 1) {
    currentIndexRew = 0;
  }
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i];
    element.classList.remove('active-review')
  }
  reviews[currentIndexRew].classList.add('active-review')
})

arrowLeftRewiews.addEventListener('click', function(){
  currentIndexRew -= 1;
  if (currentIndexRew <0) {
    currentIndexRew =reviews.length - 1;
  }
  for (let i = 0; i < reviews.length; i++) {
    const element = reviews[i];
    element.classList.remove('active-review')
  }
  reviews[currentIndexRew].classList.add('active-review')
})

const fromFeetback = document.forms.feedback;
const nameInput = fromFeetback.nameinput;
const phoneInput = fromFeetback.phoneinput;
const bot_token = '8123497469:AAERdex1uiDQ6jxoWyYIXqQ-RhO3-0Y70sM';
const chat_id = '951383680'
const baseUrl = 'https://api.telegram.org'

function sendMessage(event) {
  event.preventDefault();
  const message = `name: ${nameInput.value} \nphone: ${phoneInput.value}`;
  const payload = {
    chat_id,
    text: message
  }
  fetch(`${baseUrl}/bot${bot_token}/sendMessage`,
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    })
}  

fromFeetback.addEventListener('submit', sendMessage)