var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) 
  + ',' + (Math.floor(Math.random() * 256)) + ',' 
  + (Math.floor(Math.random() * 256)) + ')';
  console.log(hue);
  return hue;
}

function setRandomColor() {
	color1 = getRandomColor();
	color2 = getRandomColor();
  body.style.background = 
	"linear-gradient(to right, " 
	+ color1
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.addEventListener("onload", setGradient);

button.addEventListener("click", setRandomColor);