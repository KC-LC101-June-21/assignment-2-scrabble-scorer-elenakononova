// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) { 
	  for (const pointValue in oldPointStructure) { 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints +=  Number(pointValue);
      		 } 
           	  }
	}
	return letterPoints;
 }

 let scrabbleScore = function (word){
   word = word.toLowerCase();
let letterPointsNew = 0; 
	for (let i = 0; i < word.length; i++) { 
	  letterPointsNew += Number(newPointStructure[word[i]]);
		  
	}
	return letterPointsNew;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let enteredWord;
function initialPrompt() {
   console.log("Let's play some scrabble!");
   console.log();
   enteredWord = input.question("Enter a word: ");
   return enteredWord
};


 // console.log(oldScrabbleScorer(initialPrompt()));

let simpleScore  = function (word){
  word = word.toUpperCase();
  simpleScoreResult = 0
  for(let i=0; i<word.length; i++){
    simpleScoreResult ++;
     }
     return simpleScoreResult;
};

let vowelBonusScore = function (word){
word = word.toUpperCase();
let letterPointsNew = 0; 
	for (let i = 0; i < word.length; i++) { 
	  for (const pointValue in newPointStructure1) { 
		 if (newPointStructure1[pointValue].includes(word[i])) {
			letterPointsNew += Number(pointValue);
		 } 
	  }
	}
	return letterPointsNew;

};

let objSimpleScore = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoreFunction: simpleScore
  };

let objBonusVowels = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: vowelBonusScore
  };

let objScrabble = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: scrabbleScore
  };
// Array for all 3 objects
 const scoringAlgorithms = [objSimpleScore,objBonusVowels,objScrabble];

let scorer = 0 ;
 function scorerPrompt (num) {
   scorer = input.question((`PLease enter which scoring algorithm would you like to use? \n
0 - Simple: One point per character\n
1 - Vowel Bonus: Vowels are worth 3 points\n
2 - Scrabble: Uses scrabble point system\n
Enter 0, 1, or 2:\n `));
    while (scorer < 0 || scorer > 2 || isNaN(scorer)) {
    scorer = input.question(`Invalid entry.PLease enter which scoring algorithm would you like to use? \n
0 - Simple: One point per character\n
1 - Vowel Bonus: Vowels are worth 3 points\n
2 - Scrabble: Uses scrabble point system\n
Enter 0, 1, or 2:\n`);   
    }
   return scorer
};

 function transform(obj){
  const newPointStructure = {};
  for (const [letterValue, letterArr] of Object.entries(obj)) {
    for (const letter of letterArr) {
      newPointStructure[letter.toLowerCase()] = Number(letterValue);
    }
  }
  // newPointStructure[' '] = 0; did not accepted bonus :( 
  return newPointStructure;
}
 

let newPointStructure1 = {
  1: ['B', 'C', 'D', 'F','J','G', 'H', 'K', 'L', 'M', 'N', 'P','Q','R','S','T','V',
  'W','X','Z'],
  3: ['A', 'E', 'O', 'I', 'U', 'Y'] 
};

newPointStructure = transform(oldPointStructure);

function runProgram() {
     initialPrompt();
      scorerPrompt(); 
console.log(`Score for the '${enteredWord}' is: ${scoringAlgorithms[scorer].scoreFunction(enteredWord)}`);   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

