const slides=document.getElementsByClassName("slides");
const dots=document.getElementsByClassName("dot");
function setActive(i){
    for(slide of slides){
        slide.classList.remove("active")
        slides[i].classList.add("active")
    }

    for(dot of dots){
        dot.classList.remove("active")
        dots[i].classList.add("active")
    }
}
for(let l=0;l<dots.length;l++){
dots[l].addEventListener("click",function(){
    setActive(l);
})
}
// console.log(slides);
// console.log(dot);