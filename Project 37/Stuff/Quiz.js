class Quiz {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }
  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      contestantCount = contestant.getCount();
      ques = new Question();
      ques.display();
    }

  }
  play() {
    ques.hide();
    var note = createElement("h4");
    note.style("color", "blue");
    note.html("RESULT");
    note.position(270, 250);

    Contestant.getPlayerInfo();

    if (allPlayers !== undefined) {
      background("yellow");
      var index = 0;
      var x = 200;
      var y = 275;
      for (var plr in allPlayers) {
        index = index + 1;
        y = y + 20;
        var correctAns = "2";
        if (correctAns === allPlayers[plr].answer) {
          fill("green")

        }
        else {
          fill("red");

        }

        textAlign(CENTER);
        textSize(20);
        text(allPlayers[plr].name + ": " + allPlayers[plr].answer, x, y);
      }





    }


  }

}