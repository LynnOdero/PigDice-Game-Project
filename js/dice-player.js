function DicePlayer(playerNumber, isCurrentPlayer,totalTurns,accumulatedScore,playerHolds,throwScores) {
	this.playerNumber = playerNumber,
	this.isCurrentPlayer = isCurrentPlayer,
  this.totalTurns = totalTurns,
  this.accumulatedScore = accumulatedScore,
  this.playerHolds = playerHolds,
  this.throwScores = [ accumulatedScore ]

  this.rollDice = function() {
    var diceGameConfig = new DiceGameConfig();
     var score = diceGameConfig.GeneratePlayerScore();
     if (score <= 1) {
       this.accumulatedScore = 0 ;
       this.isCurrentPlayer = false;
     }
     else {
       this.accumulatedScore += score;
     }
     this.totalTurns += this.totalTurns;
     this.throwScores.push(score);
	}

  this.getScore = function ()
  {
    return this.accumulatedScore;
  }

  this.holdGame = function()
  {
    this.isCurrentPlayer = false;
  }
	}
}
