const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("productLink").addEventListener("click", function () {
    document.getElementById("loadingGif").style.display = "block";
  });
  window.addEventListener("load", function () {
    document.getElementById("loadingGif").style.display = "none";
  });
});

// carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideInterval = setInterval(function () {
  slideIndex++;
  showSlides(slideIndex);
}, 5000);

var slideshowContainer = document.getElementsByClassName(
  "slideshow-container"
)[0];
slideshowContainer.addEventListener("mouseenter", function () {
  clearInterval(slideInterval);
});

slideshowContainer.addEventListener("mouseleave", function () {
  slideInterval = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
});

//language switcher

document.getElementById('selectedLang').addEventListener('click', function() {
  var languageOptions = document.getElementById('languageOptions');
  if (languageOptions.style.display === 'none') {
      languageOptions.style.display = 'block';
  } else {
      languageOptions.style.display = 'none';
  }
});

document.getElementById('uzbLang').addEventListener('click', function() {
  changeLanguage('uzbflag.png', 'Uzb');
});

document.getElementById('rusLang').addEventListener('click', function() {
  changeLanguage('rusflag.png', 'Rus');
});

document.getElementById('engLang').addEventListener('click', function() {
  changeLanguage('engflag.png', 'Eng');
});

function changeLanguage(flagImage, languageText) {
  document.getElementById('selectedLang').innerHTML = '<img src="./img/' + flagImage + '" alt="">' + languageText;
  document.getElementById('languageOptions').style.display = 'none';
}

//language switcher2

document.getElementById('selectedLang2').addEventListener('click', function() {
  var languageOptions2 = document.getElementById('languageOptions2');
  if (languageOptions2.style.display === 'none') {
      languageOptions2.style.display = 'block';
  } else {
      languageOptions2.style.display = 'none';
  }
});

document.getElementById('uzbLang2').addEventListener('click', function() {
  changeLanguage2('uzbflag.png', 'Uzb');
});

document.getElementById('rusLang2').addEventListener('click', function() {
  changeLanguage2('rusflag.png', 'Rus');
});

document.getElementById('engLang2').addEventListener('click', function() {
  changeLanguage2('engflag.png', 'Eng');
});

function changeLanguage2(flagImage2, languageText2) {
  document.getElementById('selectedLang2').innerHTML = '<img src="./img/' + flagImage2 + '" alt="">' + languageText2;
  document.getElementById('languageOptions2').style.display = 'none';
}