var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



var slideIndex1 = 1;
showSlides1(slideIndex1);


function plusSlide1() {
    showSlides1(slideIndex1 += 1);
}

function minusSlide1() {
    showSlides1(slideIndex1 -= 1);  
}

function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("item1");
    var dots = document.getElementsByClassName("slider-dots_item1");
    if (n > slides.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    slides[slideIndex1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
}

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlide2() {
    showSlides2(slideIndex2 += 1);
}

function minusSlide2() {
    showSlides2(slideIndex2 -= 1);  
}


function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}


function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("item2");
    var dots = document.getElementsByClassName("slider-dots_item2");
    if (n > slides.length) {
      slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
}