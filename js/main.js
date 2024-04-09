let ourskills = document.getElementById("ourskills");
let spans = document.querySelectorAll(".progress span");

// console.log(ourskills.offsetTop + ourskills.offsetHeight);
window.addEventListener("scroll" , () =>{
// console.log(ourskills.offsetTop + ourskills.offsetHeight);
let topHiehgt = parseInt(ourskills.offsetTop) + parseInt(ourskills.offsetHeight);
console.log(ourskills.offsetTop <= window.scrollY && window.scrollY  <= topHiehgt);
    
    if(ourskills.offsetTop <= window.scrollY  + ourskills.offsetHeight/3 && window.scrollY  <= topHiehgt){
        spans.forEach(element => {
            element.style.width = element.dataset.width;
        });
    }else{
        spans.forEach(element => {
            element.style.width = "0%";
        });
    }
});

let scroller = document.querySelector('.scroller');
let  height = document.documentElement.scrollHeight - document.documentElement.clientHeight
// clientHieght = visible content & padding
window.addEventListener('scroll' , () => {
    let scrollerWidth = window.scrollY * 100/height;
    // console.log(scrollerWidth + ' %');
    scroller.style.width = scrollerWidth + "%";
});
// window.onscroll = function(){
//     let scrollerWidth = window.scrollY * 100/height;
//     // console.log(scrollerWidth + ' %');
//     scroller.style.width = scrollerWidth + "%";
//     // console.log('scroll top : ' + document.documentElement.scrollTop + 'scollY : ' + window.scrollY);

// }