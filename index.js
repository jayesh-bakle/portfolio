
// Header scrolling.. on scrolling the window
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>2)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// navbar hide in the sm and md devices
// i.e hiding the hamburger favicon after clicking any navlist.

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
// we are selecting this class becoz bootstrap calls the collapse class when clicked on the favicon or the button.

navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'A Coder'],
    typeSpeed: 100,
  });