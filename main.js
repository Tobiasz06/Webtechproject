let currentIndex = 0;
const images = document.querySelectorAll('.sliding-picture img');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let slideInterval; 

function showImage(index) {
  images.forEach((img) => img.classList.remove('active'));
  images[index].classList.add('active');
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function startAutoSlide() {
  slideInterval = setInterval(showNextImage, 5000); // picture changes every 5 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide(); 
}

nextButton.addEventListener('click', () => {
  showNextImage();
  stopAutoSlide();
});

prevButton.addEventListener('click', () => {
  showPrevImage();
  stopAutoSlide();
});

showImage(currentIndex);
startAutoSlide();