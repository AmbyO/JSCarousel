//To add more images, just type in the number of images you want to add in here
var numberOfImages = 6;


//Dont edit past here if you are not confident;
var ico = 1;
var inr = numberOfImages + 1;
var right = document.getElementById("right");
var left = document.getElementById("left");
var images = document.getElementById("images");




right.onclick = function(){
	
	pChange();
	stopMove();
	
	
	};
left.onclick = function(){
	
	
	nChange();
	stopMove();

	

	
	};
