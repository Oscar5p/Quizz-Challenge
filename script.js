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
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  debugger;
  resetState();
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
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  //* setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    debugger;
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    debugger;
    element.classList.add("correct");
    score++;
    console.log(score);
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
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

// I would like to give Credit and aknowledge NOT all code BUT some code to this guy! check below for the link =)
// I'm also putting this in every page of my code so you can see it =)

// https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
