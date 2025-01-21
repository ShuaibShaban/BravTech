
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button a i'); // Font Awesome icon

  if (sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';
    menuButton.classList.replace('fa-times', 'fa-bars'); // Switch back to hamburger
  } else {
    sidebar.style.display = 'flex';
    menuButton.classList.replace('fa-bars', 'fa-times'); // Switch to X
  }
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button a i'); // Font Awesome icon

  sidebar.style.display = 'none';
  menuButton.classList.replace('fa-times', 'fa-bars'); // Ensure hamburger is restored
}

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
