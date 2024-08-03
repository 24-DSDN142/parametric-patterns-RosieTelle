//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let faceSize = 75; //Face size for all 4 charactors
let tieSize = 10; //Radius size of centre of bow
let mouthSize = 1.5; //for the stroke weight of the mouth
let earSize = 25; //For the panda and the koala
let eyeSize = 15; //changes all eyesizes
let strokeMode = false //changes if the ears have outlines, false for showing, true for noStroke


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() { // this is setup
  background(190, 77, 255); // purple
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 

 
  if(strokeMode){
    noStroke()}

let catColour1 = color(255, 244, 140) //Feature colours
let noseColour = color(190, 77, 255); //nose colour

//EARS


//Panda

fill(catColour1) 
ellipse(20,25,earSize,earSize)
ellipse(80,25,earSize,earSize)

//Koala

fill(catColour1) 
ellipse(117,42,earSize,earSize)
ellipse(183,42,earSize,earSize)

//Dog
fill(catColour1)
ellipse(16,139,20,46)
ellipse(84,139,20,46)

//Cat
fill(catColour1) 
triangle(115,160,103,130,130,135)
triangle(185,160,197,130,170,135)
//COME BACK TO MAKE SYMETRIC



//FACES
drawFace(150, 160, faceSize);
 drawFace(50, 40, faceSize);
 drawFace(150, 70, faceSize);
 drawFace(50, 130, faceSize);

function drawFace(x, y, faceSize) {
  stroke(10)
  fill(250,250,250)
  ellipse(x, y, faceSize, faceSize - 10)
}

  //PANDA FEATURES

  //Eyes
 
 fill(catColour1) 
  ellipse(34,36,eyeSize + 5,eyeSize + 15)
  ellipse(66,36,eyeSize + 5,eyeSize + 15)

  fill(0,0,0)
  ellipse(36,38,eyeSize,eyeSize)
  ellipse(64,38,eyeSize,eyeSize)
  
  //Mouth

  noFill()
  strokeWeight(mouthSize)
  arc(50,46,30,30,40,140)
  line(50,53,50,61)
  strokeWeight(1)


  //Nose
  fill(noseColour)
  ellipse(50,51,10,4)
 
 

//KOALA FEATURES

//Eyes

fill(0,0,0)
ellipse(130,65,eyeSize - 7,eyeSize - 7)
ellipse(170,65,eyeSize - 7,eyeSize - 7)

//behind nose/mouth
  fill(catColour1)
  arc(150,90,30,80,156,24)
  arc(150,65,80,70,68,112)
  
  //Mouth
stroke(0)
noFill()
strokeWeight(mouthSize)
arc(150,75,30,30,40,140)
line(150,80,150,90)
strokeWeight(1)

//Nose
fill(0, 0, 0)
ellipse(150,68,10,25)


//DOG FEATURES

//Eyes
fill(catColour1)
ellipse(40,130,18,40)
ellipse(60,130,18,40)
fill(0,0,0)
ellipse(40,130,eyeSize - 5,eyeSize + 10)
ellipse(60,130,eyeSize - 5,eyeSize + 10)

//Mouth
fill(catColour1)
ellipse(50,140,50,25)
noFill()
strokeWeight(mouthSize)
arc(50,134,30,30,40,140)
strokeWeight(1)

//Nose
fill(0,0,0)
ellipse(50,134,20,10)

 //CAT FEATURES

//Eyes
fill(catColour1) 
arc(133,160,25,25,210,330)
arc(133,148,25,25,30,150)
arc(167,160,25,25,210,330)
arc(167,148,25,25,30,150)
fill(0,0,0)
ellipse(133,154,eyeSize - 13,12)
ellipse(167,154,eyeSize - 13,12)

//mouth
noFill()
strokeWeight(mouthSize)
arc(150,163,30,30,40,140)
line(150,169,150,178)
strokeWeight(1)
 //Nose
 fill(noseColour)
 ellipse(150,167,10,4)


 //Accesories
 drawTie(150, 190, tieSize);
 drawTie(50, 70, tieSize);
 drawTie(150, 100, tieSize);
 drawTie(50, 160, tieSize);

function drawTie(x, y, tieSize) {
 stroke(1)
 fill(0,0,0)
 ellipse(x, y, tieSize, tieSize)
}


//Cat Bowtie
triangle(150,190,130,183,130,197)
triangle(150,190,170,197,170,183)
// Panda Bowtie
triangle(50,70,30,63,30,77)
triangle(50,70,70,77,70,63)
//Dog Botie
triangle(50,160,30,153,30,167)
triangle(50,160,70,167,70,153)
//Bear Bowtie
triangle(150,100,130,93,130,107)
triangle(150,100,170,107,170,93)


}
