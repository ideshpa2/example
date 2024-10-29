let candycane;
let song, backgroundSong;


function preload() {
  candycane = loadImage("candyimage1.png");
  //song = loadSound("quack.mp3");
  //backgroundSong = loadSound("candy.mp3");
}

function setup() {
 
}


function draw() {


    createCanvas(400, 400);
    background('pink');
    //backgroundSong.loop();
    strokeWeight(8);
    stroke(255, 0, 0);
    fill('orange');
    textSize(50);


    text("Color Sequence", 25, 75);

    let button1 = createButton('Level One');
    button1.position(130, 150);
    button1.size(150, 40);
    button1.style('background-color', 'red');
    button1.mousePressed(togglePlay);


    let button2 = createButton('Level Two');
    button2.position(130, 200);
    button2.size(150, 40);
    button2.style('background-color', 'orange');
    button2.mousePressed(togglePlay);


    let button4 = createButton('Exit');
    button4.position(130, 350);
    button4.size(150, 40);
    button4.style('background-color', 'purple');
    button4.mousePressed(togglePlay);


    image(candycane, 30, 200, 100, 100);
    image(candycane, 270, 200, 100, 100);

  }


  function togglePlay() {
    if (song.isPlaying()) {
      song.stop();
    } else {
      song.play();
    }
  }
  


