const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const startButton = document.querySelector(".start-btn");
const question = document.querySelector("#question");
const option1 = document.querySelector(".optional");
const option2 = document.querySelector(".optiona2");
const option3 = document.querySelector(".optiona3");
const option4 = document.querySelector(".optiona4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".options");

startButton.addEventListener("click", () => {
  console.log("button clicked");
  document.getElementById("startQuiz").style.display = "none";
  document.getElementById("questions").style.display = "block";
});

let questionCount = 0;

const loadQuestion = () => {
  const qT = questions[questionCount].questionText;
  console.log(qT);
  question.innerText += qT;
  option1.value = questions[0].options[0];
  option2.value = questions[0].options[1];
  option3.value = questions[0].options[2];
  option4.value = questions[0].options[3];
};

loadQuestion();

// const getCheckAnswer = () => {
//   let answer;
//   answers.forEach((currentElement) => {
//     if (currentElement.click) {
//       answer = currentElement.value;
//       console.log(currentElement);
//     }
//   });
//   return answer;
// };

const getCheckAnswer = () => {
  let answer;

  for (let item of answers) {
    answer = item.value;
  }
  return answer;
};
console.log(getCheckAnswer());
submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  console.log(checkAnswer);
});
