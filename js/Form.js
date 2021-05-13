class Form {
  constructor() {
    this.title = createElement('h1')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.rest = createButton('Reset');
  }

  hide() {
    this.greeting.hide();
    this.input.hide();
    this.button.hide();

  }

  display() {

    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-100, 15);



    this.input.position(130, 160);
    this.rest.position(displayWidth-100,50 );
    this.button.position(250, 200);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount += 1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 160)
    });
    this.rest.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0)
      database.ref("/").update({players: null})

    })

  }
}
