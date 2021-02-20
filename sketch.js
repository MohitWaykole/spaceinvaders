var ship, dg, shipImg;
var gameState = "start";

function preload(){
    shipImg = loadImage("images/sprite_0.png");
    Img = loadImage("images/download.jpg");
    Img2 = loadImage("images/images.jpg");
    Img3 = loadImage("images/Capture1.png");
    Img4 = loadImage("images/save.PNG");
    Img5 = loadImage("images/button.PNG");
    Img6 = loadImage("images/button2.PNG");
    btn = loadImage("images/game button1.png");
    btn2 = loadImage("images/game button2.png");
    Img7 = loadImage("images/sprite_50.png");
    Img8 = loadImage("images/sprite_80.png");
    Img9 = loadImage("images/sprite_110.png");
    Img10 = loadImage("images/sprite_150.png");
    Img11 = loadImage("images/sprite_100.png");
}

function setup(){
    createCanvas(400, 600);

    ship = createSprite(200, 550, 10, 10);
    ship.addImage(shipImg);
    ship.scale = 0.2;

    won = createSprite(200, 250, 10, 10);
    won.addImage(Img3);
    won.visible = false;

    won2 = createSprite(200, 330, 10, 10);
    won2.addImage(Img4);
    won2.visible = false;

    won3 = createSprite(160, 380, 50, 50);
    won3.addImage(Img5);
    won3.visible = false;

    won4 = createSprite(240, 380, 50, 50);
    won4.addImage(Img6);
    won4.visible = false;

    upBtn = createSprite(350, 550, 10, 50);
    upBtn.addImage(btn);
    upBtn.visible = false;

    downBtn = createSprite(50, 550, 10, 50);
    downBtn.addImage(btn2);
    downBtn.visible = false;

    dg = new Group();

}

function draw() {
    background(Img2);

    if (gameState == "start"){
        if (Img){
            background(Img);
        }
        createCanvas(400, 600);

        textSize(40);
        text("Press Anywhere", 10, 50);
        text("on the screen to", 10, 90);
        text("start.", 10, 130);

        if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400){
            gameState = "play";
        }
    }

    if (gameState == "play"){
        blocks();
        upBtn.visible = true;
        downBtn.visible = true;

        if (keyDown("up") || mousePressedOver(upBtn)){
            ship.y = ship.y - 5;
        }

        if (keyDown("down") || mousePressedOver(downBtn)){
            ship.y = ship.y + 5;
        }
    
        if (dg.isTouching(ship)){
            ship.y = 550;
        }
        
        if (ship.y == 10){
            gameState = "win";
        }
    }

    
    if (gameState === "win"){
        dg.destroyEach();
        won.visible = true;
        won2.visible = true;
        won3.visible = true;
        won4.visible = true;
        upBtn.visible = false;
        downBtn.visible = false;

        if (mousePressedOver(won3)){
            gameState = "start";
            reset();
        }
    }

    drawSprites();
}

function blocks(){
    if (World.frameCount%6==0){
        var d = createSprite(410, random(10,500), 20, 20);
        d.shapeColor = "white";
        d.velocityX = -5;
        d.lifetime = 100;
        dg.add(d);
    }
}

function reset(){
    ship.x = 200;
    ship.y = 550;
    won.visible = false;
    won2.visible = false;
    won3.visible = false;
    won4.visible = false;
}
