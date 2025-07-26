
var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
   
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



// checkbox
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const products = document.querySelectorAll('.product');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const activeFilters = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value.toLowerCase());

      products.forEach(product => {
        const tags = product.querySelector('tags').textContent.toLowerCase();

        // Show only if any of the tags match the active filters
        if (activeFilters.length === 0 || activeFilters.some(tag => tags.includes(tag))) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
});

// inputbox
var search = document.getElementById("search");
var productContainer = document.querySelector(".products");
var productList = productContainer.querySelectorAll(".product");

search.addEventListener("keyup", function(event) {
  var enteredValue = event.target.value.toUpperCase();

  for (let i = 0; i < productList.length; i++) {
    let productName = productList[i].querySelector("h1").textContent.toUpperCase();

    if (productName.indexOf(enteredValue) < 0) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
});
