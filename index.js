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
