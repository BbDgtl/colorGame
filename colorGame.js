// make a list of colors
var colors = generateRandomColors(6);

//select each square, loop through to change background color
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  // generate all new colors
  colors = generateRandomColors(6);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change the colors of the squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.backgroundColor = "#232323";
})

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
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
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

// Generate random colors function
function generateRandomColors(num){
  // make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  //synthesize variables into string "rgb(0, 0, 0)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

