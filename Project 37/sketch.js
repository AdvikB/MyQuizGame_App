var canvas, gameState = 0,
  contestantCount, database, quiz,
  ques, contestant, allPlayers;

function setup() {
  database = firebase.database();
  canvas = createCanvas(850, 400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw() {
  background("pink");
  if (contestantCount === 2) {
    quiz.update(1);
  }
  if (gameState === 1) {
    quiz.play();
  }

}
