//Questões e suas respostas no seguinte formato: [Texto da questão, Opção A, Opção B, Opção C, Opção D, Opção correta] 

let QuestionsAndAnswers = [
    ["Quem descobriu o Brasil?", "Pedro Álvares Cabral", "D. Pedro I", "José Bonifácio", "Silvio Santos", "a"], 
    ["Quanto é 2 + 2?", "3", "4", "22", "5", "b"]
];

//Inserir as questões na página

const TestArea = document.querySelector(".testarea")

const OptionLetter = ["a", "b", "c", "d"]

const QuestionText = document.createElement("p")
QuestionText.innerHTML = "2. " + QuestionsAndAnswers[1][0]
TestArea.appendChild(QuestionText)

const QuestionForm = document.createElement("form")
TestArea.appendChild(QuestionForm)

for (let i = 0; i < 5; i++) {
    const OptionInput = document.createElement("input")
    OptionInput.type = "radio"
    OptionInput.setAttribute("id", "Option" + OptionLetter[i]);
    OptionInput.value = OptionLetter[i]
    OptionInput.name = "AnswerOption"

    const OptionLabel = document.createElement("label")
    OptionLabel.innerHTML = OptionLetter[i] + ") " + QuestionsAndAnswers[1][i += 1]

    const OptionBreak = document.createElement('br');

    QuestionForm.appendChild(OptionInput)
    QuestionForm.appendChild(OptionLabel)
    QuestionForm.appendChild(OptionBreak)
}

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