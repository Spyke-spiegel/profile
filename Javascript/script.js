var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var empty = 16;
var moves = -1;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]);

for (var i = 0; i <= 15; i++) {
  if (im[i] == 0) empty = i + 1;
}

var restart = 0;

//function for detecting if the player has resolve the puzzle
function won() {
  ctx.clearRect(300, 300, 150, 150);
  var img = document.getElementById("puzz16");
  var pat = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(300, 300, 150, 150);
  m = document.getElementById("message");
  m.innerHTML = "You won the game in " + moves.toString() + " moves";
  restart = 1;
  moves = -1;
}

//function that create the canvas and execute the logic of the game
function draw() {
  moves++;
  mov = document.getElementById("moves");
  mov.innerHTML = "MOVES: " + moves.toString();
  m = document.getElementById("message");
  m.innerHTML = "";
  var t;
  t = 0;
  if (restart == 1) {
    im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]);
    for (var i = 0; i <= 15; i++) {
      if (im[i] == 0) empty = i + 1;
    }

    ctx.clearRect(0, 0, 600, 600);
    restart = 0;
  }
  for (var i = 0; i < 16; i++) {
    if (im[i] != ar[i]) t = 1;
  }

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      component(i, j);
    }
  }

  if (t == 0) {
    won();
  }
}

function component(x, y) {
  var text = "puzz";
  z = x + 4 * y;
  z = im[z];
  text = text + z.toString();
  if (z != 0) {
    var img = document.getElementById(text);
    var pat = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pat;
  } else {
    ctx.fillStyle = "white";
  }

  ctx.fillRect(150 * x, 150 * y, 150, 150);
}

function moveup() {
  ctx.clearRect(0, 0, 600, 600);
  if (restart == 1) {
    draw();
    return;
  }
  if (empty == 13 || empty == 14 || empty == 15 || empty == 16) {
    moves--;
    draw();
  } else {
    text = "puzz";
    var curr = empty;
    empty = empty + 4;
    var next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
  console.log("console log empty :" + empty);
}

function movedown() {
  ctx.clearRect(0, 0, 600, 600);
  if (restart == 1) {
    draw();
    return;
  }
  if (empty == 1 || empty == 2 || empty == 3 || empty == 4) {
    moves--;
    draw();
  } else {
    text = "puzz";
    var curr = empty;
    empty = empty - 4;
    var next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }

  console.log(empty);
}

function moveleft() {
  ctx.clearRect(0, 0, 600, 600);

  if (restart == 1) {
    draw();
    return;
  }

  if (empty == 4 || empty == 8 || empty == 12 || empty == 16) {
    moves--;
    draw();
  } else {
    text = "puzz";
    var curr = empty;
    empty = empty + 1;
    var next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
  console.log(empty);
}

function moveright() {
  ctx.clearRect(0, 0, 600, 600);
  if (restart == 1) {
    moves--;
    draw();
    return;
  }
  if (empty == 1 || empty == 5 || empty == 9 || empty == 13) {
    moves--;
    draw();
  } else {
    text = "puzz";
    var curr = empty;
    empty = empty - 1;
    var next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
  console.log(empty);
}

window.addEventListener("keydown", function(e) {
  key = e.keyCode;
  if (key == 37) {
    e.preventDefault();
    moveleft();
  }
  if (key == 38) {
    e.preventDefault();
    moveup();
  }
  if (key == 39) {
    e.preventDefault();
    moveright();
  }
  if (key == 40) {
    e.preventDefault();
    movedown();
  }
  if (key == 83) {
    e.preventDefault();
    start();
  }
});

function start() {
  draw();
}
ctx.font = "30px Arial";
ctx.fillText("Hit S to start the game", 150, 300);
