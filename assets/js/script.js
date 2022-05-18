 let menu = document.getElementById("hamburger");
 let header =document.getElementById("main-header");
 let  mainNav =document.getElementById("main-nav")

 function toggleMenu(){
     header.classList.toggle("menu-overlay")
     menu.classList.toggle("open")
     mainNav.classList.toggle("hide-menu")
 }

 menu.addEventListener("click",toggleMenu)


