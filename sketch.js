
var picture;

function setup() 
{
    picture = loadImage("JanMalmsjo.jpg");    
    createCanvas(300, 332);
}

function draw()
{
    background(128);
    image(picture, 0, 0);
}

