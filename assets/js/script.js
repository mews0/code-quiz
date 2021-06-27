// Start
let startQuiz = function() {
  let startButton = document.querySelector(`.start button`);
  let startButtonHandler = function(event) {
    let startTarget = event.target;
    if (startTarget.matches(`.start button`)) {
      takeQuiz();
    }
  }
  startButton.addEventListener("click", startButtonHandler);
}

// Questions
let takeQuiz = function() {
  const question = [
    [`Commonly used data types do not include:`, [`strings`, `booleans`, `alerts`, `numbers`], [false, false, true, false]], 
    [`The condition in an if/else statement is enclosed with __________.`, [`quotes`, `curly brackets`, `parenthesis`, `square brackets`], [false, false, true, false]], 
    [`Arrays in JavaScript can be used to store __________.`, [`numbers and strings`, `other arrays`, `booleans`, `all of the above`], [false, false, false, true]], 
    [`String values must be enclosed within __________ when being assigned to variables.`, [`commas`, `curly brackets`, `quotes`, `parenthesis`], [false, false, true, false]], 
    [`A very useful tool used during development and debugging for printing content to the debugger is:`, [`JavaScript`, `terminal/bash`, `for loops`, `console.log`], [false, false, false, true]]
  ];

  for (i = 0; i < question.length; i++) {

    // h1 - create, assign text, append
    let questionH1 = document.createElement(`h1`);
    questionH1.textContent = question[i][0];
    document.body.append(questionH1);

    // ol - create, append
    let questionOl = document.createElement(`ol`);
    document.body.append(questionOl);

    for (j = 0; j < question[i][1].length; j++) {
      
      // li - create, assign, append (how do I convert these to buttons that look like the mock-up?)
      let questionLi = document.createElement(`li`);
      questionLi.textContent = question[i][1][j];
      questionLi.innerHTML = `<button>` + question[i][1][j] + `</button>`;
      questionOl.append(questionLi);
    }
  }
}

// End

// High score

startQuiz();