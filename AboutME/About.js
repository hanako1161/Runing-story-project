const headerE1 =document.querySelector("header");
window.addEventListener('scroll', function(){
    const browerScrollY = window.pageYOffset;
    if(browerScrollY > 0){
        headerE1.classList.add("active");
    }else{
        headerE1.classList.remove("active");
    }
});
const animationMovw = function(selector){

    const targetE1 = document.querySelector(selector);

    const browerScrollY = window.pageYOffset;

    const targetScorllY = targetE1.getBoundingClientRect(). top + browserScrollY;

    window.scrollTo({ top: targetScorllY, behavior: 'smooth'});
};

// const headerE1 = document.querySelector("header");
// window.addEventListener('scroll', function(){
//     requestAnimationFrame(scrollyCheck);
// });
// function scrollyCheck(){
//     let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
//     if(browerScrollY > 0){
//         headerE1.classList.add("active")
//     }else{
//         headerE1.classList.remove("active");
//     }
// }

// const headerE1 = document.querySelector("header");
// window.addEventListener('scroll', function(){
//     this.requestAnimationFrame(scrollyCheck);
// });
// function scrollyCheck(){
//     let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
//     if(browerScrollY > 0){
//         headerE1.classList.add("active")
//     }else{
//         headerE1.classList.remove("active")
//     }
// }
