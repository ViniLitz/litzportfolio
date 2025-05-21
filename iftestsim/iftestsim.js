let QuestionsAndAnswers = [
    ["question1", "a"], ["question2", "b"]
]

const FirstQuestionText = document.querySelector(".FirstQuestionText");
FirstQuestionText.innerHTML = "1. " + "oi"

const FirstQuestion = document.querySelector(".FirstQuestion");

FirstQuestion.addEventListener("submit", (event) => {
    const FirstQuestionData = new FormData(FirstQuestion);
    let output = "";
        for (const entry of FirstQuestionData) {
      output = `${entry[1]}`;
    }
    console.log(output);
    event.preventDefault();
  },
  false,
);