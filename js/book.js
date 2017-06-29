/*Смена фильтра*/
var slideIndexSort=1;
showSlidesSort(slideIndexSort);

function currentSlideSort(n) {
	showSlidesSort(slideIndexSort = n);
}
function showSlidesSort(n) {
	var i;
	var slidesSort = document.getElementsByClassName("sort_srh");
	var dotsSort = document.getElementsByClassName("dotSort");

	if (n > slidesSort.length) {
		slideIndexSort = 1
	}
	if (n < 1){
		slideIndexSort = slidesSort.length
	}
	for (i = 0; i < slidesSort.length; i++){
		slidesSort[i].style.display = "none";
	}
	for (i = 0; i < dotsSort.length; i++){
		dotsSort[i].className = dotsSort[i].className.replace("active","");   
	}
	slidesSort[slideIndexSort - 1].style.display = "block";
	dotsSort[slideIndexSort - 1].className += " active";
};