const quiz = [
  [`Commonly used data types do not include:`, [`strings`, `booleans`, `alerts`, `numbers`], [false, false, true, false]], 
  [`The condition in an if/else statement is enclosed with __________.`, [`quotes`, `curly brackets`, `parenthesis`, `square brackets`], [false, false, true, false]], 
  [`Arrays in JavaScript can be used to store __________.`, [`numbers and strings`, `other arrays`, `booleans`, `all of the above`], [false, false, false, true]], 
  [`String values must be enclosed within __________ when being assigned to variables.`, [`commas`, `curly brackets`, `quotes`, `parenthesis`], [false, false, true, false]], 
  [`A very useful tool used during development and debugging for printing content to the debugger is:`, [`JavaScript`, `terminal/bash`, `for loops`, `console.log`], [false, false, false, true]]
];
 
for (questionIndex = 0; questionIndex < quiz.length; questionIndex++) {
  console.log(quiz[questionIndex][0]);
  
  
  
  for (answerIndex = 0; answerIndex < quiz[questionIndex][1].length; answerIndex++) {
    console.log(quiz[questionIndex][1][answerIndex]);
  }
}