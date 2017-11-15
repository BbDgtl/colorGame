// alert("test");

// make a list of colors
var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"]

//select each square, loop through to change background color
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

// change the "rgb" in the h1 to the rgb code of the color to guess
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){

    // grab color of picked square
    var clickedColor = this.style.backgroundColor;

    // compare color to pickedColor
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  // loop through all squares, change each color to match given color
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

// pick a random color for pickedColor var
function pickColor(){

  // pick a random number for the colors array and store in a var
  var random = Math.floor(Math.random() * colors.length);

  // use var to access array element
  return colors[random];
}

