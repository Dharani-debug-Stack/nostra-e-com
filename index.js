let topNotification=document.querySelector(".notify")
let closeNotify=document.querySelector(".close")
closeNotify.addEventListener("click",function(){
    topNotification.style.display="none"
})
let toggle=document.querySelector(".toggle")
let sideNav=document.getElementById("side-Nav")
const closeNavbar=document.querySelector(".closeNav")
toggle.addEventListener("click",function(){
    sideNav.style.right="0"
})
closeNavbar.addEventListener("click",function()
{
    sideNav.style.right="-50%" 
})

 let currentIndex = 0;

  function showSlide(index) {
    const slider = document.getElementById("slides");
    const totalSlides = slider.children.length;

    // Loop around
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }
// search functionality
  let search = document.getElementById("search");
let photoContainer = document.getElementById("container");
let productList = photoContainer.querySelectorAll(".photo");

search.addEventListener("keyup", function(event) {
  let enteredValue = event.target.value.toUpperCase();

  for (let i = 0; i < productList.length; i++) {
    let productName = productList[i].querySelector("h2").textContent;

    if (!productName.toUpperCase().includes(enteredValue)) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
});

let button = document.getElementById("showTops");
let allProducts = document.querySelectorAll(".photo");
button.addEventListener("click", function() {
  allProducts.forEach(product => {
    if (product.classList.contains("tops")) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  })
})
let all=document.getElementById("all")
all.addEventListener("click",function(){
   allProducts.forEach(product => {
    if (product.classList.contains("photo"))
       {
      product.style.display = "block";
    }
   })
  })
  let bottom=document.getElementById("bottom")
bottom.addEventListener("click",function(){
   allProducts.forEach(product => {
    if (product.classList.contains("bottom"))
       {
      product.style.display = "block";
    }
    else{
      product.style.display="none"
    }
   })
  })
  
  let dreses=document.getElementById("dreses")
dreses.addEventListener("click",function(){
   allProducts.forEach(product => {
    if (product.classList.contains("dreses"))
       {
      product.style.display = "block";
    }
    else{
      product.style.display="none"
    }
   })
  })
  let Outerwear=document.getElementById("Outerwear")
Outerwear.addEventListener("click",function(){
   allProducts.forEach(product => {
    if (product.classList.contains("Outerwear"))
       {
      product.style.display = "block";
    }
    else{
      product.style.display="none"
    }
   })
  })
  let Shoes=document.getElementById("Shoes")
Shoes.addEventListener("click",function(){
   allProducts.forEach(product => {
    if (product.classList.contains("Shoes"))
       {
      product.style.display = "block";
    }
    else{
      product.style.display="none"
    }
   })
  })
