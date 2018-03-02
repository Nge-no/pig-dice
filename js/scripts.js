function getRandomInt() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}

$(document).ready(function() {
  $("#roll-player1").click(function() {
    $("#round-score-player1").html(getRandomInt);
  });
});
$(document).ready(function() {
  $("#roll-player2").click(function() {
    $("#round-score-player2").html(getRandomInt);
  });
});
