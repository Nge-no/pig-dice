//Back-end
function Player(name, score, roundScore, totalScore, hold) {
  this.name;
  this.score = 0;
  this.roundScore = 0;
  this.totalScore = 0;
  this.image;
}

function rollDice() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}
Player.prototype.rollOne = function() {
  if (this.score === 1) {
    this.roundScore = 0;
    alert(this.playerName + " has rolled 1!Next players turn!")
  } else {
    this.roundScore += this.score;
  }
}
Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  alert("Next player's turn!")
}

$(document).ready(function() {
      $("#roll-player1").click(function() {
        player1.score = rollDice();
        $("#score-player1").html(player1.score);
        player1.pic();
        $(".image").html(player1.image);
        player1.rollOne();
        $("#round-score-player1").html(player1.roundScore);
      });

      $("#roll-player2").click(function() {
        player2.score = rollDice();
        $("#score-player2").html(player2.score);
        player2.pic();
        $(".image").html(player2.image);
        player2.rollOne();
        $("#round-score-player2").html(player2.roundScore);
      });
