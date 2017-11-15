// make a list of colors
var colors = generateRandomColors(6);

//select each square, loop through to change background color
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
    // ********** <REFACTORED> Event Listener for changing game dificulty ********** \\
  for (var i = 0; i < modeButtons.length; i++){
    // add hover & click effects for difficulty buttons
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //  ********** Ternary Operator ********** \\
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
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
}

function reset(){
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change the colors of the squares
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// ********** Reset Button Functionality ********** \\
resetButton.addEventListener("click", function(){
 reset();
})

// ********** Change all squares to match given color ********** \\
function changeColors(color){
  // loop through all squares, change each color to match given color
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

// ********** pick a random color for pickedColor var ********** \\
function pickColor(){
  // pick a random number for the colors array and store in a var
  var random = Math.floor(Math.random() * colors.length);
  // use var to access array element
  return colors[random];
}

// ********** Generate random colors function ********** \\
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

