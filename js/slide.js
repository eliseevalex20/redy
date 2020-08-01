/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);

}

/* устанавливаем текущий слайд ебана */
function currentSlide(n) {
    showSlides(slideIndex = n);
}


/* функция слайдера шоб переключаеть ебана */
function showSlides(n) {

    if (document.documentElement.clientWidth < 500) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
    
        slides[slideIndex].style.display = "block";
    
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
    
        dots[slideIndex - 1].className += " active";
    } 
    if (document.documentElement.clientWidth > 500) {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("slider-dots_item");
    
        slides[slideIndex].style.display = "block";
    
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

}


/* Индекс слайда по умолчанию */
var slideIndex1 = 1;
showSlides1(slideIndex1);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide1() {
    showSlides1(slideIndex1 += 1);

}

/* устанавливаем текущий слайд ебана */
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}


/* функция слайдера шоб переключаеть ебана */
function showSlides1(n) {

    if (document.documentElement.clientWidth < 500) {
        var i;
        var slides = document.getElementsByClassName("item1");
        var dots = document.getElementsByClassName("slider-dots_item1");
    
        slides[slideIndex1].style.display = "block";
    
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
    
        dots[slideIndex1 - 1].className += " active";
    } 
    if (document.documentElement.clientWidth > 500) {
        var i;
        var slides = document.getElementsByClassName("item1");
        var dots = document.getElementsByClassName("slider-dots_item1");
    
        slides[slideIndex1].style.display = "block";
    
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

}

/* Индекс слайда по умолчанию */
var slideIndex2 = 1;
showSlides2(slideIndex2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    showSlides2(slideIndex2 += 1);

}

/* устанавливаем текущий слайд ебана */
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}


/* функция слайдера шоб переключаеть ебана */
function showSlides2(n) {

    if (document.documentElement.clientWidth < 500) {
        var i;
        var slides = document.getElementsByClassName("item2");
        var dots = document.getElementsByClassName("slider-dots_item2");
    
        slides[slideIndex2].style.display = "block";
    
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
    if (document.documentElement.clientWidth > 500) {
        var i;
        var slides = document.getElementsByClassName("item2");
        var dots = document.getElementsByClassName("slider-dots_item2");
    
        slides[slideIndex2].style.display = "block";
    
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

}