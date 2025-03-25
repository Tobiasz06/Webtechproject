//collapsible text documents.html
var coll = document.getElementsByClassName("collapsible");
var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  //end collapsible text

//interface.html button search interface functionality
  const searchQuery = new URLSearchParams(window.location.search).get('search');
  //end button search interface functionality

//sliding image and clickable buttons index.html
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
//end sliding image

