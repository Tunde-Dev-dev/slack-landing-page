//ENABLE CIRCULAR NAV
let circularNav =document.querySelector('.container-nav-scroll');

let lastScrollY = window.scrollY;
console.log(lastScrollY);
console.log(window.scrollY);

window.addEventListener('scroll', ()=>{
    if (lastScrollY < window.scrollY) {
        circularNav.style.display = "block"
    }else if(window.scrollY === 0){
        console.log('up');
        circularNav.style.display = "none"
    }
    lastScrollY = window.scrollY;
    console.log(lastScrollY);
})