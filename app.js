// Navigation Bar Animation + scroll highlighted Menu
const nav = document.querySelector('.nav');
const logo = document.getElementById('logo');

const valeursAncre = document.querySelectorAll('.scrollHeightLight li ');
const valeurs = document.querySelectorAll('.scrollSection');

window.onscroll = () => {
    if(window.scrollY > 150) {
        nav.style.height = '70px';
        nav.style.backgroundColor = '#4E2E23';
        logo.style.fontSize ='28px';
    } else {
        nav.style.height = '100px';
        nav.style.backgroundColor = '';
        logo.style.fontSize ='35px';
    }
    for(let i=0; i<valeurs.length; i++){
    if (valeurs[i].getBoundingClientRect().top <= 70 && valeurs[i].getBoundingClientRect().top > 70-valeurs[i].getBoundingClientRect().height ) {
        valeursAncre[i].classList.add('liNewClass');
    } else {
      valeursAncre[i].classList.remove('liNewClass');
    }
  }
  
}; 

//Carousel
const carousel = document.querySelector('.carousel');

const cheveronLeft = document.getElementById('cheveronLeft');
const cheveronRight = document.getElementById('cheveronRight');

cheveronRight.addEventListener('click', () => {
    if(carousel.style.transform === 'translateX(-16.66%)') {
        return;
    } else {
    carousel.style.transform = 'translateX(-16.66%)';
    cheveronRight.classList.replace('cheveronRight','cheveronLeft');
    cheveronLeft.classList.replace('cheveronLeft','cheveronRight');
;
    }
});
cheveronLeft.addEventListener('click', () => {
    if(carousel.style.transform === 'translateX(0%)' || carousel.style.transform === '' ) {
        return;
    } else {
    carousel.style.transform = 'translateX(0%)';
    cheveronRight.classList.replace('cheveronLeft','cheveronRight');
    cheveronLeft.classList.replace('cheveronRight','cheveronLeft');
    }
    
});

// Scroll smooth
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });




