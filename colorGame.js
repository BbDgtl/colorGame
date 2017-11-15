// alert("test");

// make a list of colors
var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

//select each square, loop through to change background color
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}