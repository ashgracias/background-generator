var gradientStyle = document.getElementById("direction");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var textPut = document.getElementById("cssText");


direction.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.addEventListener("onload", setGradient);

document.getElementById("randomize").addEventListener("click", setRandomColor);


function setGradient() {
	body.style.background = 
	gradientStyle.value + color1.value + ", " + color2.value + ")";

	textPut.textContent = body.style.background + ";";
}

function getRandomColor() {
  var hue = "#" + convertToHex(Math.floor(Math.random() * 256)) 
  			+ convertToHex(Math.floor(Math.random() * 256)) +
  			convertToHex(Math.floor(Math.random() * 256));
  return hue;
}

function setRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function convertToHex(color) {
	var hexCode = color.toString(16);
	return hexCode.length == 1? "0" + hexCode : hexCode;
}