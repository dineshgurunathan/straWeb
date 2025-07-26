var sideNav=document.getElementById("side-navbar-activate")
var sidenav = document.querySelector(".side-navbar")
var sideClose = document.getElementById("side-navbar-close")
sideNav.addEventListener("click",function(){
    sidenav.style.marginLeft="0px"
})

sideClose.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"
})