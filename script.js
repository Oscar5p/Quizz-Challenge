const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
console.log(startButton);
console.log(document.getElementsByClassName("btn"));
startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.innerText = "test";
  // startButton.classList.add('hide')
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}
