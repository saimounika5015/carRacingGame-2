class Game {
  constructor() {
    

  }

  getState() {
   database.ref("gameState").on("value",function(data){
     gameState= data.val()
   })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
      car1 = createSprite(120, 100, 50, 70);
      car2 = createSprite(120, 100, 50, 70);
      car3 = createSprite(120, 100, 50, 70);
      car4 = createSprite(120, 100, 50, 70);
      cars = [car1, car2, car3, car4]
      car1.addImage(car1Img);
      car2.addImage(car2Img)
      car3.addImage(car3Img)
      car4.addImage(car4Img)
    }

  }
  play() {
    form.hide();
    background("brown");


    //text ("Game Start", 120,100);
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    //console.log(allPlayers);
    if (allPlayers !== undefined) {
     image(bg, 0,-displayHeight*4,displayWidth, displayHeight*5);
      var index = 0;
      var x = 180;
      var y ;
      for (var plr in allPlayers) {
        //allplayers={p1,p2,p3,p4}
        //plr=p1=
        index = index + 1;
        //cars[0]=>car1
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance-70 ;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if(index=== player.index){
          fill("red");
          text(allPlayers[plr].name,x-20,y+90);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          rectMode(CENTER)
          ellipse(x,y,70,70)
        }
        else
        { 
          fill("white");
          text(allPlayers[plr].name,x-20,y+90);
        }
      }

    }
    if (keyIsDown(UP_ARROW) && player.index !== null && player.reached===false) {
      player.distance += 50;
      player.update();

    }
    if(player.distance>3862&&player.reached===false){
        player.rank+=1;
        player.reached=true;
        Player.updateCarsAtEnd(player.rank)
        player.update()
        if(player.rank==4){
          game.update(2)
        }
       
    }
    drawSprites();
  }
  end(){
    
    background("white");
    form.hide();
    Player.getPlayerInfo();//{p1,p2,p3,p4}
    textSize(40);
    fill("black")
    text("Rank Card",displayWidth/2-90,150);
    image(rank1Img,displayWidth/2-150,180,300,400);
    image(rank2Img,displayWidth/6-150,250,280,400);
    image(rank3Img,displayWidth-350,280,220,400);
    for( var plr in allPlayers){
       if(allPlayers[plr].rank===1){
         text(allPlayers[plr].name,displayWidth/2-70,640)
       }
       if(allPlayers[plr].rank===2){
        text(allPlayers[plr].name,displayWidth/6-70,700)
      }
      if(allPlayers[plr].rank===3){
        text(allPlayers[plr].name,displayWidth-300,700)
      }
    }
  }
}
