// --I have a bunch of quiz questions to ask. What is the best way to store all those questions, PLUS the correct answer for each one?
// --For each question in the quiz:
   // --The question itself
   // --The possible answers 
   // --Which answer is correct 


// Have a process where:
  // --When the game starts, a countdown begins
  // ~~A question is selected from the collection
  // All the elements are added to the DOM 
  // The user will click on one of the answers 
  // Detect that click and determine if the user clicked on the right answer 
     // If yes, add some points 
     // If no, subtract 5 or 10 seconds from the time remaining
     // Go the next question

// After all questions OR after time runs out, show the user their score
// High score tracking

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startBtn = document.querySelector('#start');
var timeLeft = 60;
var time = document.querySelector('#time');
var currentQuestion;
var askedQueston = document.querySelector('#question');
var finalScore;

var myQuestions = [
   {
     question: "Who invented JavaScript?",
     answers: {
       a: "Douglas Crockford",
       b: "Sheryl Sandberg",
       c: "Brendan Eich",
       d: "Abraham Lincoln"
     },
     correctAnswer: "Douglas Crockford"
   },
   {
     question: "Which one of these is a JavaScript package manager?",
     answers: {
       a: "Node.js",
       b: "TypeScript",
       c: "npm",
       d: "Windows"
     },
     correctAnswer: "npm"
   },
   {
     question: "Which tool can you use to ensure code quality?",
     answers: {
       a: "Angular",
       b: "jQuery",
       c: "RequireJS",
       d: "ESLint"
     },
     correctAnswer: "ESLint"
   }
];

function startQuiz(){
   startTimer();
   getQuestion();
   displayQuestion();
};

function startTimer(){
   var timerInterval = setInterval(function(){
       timeLeft--;
       time.textContent = timeLeft;


       if(timeLeft <= 0){
           clearInterval(timerInterval);
           timeLeft = 60

       }
   },1000)

   console.log(timeLeft)
};

function getQuestion(){
   currentQuestion = myQuestions[Math.floor(Math.random() * myQuestions.length)]
   console.log(currentQuestion)
}

function displayQuestion(){
   console.log(currentQuestion)
  //  askedQueston.textContent = currentQuestion.question;
  var questionEl = document.createElement("h2")
  questionEl.textContent = currentQuestion.question;
  askedQueston.appendChild(questionEl)

  var answerA = document.createElement('button')
  answerA.textContent = currentQuestion.answers.a
  answerA.addEventListener('click', function(event)
   {
     event.preventDefault()
     console.log(event.target.innerHTML)
     checkAnswer(event.target.innerHTML)

   })
  askedQueston.appendChild(answerA)

  var answerB = document.createElement('button')
  answerB.textContent = currentQuestion.answers.b
  answerB.addEventListener('click', function(event)
   {
     event.preventDefault()
     console.log(event.target.innerHTML)
     checkAnswer(event.target.innerHTML)

   })
  askedQueston.appendChild(answerB)

  var answerC = document.createElement('button')
  answerC.textContent = currentQuestion.answers.c
  answerC.addEventListener('click', function(event)
  {
    event.preventDefault()
    console.log(event.target.innerHTML)
    checkAnswer(event.target.innerHTML)

  })
  askedQueston.appendChild(answerC)

  var answerD = document.createElement('button')
  answerD.textContent = currentQuestion.answers.d
  answerD.addEventListener('click', function(event)
   {
     event.preventDefault()
     console.log(event.target.innerHTML)
     checkAnswer(event.target.innerHTML)

   })
  askedQueston.appendChild(answerD)
}

function checkAnswer(userChoice){
  console.log('clicked')
  console.log(currentQuestion.correctAnswer)
  console.log(userChoice)
  if(userChoice === currentQuestion.correctAnswer){
    timeLeft += 10
    nextQuestion()
  }else{
    console.log('incorrect')
    timeLeft -= 10
  }
  
}

function nextQuestion(){
  getQuestion()
  displayQuestion()
}


//if statement to determine if answer is correct or incorrect, add or subtract time accordingly then display next question


startBtn.addEventListener('click', startQuiz)