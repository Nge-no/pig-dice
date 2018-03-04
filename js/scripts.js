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
Player.prototype.winner = function() {
  if (this.totalScore >= 100) {
    $(".image").html("<img src='img/200w (1).webp'>")
    alert(this.playerName + " ,you have won!" + " (" + this.totalScore + " points!)")

  }
}
Player.prototype.pic = function() {
  if (this.score === 2) {
    $(".image").html("<img src='img/die_face_2.png'>")
  } else if (this.score === 3) {
    $(".image").html("<img src='img/die_face_3.png'>")
  } else if (this.score === 4) {
    $(".image").html("<img src='img/die_face_4.png'>")
  } else if (this.score === 5) {
    $(".image").html("<img src='img/die_face_5.png'>")
  } else if (this.score === 6) {
    $(".image").html("<img src='img/die_face_6.png'>")
  } else {
    $(".image").html("<img src='img/download ().jpeg'>");
  }
  Player.prototype.newGame = function() {
    this.score = 0;
    this.roundScore = 0;
    this.totalScore = 0;

  }
}
//Front-end
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
  
  $("#hold-player1").click(function() {
    player1.hold();
    $("#total-score-player1").html(player1.totalScore);
    $("#round-score-player1").val("");
    $("#score-player1").val("");
    player1.winner();
  });

  $("#hold-player2").click(function() {
    player2.hold();
    $("#total-score-player2").text(player2.totalScore);
    $("#round-score-player2").val("");
    $("#score-player1").val("");
    player2.winner();
  });
});
