const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let score = 0;

console.log(startButton);
console.log(document.getElementsByClassName("btn"));
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
let shuffledQuestions, currentQuestionIndex;

function startGame() {
  debugger;
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  questionContainerElement.classList.remove("hide");
  const previousScore = document.querySelector(".score");
  if (previousScore) {
    previousScore.remove();
  }
  setNextQuestion();
}

function setNextQuestion() {
  debugger;
  resetState();
  clearInterval(downloadTimer);
  timeleft = 10;
  downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      goToNextQuestion();
      timeleft = 10;
    } else {
      document.getElementById("progressBar").value = 10 - timeleft;
      timeleft -= 1;
    }
  }, 1000);
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  debugger;
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer, { once: true });
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  clearInterval(downloadTimer);
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    score++;
  }
  //* setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    debugger;
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    showScore();
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    debugger;
    element.classList.add("correct");
    console.log(score);
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function showScore() {
  questionContainerElement.classList.add("hide");
  const scoreElement = document.createElement("div");
  scoreElement.classList.add("score");
  scoreElement.innerText = `Yippie! You scored ${score} out of ${questions.length} points!`;
  document.body.appendChild(scoreElement);
}

const questions = [
  {
    question: "Is Jack Sparrow a pirate?",
    answers: [
      { text: "No", correct: false },
      { text: "Yes", correct: true },
    ],
  },
  {
    question: "Which coding program is known to be the most difficult?",
    answers: [
      { text: "HTML", correct: false },
      { text: "Python", correct: false },
      { text: "Javascript", correct: true },
    ],
  },
  {
    question: "In which program did i code this quizz?",
    answers: [
      { text: "Code Anywhere", correct: false },
      { text: "Replit", correct: false },
      { text: "Gitpod", correct: true },
    ],
  },
  {
    question: "What's my favorite food?",
    answers: [
      { text: "Hamburger", correct: true },
      { text: "Pizza", correct: false },
      { text: "Kebab", correct: false },
      { text: "Pad Thai", correct: false },
    ],
  },
];

let timeleft = 10;
let downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    goToNextQuestion();
    timeleft = 10;
  } else {
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
  }
}, 1000);

function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    setNextQuestion();
  } else {
  }
}

// I would like to give Credit and aknowledge NOT all code BUT some code to this guy! check below for the link =)
// I'm also putting this in every page of my code so you can see it =)

// https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified

// The link below is my structure to the countdown bar and i want to give my credit and show my thanks =) however, the looping is not in the video.

// https://www.youtube.com/watch?v=jpVZ17FfOFU&ab_channel=MizDeveloper%27s
