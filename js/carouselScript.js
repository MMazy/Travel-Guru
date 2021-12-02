const topContainer = document.getElementById('topContainer');
const pageTitle = document.getElementById('pageTitle');
const slides = document.querySelectorAll('.slide');
const leftBtn= document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let activeSlide = 0 ;

rightBtn.addEventListener('click', ()=>{
    activeSlide++;

    if(activeSlide > slides.length-1){
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
 })

leftBtn.addEventListener('click', ()=>{
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length-1;
    }

    setBgToBody();
    setActiveSlide();
})



setBgToBody();

function setBgToBody(){
    topContainer.style.backgroundImage = slides[activeSlide].style.backgroundImage;
    pageTitle.textContent= slides[activeSlide].title;

}

function setActiveSlide(){
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}