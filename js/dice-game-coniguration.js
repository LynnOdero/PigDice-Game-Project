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

}
