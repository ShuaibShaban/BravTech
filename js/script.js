let menu = document.querySelector("#menu-btn");
let navbarLinks = document.querySelector(".header .navbar .links");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbarLinks.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbarLinks.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector(".header .navbar").classList.add("active");
  } else {
    document.querySelector(".header .navbar").classList.remove("active");
  }
};

let currentIndex = 0;
const slides = document.querySelectorAll(".slider .slide");
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  const offset = -currentIndex * 100; // Move the slider by 100% for each slide
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const offset = -currentIndex * 100; // Move the slider by 100% for each slide
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);
