//open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// displays 1st image in slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex)

// function changes slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// this function changes the slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");  //all elements w class "mySlides" are stored in "slides" array
    var dots = document.getElementsByClassName("dot");        //all elements w class "dot" are stored in "dots" array
    if (n > slides.length) { slideIndex = 1 };  //if n(number passed into function) is > that length of array "slides", slideIndex = 1
    if (n < 1) { slideIndex = slides.length }; //if n is < 1, slideIndex = length of array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //for loop sets the display of each item in "slides" array to none
    }
    for (i = 0; i < dots.length; i++) {  //for loop takes each item in "dots" array and removes "active"/active styling
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  //displays image in slideshow
    dots[slideIndex - 1].className += " active";    //adds active styling to dot associated w image
}

//code will create close the contact form when user clicks off of it
//1st step: add event listener for any clicks on website
document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button")
        && !event.target.closest(".contact")) {
        closeForm()
    }  //if click happens on cancel button/anywhere that isn't the contact form, call closeForm() function
}, false )