// Start
let startButton = document.querySelector(`.start button`);
let startButtonHandler = function(event) {
  let startTarget = event.target;

  if (startTarget.matches(`.start button`)) {
    console.log(`Start the quiz!`);

    // Questions
    const questions = [
      [`Commonly used data types do not include:`, [`strings`, `booleans`, `alerts`, `numbers`]], 
      [`The condition in an if/else statement is enclosed with __________.`, [`quotes`, `curly brackets`, `parenthesis`, `square brackets`]], 
      [`Arrays in JavaScript can be used to store __________.`, [`numbers and strings`, `other arrays`, `booleans`, `all of the above`]], 
      [`String values must be enclosed within __________ when being assigned to variables.`, [`commas`, `curly brackets`, `quotes`, `parenthesis`]], 
      [`A very useful tool used during development and debugging for printing content to the debugger is:`, [`JavaScript`, `terminal/bash`, `for loops`, `console.log`]]
    ];

    for (i = 0; i < questions.length; i++) {
      console.log(questions[i][0]);

      for (j = 0; j < questions[i][1].length; j++) {
        console.log(questions[i][1][j]);
      }
    }
  }
}

startButton.addEventListener("click", startButtonHandler);

