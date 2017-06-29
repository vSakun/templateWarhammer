/*Слайдер*/
/*при клике*/
var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("sl_bloc");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1){
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");   
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += "active";
};
/*Автоматическая смена слайдов*/
var slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
	var i;
	var slidesAuto = document.getElementsByClassName("sl_bloc");
	for (i = 0; i < slidesAuto.length; i++) {
		slidesAuto[i].style.display = "none";
	}
	slideIndexAuto++;
	if (slideIndexAuto> slidesAuto.length) {slideIndexAuto = 1}
		slidesAuto[slideIndexAuto-1].style.display = "block";
	var sliderTimer = setTimeout(showSlidesAuto, 3000);
};

/*пауза слайдера*/
/*$('.sl_bloc').hover(function(){
		clearInterval(sliderTimer);
		}, showSlidesAuto;*/
/*Конец слайдера*/
/*Слайдер случайная новость*/
/*Автоматическая смена слайдов для сладейра случайная новость*/
var slideIndexAutoRand = 0;
showSlidesAutoRand();

function showSlidesAutoRand() {
	var i;
	var slidesAutoRand = document.getElementsByClassName("slide_fhri");
	for (i = 0; i < slidesAutoRand.length; i++) {
		slidesAutoRand[i].style.display = "none";
	}
	slideIndexAutoRand++;
	if (slideIndexAutoRand > slidesAutoRand.length) {slideIndexAutoRand = 1}
		slidesAutoRand[slideIndexAutoRand-1].style.display = "block";
	setTimeout(showSlidesAutoRand, 3000);
};
/**/
var slideIndexRand=1;
showSlidesRand(slideIndexRand);
function plusSlidesRand(n) {
	showSlidesRand(slideIndexRand += n);
}
function currentSlideRand(n) {
	showSlidesRand(slideIndexRand = n);
}
function showSlidesRand(n) {
	var i;
	var slidesRand = document.getElementsByClassName("slide_fhri");

	if (n > slidesRand.length) {
		slideIndexRand = 1
	}
	if (n < 1){
		slideIndexRand = slidesRand.length
	}
	for (i = 0; i < slidesRand.length; i++){
		slidesRand[i].style.display = "none";
	}
	
	slidesRand[slideIndexRand - 1].style.display = "block";
};