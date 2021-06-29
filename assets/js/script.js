let quizScore = {
  current: 0,
  // high score (in localStorage)
  calculate: function() {
    this.current = this.current - (75 - timeLeft);
    alert(`Your score is ${this.current}.`);
    /* if (this.current > this.high) {
      this.high = this.current;
    } */
  }
}
let timeLeft = 75;
let questionIndex = 0;
const quiz = [
  [`Commonly used data types do not include:`, [`strings`, `booleans`, `alerts`, `numbers`], [false, false, true, false]], 
  [`The condition in an if/else statement is enclosed with __________.`, [`quotes`, `curly brackets`, `parenthesis`, `square brackets`], [false, false, true, false]], 
  [`Arrays in JavaScript can be used to store __________.`, [`numbers and strings`, `other arrays`, `booleans`, `all of the above`], [false, false, false, true]], 
  [`String values must be enclosed within __________ when being assigned to variables.`, [`commas`, `curly brackets`, `quotes`, `parenthesis`], [false, false, true, false]], 
  [`A very useful tool used during development and debugging for printing content to the debugger is:`, [`JavaScript`, `terminal/bash`, `for loops`, `console.log`], [false, false, false, true]]
];

let quizStart = function() {
  // Display start quiz screen
  let quizStartSection = document.createElement(`section`);
  quizStartSection.className = `quiz-start`;
  document.body.append(quizStartSection);
  
  let quizStartH1 = document.createElement(`h1`);
  quizStartH1.textContent = `Coding Quiz Challenge`;
  quizStartSection.append(quizStartH1);

  let quizStartP = document.createElement(`p`);
  quizStartP.textContent = `Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;
  quizStartSection.append(quizStartP);

  let quizStartButton = document.createElement(`button`);
  quizStartButton.textContent = `Start Quiz!`;
  quizStartButton.id = `quiz-start`;
  quizStartSection.append(quizStartButton);

  // Listen for user click of start quiz button
  document.querySelector(`#quiz-start`).addEventListener(`click`, function(event) {
    if (event.target.id === `quiz-start`) {

      // Clear start quiz screen
      quizStartSection.innerHTML = ``;
      
      // Start timer
      let timer = setInterval(
        function(){
          timeLeft--;
          console.log(timeLeft);
          if (timeLeft <= 0 || questionIndex === quiz.length) {
            clearInterval(timer, 1000);
            alert(`All done!`)
            quizScore.calculate();
          }   
        },
        1000
      )

      // Begin quiz questions
      quizQuestions();

    }
  });
}

let quizQuestions = function() {
  if (questionIndex < quiz.length) {
    
    let quizH1 = document.createElement(`h1`);  
    quizH1.textContent = quiz[questionIndex][0];
    quizH1.id = `question-index-${questionIndex}`;
    document.body.append(quizH1);

    let quizOl = document.createElement(`ol`);
    quizOl.id = `answer-index-${questionIndex}`;
    document.body.append(quizOl);
    
    for (answerIndex = 0; answerIndex < quiz[questionIndex][1].length; answerIndex++) {
      let quizLi = document.createElement(`li`);
      quizLi.innerHTML = `<button class=answer-${quiz[questionIndex][2][answerIndex].toString()}>${quiz[questionIndex][1][answerIndex]}</button>`;
      quizOl.append(quizLi);      
    }

    document.querySelector(`#answer-index-${questionIndex}`).addEventListener(`click`, function(event) {
      if (event.target.className === `answer-true`) {
        alert(`Correct!`);
        quizScore.current += 20;
        questionIndex++;
        quizH1.innerHTML = ``;
        quizOl.innerHTML = ``;
        quizQuestions();
      }
      if (event.target.className === `answer-false`) {
        alert(`Wrong!`);
        quizScore.current -= 10;
        timeLeft -= 10;
        questionIndex++;
        quizH1.innerHTML = ``;
        quizOl.innerHTML = ``;
        quizQuestions();
      }
    }); 
  }
}

quizStart();