$(document).ready(function () {
function DiceGameConfig() {
	var MaximumScore = 6;
	var WinningScore = 100;
  var LosingScore = 1;

	this.GeneratePlayerScore = function() {
		var score = Math.floor(Math.random() * Math.floor(MaximumScore));
    if (score < 1) {
       score = 1
    }
    return score;
  }
  
  this.declareWinningPlayer = function(player_one,player_two){
      var player_oneScore = player_one.getScore();
      var player_twoScore = player_two.getScore();

      if(player_oneScore >= WinningScore){
        player_one.isWinningPlayer(true);      
        return player_one;
      }
      else if(player_twoScore >= WinningScore)
      {
        player_two.isWinningPlayer(true);
        return player_two;
      }
      else
      {
        return null;
      }
  }
}
});