 let menu = document.getElementById("hamburger");
 let header =document.getElementById("main-header");
 let  mainNav =document.getElementById("main-nav")
 const sticky = header.offsetTop;

 window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
      header.style.top = 0;
    } else {
      header.style.top = '5%';
    }
  };

 function toggleMenu(){
     header.classList.toggle("menu-overlay")
     menu.classList.toggle("open")
     mainNav.classList.toggle("hide-menu")
 }

 menu.addEventListener("click",toggleMenu)


