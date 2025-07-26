// Offer bar close
var offerbar = document.querySelector(".offer-bar")
var closebar = document.getElementById("offer-close")

offerbar.addEventListener("click",function(){
    offerbar.style.display="none"
})

// Side Navbar

var sideNav=document.getElementById("side-navbar-activate")
var sidenav = document.querySelector(".side-navbar")
var sideClose = document.getElementById("side-navbar-close")
sideNav.addEventListener("click",function(){
    sidenav.style.marginLeft="0px"
})

sideClose.addEventListener("click",function(){
    sidenav.style.marginLeft="-60%"
})

// slider section

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>90)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
}
)

sliderleftbutton.addEventListener("click",function(){
    if(slidermargin==0)
    {
       
        slidermargin=50
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }    
}
)
 var hearts = document.getElementsByClassName("like-btn");

    for (var count = 0; count < hearts.length; count=count+1) {
        hearts[count].addEventListener("click", function () {
            var currentSrc = this.getAttribute("src");

            if (currentSrc.includes("blackheart.png")) {
                // Change to red heart
                this.setAttribute("src", "./images/redheart.png");
            } else {
                // Change back to black heart
                this.setAttribute("src", "./images/blackheart.png");
            }
        });
    }


    
window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})