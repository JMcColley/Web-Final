
var canvas;
var context;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;
var address = false;
var email = false;
var phone = false;

var itemName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var itemValue = [10, 5, 3.6, 7, 14];

function init() {
	if (document.getElementById("canvas")) {
		sections = 5;
		Val_Max = 14;
		var stepSize = 1;
		var columnSize = 50;
		var rowSize = 60;
		var margin = 10;
		var header = "Site Traffic of People in Thousands"


		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");
		context.fillStyle = "#000;"

		yScale = (canvas.height - columnSize - margin) / (Val_Max);
		xScale = (canvas.width - rowSize) / (sections + 1);

		context.strokeStyle = "#000;";
		context.beginPath();

		context.font = "19 pt Arial;"
		context.fillText(header, 0, columnSize - margin);

		context.font = "16 pt Helvetica"
		var count = 0;
		for (scale = Val_Max; scale >= 0; scale = scale - stepSize) {
			y = columnSize + (yScale * count * stepSize);
			context.fillText(scale, margin, y + margin);
			context.moveTo(rowSize, y)
			context.lineTo(canvas.width, y)
			count++;
		}
		context.stroke();

		context.font = "20 pt Verdana";
		context.textBaseline = "bottom";
		for (i = 0; i < 5; i++) {
			computeHeight(itemValue[i]);
			context.fillText(itemName[i], xScale * (i + 1), y - margin);
		}

		context.fillStyle = "#9933FF;";
		context.shadowColor = 'rgba(128,128,128, 0.5)';

		context.shadowOffsetX = 9;
		context.shadowOffsetY = 3;

		context.translate(0, canvas.height - margin);
		context.scale(xScale, -1 * yScale);

		for (i = 0; i < 5; i++) {
			context.fillRect(i + 1, 0, 0.3, itemValue[i]);
		}
	}
}

function computeHeight(value) {
	y = canvas.height - value * yScale;
}
init();

var image = document.getElementById("image");

var imageArray = ["images/defaultWatch.jpg", "images/watch1.jpg", "images/watch2.jpg", "images/watch3.jpg"];

var imageIndex = 0;

function changeImage() {
	image.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

window.onload = function () {

	setInterval(changeImage, 2000);

}
function clickAddress() {
	if (address) {
		address = false;
		document.getElementById("add").style.fontSize = "16px";
	}else{
		address = true;
		document.getElementById("add").style.fontSize = "30px";
	}
}
function clickEmail() {
	if (email) {
		email = false;
		document.getElementById("ema").style.fontSize = "16px";
	}else{
		email = true;
		document.getElementById("ema").style.fontSize = "30px";
	}
}
function clickPhone() {
	if (phone) {
		phone = false;
		document.getElementById("phn").style.fontSize = "16px";
	}else{
		phone = true;
		document.getElementById("phn").style.fontSize = "30px";
	}
}
