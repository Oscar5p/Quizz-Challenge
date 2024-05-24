const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
console.log(startButton);
console.log(document.getElementsByClassName("btn"));
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.innerText = "Next!";
  // startButton.classList.add('hide')
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}

const questions = [
  {
    question: "What is 2 + 2",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
];
