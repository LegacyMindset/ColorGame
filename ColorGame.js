//Init variables
var numSquares = 6;
var colors = [];
var pickedColor;

//DOM selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    resetGame();
}



resetButton.addEventListener("click", function () {
    resetGame();
})

//Functions
function setUpModeButtons() {
        for(var i = 0; i < modeButtons.length; i++){
            modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame();
        })
    }
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}

function resetGame() {
    colors = generateRandomColors(numSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        //Set square background colors
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;

}

function randomColor() {
    var rndIndex = Math.floor(Math.random() * colors.length)
    return colors[rndIndex];
}

function generateRandomColors(numIndex) {
    var arr = [];

    for(var i = 0; i < numIndex; i++)
    {
        arr.push(setRandomColor());
    }
    return arr;
}

function setRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
}