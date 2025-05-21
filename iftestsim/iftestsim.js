//Questões e suas respostas no seguinte formato: [Texto da questão, Opção A, Opção B, Opção C, Opção D, Opção correta] 

let QuestionsAndAnswers = [
    ["Quem descobriu o Brasil?", "Pedro Álvares Cabral", "D. Pedro I", "José Bonifácio", "Silvio Santos", "a"], 
    ["Quanto é 2 + 2?", "3", "4", "22", "5", "b"]
];

//Inserir as questões na página

const TestArea = document.querySelector(".testarea")

const OptionLetter = ["A", "B", "C", "D", "ypsilow"]

const QuestionText = document.createElement("p")
QuestionText.innerHTML = "2. " + QuestionsAndAnswers[1][0]

const QuestionForm = document.createElement("form")

for (let i = 0; i < 4; i++) {
    const OptionInput = document.createElement("input")
    OptionInput.type = "radio"
    OptionInput.setAttribute("id", "Option" + OptionLetter[i]);

    const OptionALabel = document.createElement("label")
    OptionALabel.for = "Option" + OptionLetter[i];
    OptionALabel.innerHTML = "2. " + QuestionsAndAnswers[1][i + 1]

    QuestionForm.appendChild(OptionInput)
}
    
TestArea.appendChild(QuestionText)
TestArea.appendChild(QuestionForm)

const FirstQuestionText = document.querySelector(".FirstQuestionText");
FirstQuestionText.innerHTML = "1. " + QuestionsAndAnswers[0][0]

//Confirmar a resposta

const FirstQuestion = document.querySelector(".FirstQuestion");

FirstQuestion.addEventListener("submit", (event) => {
    const FirstQuestionData = new FormData(FirstQuestion);
    let output = ""
    for (const entry of FirstQuestionData) {
        output = `${entry[1]}`;
    }
    console.log(output);
    event.preventDefault();
    },
  false,
);