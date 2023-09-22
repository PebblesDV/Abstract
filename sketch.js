function setup() {
  createCanvas(800, 600);
  noLoop(); //makes sure loops wont continue the entire time so your pc won't blow up, which did happen to me:))
}

function draw() {
  let backgroundColors = ["purple", "pink", "aqua", "lime"]; //list of colors for background
  background(random(backgroundColors)); //randomizes background color to one of the colors in the list above

  //forloop for the amount of maximum shapes
  for (let i = 0; i < 5; i++) {
    //makes x and y coördinates a random number with a max. of the canvas width and height
    let x = random(width);
    let y = random(height);
    let x1 = random(width);
    let x2 = random(width);
    let x3 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    let y3 = random(height);
    let size = random(10, 300); //makes shape sizes a random number between 10 and 300
    //makes RGB(red, green, blue) numbers random so shapes will be different colors
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let lineColor = ["blue", "yellow", "orange", "red"]; //list of colors for the stroke of the shapes
    let lineSize = random(1, 4); //randomizes strokeWeight to a number between 1 and 4

    //randomizes stroke color and stroke width
    stroke(random(lineColor));
    strokeWeight(lineSize);
    //makes RGB(red, green, blue) numbers random so shapes will be different colors
    fill(r, g, b);
    //chooses random amount of every shape that will be shown on the screen with a maximum of 5
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      rect(x, y, size, size); //randomizes x and y coördinates, and width and height of the rectangles
    }
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      ellipse(x, y, size, size); //randomizes x and y coördinates, and width and height of the rectangles
    }
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      triangle(x1, y1, x2, y2, x3, y3); //randomizes x and y coördinates for the triangles
    }
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      line(x1, y1, x2, y2); //randomizes x and y coördinates for the lines
    }
  }

  //text at the top of the screen
  fill("black");
  strokeWeight(2);
  stroke("white");
  textSize(30);
  text('Click "backspace" to generate random art!!', 120, 70);
}

//function that makes entire page reload every time you click "backspace" button so everything will randomize
function keyPressed() {
  if (keyCode === BACKSPACE) {
    location.reload();
  }
}
