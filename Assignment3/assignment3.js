// Creating the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;
document.getElementById("myCanvas").appendChild(canvas);


// Background image
var backgroundReady = false;
var backgroundImage = new Image();
backgroundImage.onload = function () {
backgroundReady = true;
};
backgroundImage.src = "images/background.png";

// mole image
var moleReady = false;
var moleImage = new Image();
moleImage.onload = function () {
moleReady = true;
};
moleImage.src = "images/mole.png";

// Reset position of the mole 
function resetPosition() {
  const moleWidth = moleImage.width;
  const moleHeight = moleImage.height;

  // Mole apearing randomly 
  mole.x = Math.random() * (canvas.width - moleWidth);
  mole.y = Math.random() * (canvas.height - moleHeight);
};

//score
var score = 0;
//moving time/interval
var movingInterval = 3000;

//Move the mole
function move() {
  resetPosition();
}
setInterval(move, movingInterval);

// Game objects, the mole
var mole = {
	speed: 256 // Speed in pixels per sec
};

//when user clicks the mole
canvas.addEventListener("mousedown", function(event) {
  event.preventDefault();
  //getting the canvas position and size
  const rect = canvas.getBoundingClientRect();
  const canvasX = rect.left;
  const canvasY = rect.top;
  const canvasWidth = rect.width;
  const canvasHeight = rect.height;
  
  //getting the mouse position relative to the canvas
  const positionX = event.clientX - canvasX;
  const positionY = event.clientY - canvasY;
  //getting the height and the width of the image 
  const moleWidth = moleImage.width;
  const moleHeight = moleImage.height;
      
  if ( positionX > mole.x 
    && positionX < canvasX + canvasWidth
    && positionY > canvasY 
    && positionY < canvasY + canvasHeight
    && positionX < mole.x + moleWidth
    && positionY < mole.y + moleHeight) {

    // score increment by 1
    score ++;
    resetPosition();
    // mole moving time/interval will not be less than 400 millisecs
    if (movingInterval > 400) {
      movingInterval -= 100;
      clearInterval(move);
      move = setInterval(resetPosition, movingInterval);
    }
  }
});


// Displaying the time 
const startTime = 0;
var time = startTime * 60;
const timerEl = document.getElementById('time');

setInterval(updatetime, 1000);

function updatetime(){
  const mins = Math.floor(time/60);
  var secs = time%60;

  secs = secs < 10 ? '0' + secs : secs; 
  timerEl.innerHTML = `Time spent: ${mins}m ${secs}s`;
  time++; // Increment by 1 sec
};

//reset speed
function resetSpeed() {
  clearInterval(move);
  movingInterval = 3000;
  move = setInterval(resetPosition, movingInterval);
};
//reset score
function resetScore() {
  score = 0;
};

// Drawing the game
function render() {
	if (backgroundReady) {
		ctx.drawImage(backgroundImage, 0, 0);
	}

	if (moleReady) {
		ctx.drawImage(moleImage, mole.x, mole.y);
	}

	// Display Score
  document.getElementById("score").innerHTML = "Score : " + score;

	// Display Movement speed
	ctx.fillStyle = " brown";
	ctx.font = "14px Quicksand,serif ";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Movement speed: " + movingInterval + "ms", 10, 10);
};

// The main game loop
function main() {
	render();

	// Do this again 
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame 
                     || w.webkitRequestAnimationFrame 
					           || w.msRequestAnimationFrame 
					           || w.mozRequestAnimationFrame;

// The game is ready
main();
