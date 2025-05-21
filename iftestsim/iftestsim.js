let QuestionsAndAnswers = [
    ["Quem descobriu o Brasil?", "Pedro Álvares Cabral", "D. Pedro I", "José Bonifácio", "Silvio Santos", "a"], 
    ["Quanto é 2 + 2?", "3", "4", "22", "5", "b"]
]

const FirstQuestionText = document.querySelector(".FirstQuestionText");
FirstQuestionText.innerHTML = "1. " + QuestionsAndAnswers[0][0]

//Confirmar a resposta
const FirstQuestion = document.querySelector(".FirstQuestion");

FirstQuestion.addEventListener("submit", (event) => {
    const FirstQuestionData = new FormData(FirstQuestion);
    for (const entry of FirstQuestionData) {
        let output = `${entry[1]}`;
    }
    console.log(output);
    event.preventDefault();
    },
  false,
);