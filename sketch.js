var canvas;
var music;
var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    movingSprite = createSprite(random(20,750),100,40,40)
    movingSprite.shapeColour = "white";
    movingSprite.velocityX = 4; 
    movingSprite.velocityY = 9; 
 
    fixSprite1 = createSprite(100,590,180,20);
    fixSprite1.shapeColor = "red";
     
    fixSprite2 = createSprite(300,590,180,20);
    fixSprite2.shapeColor = "green";

    fixSprite3 = createSprite(500,590,180,20);
    fixSprite3.shapeColor = "blue";

    fixSprite4 = createSprite(700,590,180,20)
    fixSprite4.shapeColor = "yellow";
    //create 4 different surfaces
    function draw (){
        background("brown")
        edges = createEdgeSprites()
        movingSprite.bounceOff(edges)
    if(fixSprite1.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite1)){
        movingSprite.shapeColor = "red"
    }}
    if(fixSprite2.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite2)){
    movingSprite.shapeColor = "green"
    }
    if(fixSprite3.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite3)){
     movingSprite.shapeColor = "blue"
    }
    if(fixSprite4.isTouching(movingSprite)&&movingSprite.bounceOff(fixSprite4)){
     movingSprite.shapeColor = "yellow"
     }
    
    



    drawSprites()
    //add condition to check if box touching surface and make it box
    }
