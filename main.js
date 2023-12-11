


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('productLink').addEventListener('click', function () {
        document.getElementById('loadingGif').style.display = 'block';
    });
    window.addEventListener('load', function () {
        document.getElementById('loadingGif').style.display = 'none';
    });
});


// carousel

var slideIndex = 1;
showSlides(slideIndex);

// Function to change slides manually by button clicks
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to change slides by dot clicks
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to display slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Reset if index goes out of range
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides and remove active dot class
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and set corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatic slideshow function
var slideInterval = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);

// Pauses automatic slideshow on manual interaction
var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
slideshowContainer.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

slideshowContainer.addEventListener('mouseleave', function() {
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000);
});
