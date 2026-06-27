window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.style.background="#ffffff";

}else{

nav.style.background="rgba(255,255,255,.95)";

}

});

document.querySelector(".top-btn").onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// Hero Slider

const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

slides[current].classList.remove("active");

current++;

if(current >= slides.length){

current = 0;

}

slides[current].classList.add("active");

}

setInterval(changeSlide,5000);