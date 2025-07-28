let QuestionsAndAnswers = []

let QuestoesPortugues = []
let QuestoesMatematica = []
let QuestoesGeografia = []
let QuestoesHistoria = []
let QuestoesCiencias = []

//Atribui a cada array as questões de suas respectivas matérias, presentes em um arquivo JSON

fetch('questoes/questoesportugues.json')
  .then(response => response.json())
  .then(data => {
    QuestoesPortugues = data;
  })

fetch('questoes/questoesmatematica.json')
  .then(response => response.json())
  .then(data => {
    QuestoesMatematica = data;
  })

fetch('questoes/questoesgeografia.json')
  .then(response => response.json())
  .then(data => {
    QuestoesGeografia = data;
  })

fetch('questoes/questoeshistoria.json')
  .then(response => response.json())
  .then(data => {
    QuestoesHistoria = data;
  })

fetch('questoes/questoesciencias.json')
  .then(response => response.json())
  .then(data => {
    QuestoesCiencias = data;
  })

let TestQuestions = [];
let Answers = [];
let FinalResults = [];
let WrongResults = [];

let NumberOfRightResults = 0
let NumberOfWrongResults = 0

//Inserir as questões na página

const TestArea = document.querySelector(".testarea")

const NumOfQuestionsInput = document.querySelector(".numofquestionsinput")

function GenerateTest() {
    if (NumOfQuestionsInput.value === "") {
        NumOfQuestionsInput.value = 40;
        alert("Como o número de questões desejadas não foi inserido, foram geradas 40 questões, que é o número padrão.")
    }
    if (NumOfQuestionsInput.value > 100) {
        alert("Foram geradas apenas 100 questões, que é o maior número possível.")
        NumOfQuestionsInput.value = 100;
    }
    if (NumOfQuestionsInput.value < 1) {
        alert("Como o número de questões desejadas é um número inválido, foram geradas 40 questões, que é o número padrão.")
        NumOfQuestionsInput.value = 40;
    }
    TestArea.style.display = "block"

//Embaralhar as questões de cada matéria

    let NumeroDeQuestoesDePortugues = 0
    let NumeroDeQuestoesDeMatematica = 0
    let NumeroDeQuestoesDeGeografia = 0
    let NumeroDeQuestoesDeHistoria = 0
    let NumeroDeQuestoesDeCiencias = 0

    let SubjectsIndex = 0

    while (SubjectsIndex < NumOfQuestionsInput.value) {
        if (SubjectsIndex < NumOfQuestionsInput.value) {
            NumeroDeQuestoesDePortugues++
            SubjectsIndex++
        }
        if (SubjectsIndex < NumOfQuestionsInput.value) {
            NumeroDeQuestoesDeMatematica++
            SubjectsIndex++
        }
        if (SubjectsIndex < NumOfQuestionsInput.value) {
            NumeroDeQuestoesDeGeografia++
            SubjectsIndex++
        }
        if (SubjectsIndex < NumOfQuestionsInput.value) {
            NumeroDeQuestoesDeHistoria++
            SubjectsIndex++
        }
        if (SubjectsIndex < NumOfQuestionsInput.value) {
            NumeroDeQuestoesDeCiencias++
            SubjectsIndex++
        }
    }
    
    let QuestoesPortuguesEmbaralhadas = [...QuestoesPortugues]
        .sort(() => Math.random() - 0.5)
        .slice(0, NumeroDeQuestoesDePortugues);
    let QuestoesMatematicaEmbaralhadas = [...QuestoesMatematica]
        .sort(() => Math.random() - 0.5)
        .slice(0, NumeroDeQuestoesDeMatematica);
    let QuestoesGeografiaEmbaralhadas = [...QuestoesGeografia]
        .sort(() => Math.random() - 0.5)
        .slice(0, NumeroDeQuestoesDeGeografia);
    let QuestoesHistoriaEmbaralhadas = [...QuestoesHistoria]
        .sort(() => Math.random() - 0.5)
        .slice(0, NumeroDeQuestoesDeHistoria);
    let QuestoesCienciasEmbaralhadas = [...QuestoesCiencias]
        .sort(() => Math.random() - 0.5)
        .slice(0, NumeroDeQuestoesDeCiencias);
    
    TestQuestions.push(...QuestoesPortuguesEmbaralhadas, ...QuestoesMatematicaEmbaralhadas, ...QuestoesGeografiaEmbaralhadas, ...QuestoesHistoriaEmbaralhadas, ...QuestoesCienciasEmbaralhadas) 

    for (let QuestionsIndex = 0; QuestionsIndex < TestQuestions.length; QuestionsIndex++) {
        switch (QuestionsIndex) {
            case 0:
                const inicioportugues = document.createElement("p");
                inicioportugues.innerHTML = "Língua Portuguesa";
                inicioportugues.style.fontWeight = "bold"
                TestArea.appendChild(inicioportugues);
                break;
            case NumeroDeQuestoesDePortugues:
                const iniciomatematica = document.createElement("p");
                iniciomatematica.innerHTML = "Matemática";
                iniciomatematica.style.fontWeight = "bold"
                TestArea.appendChild(iniciomatematica);
                break;
            case NumeroDeQuestoesDePortugues + NumeroDeQuestoesDeMatematica:
                const iniciogeografia = document.createElement("p");
                iniciogeografia.innerHTML = "Geografia";
                iniciogeografia.style.fontWeight = "bold"
                TestArea.appendChild(iniciogeografia);
                break;
            case NumeroDeQuestoesDePortugues + NumeroDeQuestoesDeMatematica + NumeroDeQuestoesDeGeografia:
                const iniciohistoria = document.createElement("p");
                iniciohistoria.innerHTML = "História";
                iniciohistoria.style.fontWeight = "bold"
                TestArea.appendChild(iniciohistoria);
                break;
            case NumeroDeQuestoesDePortugues + NumeroDeQuestoesDeMatematica + NumeroDeQuestoesDeGeografia + NumeroDeQuestoesDeHistoria:
                const iniciociencias = document.createElement("p");
                iniciociencias.innerHTML = "Ciências";
                iniciociencias.style.fontWeight = "bold"
                TestArea.appendChild(iniciociencias);
                break;
        }
        const Question = TestQuestions[QuestionsIndex];
        const OptionLetter = ["a", "b", "c", "d"];

        const QuestionText = document.createElement("p");
        QuestionText.innerHTML = `${QuestionsIndex + 1}. ${Question[0]}`;
        TestArea.appendChild(QuestionText);

        const QuestionForm = document.createElement("form");
        QuestionForm.classList.add("form" + (QuestionsIndex + 1));
        TestArea.appendChild(QuestionForm);

        for (let OptionsIndex = 0; OptionsIndex < 4; OptionsIndex++) {
            const OptionInput = document.createElement("input");
            OptionInput.type = "radio";
            OptionInput.setAttribute("id", "Option" + OptionLetter[OptionsIndex]);
            OptionInput.value = OptionLetter[OptionsIndex];
            OptionInput.name = "AnswerOption";

            const OptionLabel = document.createElement("label");
            OptionLabel.innerHTML = `${OptionLetter[OptionsIndex]}) ${Question[OptionsIndex + 1]}`;

            const OptionBreak = document.createElement("br");

            QuestionForm.appendChild(OptionInput);
            QuestionForm.appendChild(OptionLabel);
            QuestionForm.appendChild(OptionBreak);
        }
    }
    const SubmitAnswersBtn = document.createElement("button")
    SubmitAnswersBtn.innerHTML = "Confirmar respostas"
    TestArea.appendChild(SubmitAnswersBtn)

//Confirmar a resposta e calcular os resultados

    SubmitAnswersBtn.addEventListener("click", () => {
        for (let FormsIndex = 0; FormsIndex < NumOfQuestionsInput.value; FormsIndex++) {
            const QuestionForm = document.querySelector(".form" + (FormsIndex + 1))
            const FormsData = new FormData(QuestionForm);
            for (const entry of FormsData) {
                Answers.push(`${entry[1]}`); 
            }
        }
        if (String(Answers.length) !== NumOfQuestionsInput.value) {
            alert("Algumas questões não foram respondidas!")
            Answers.length = 0;
        } else {
            console.log(Answers);
            for (let AnswersIndex = 0; AnswersIndex < Answers.length; AnswersIndex++) {
                if (Answers[AnswersIndex] === TestQuestions[AnswersIndex][5]) {
                    FinalResults.push("right")
                } else {
                    FinalResults.push("wrong")
                } 
            }
            console.log(FinalResults);
            for (let ResultsIndex = 0; ResultsIndex < FinalResults.length; ResultsIndex++) {
                if (FinalResults[ResultsIndex] === "right") {
                    NumberOfRightResults++;
                } else {
                    NumberOfWrongResults++;
                    WrongResults.push(ResultsIndex + 1)
                }
            }

//Mostrar os resultados

            ResultsPara = document.createElement("p")
            ResultsPara.innerHTML = "Seu resultado : " + NumberOfRightResults + "/" + Answers.length
            TestArea.appendChild(ResultsPara)
            
            const WrongResultsPara = document.createElement("p")
            WrongResultsPara.innerHTML = "As questões erradas foram as questões "

            for (let WrongResultsIndex = 0; WrongResultsIndex < NumberOfWrongResults; WrongResultsIndex++) {
                WrongResultsPara.innerHTML = WrongResultsPara.innerHTML + WrongResults[WrongResultsIndex] + ", "
                if (WrongResultsIndex === (NumberOfWrongResults - 1)) {
                    WrongResultsPara.innerHTML = (WrongResultsPara.innerHTML.slice(0 , -2)) + "."
                    TestArea.appendChild(WrongResultsPara)
                    CorrectionPara = document.createElement("p")
                    CorrectionPara.innerHTML = "Segue a correção das questões erradas:"
                    TestArea.appendChild(CorrectionPara)
                }
            }    
            for (let CorrectionIndex = 0; CorrectionIndex < NumberOfWrongResults; CorrectionIndex++) {
                const WrongResultsCorrection = document.createElement("p")
                const YourAnswer = document.createElement("p")
                const RightAnswer = document.createElement("p")
                WrongResultsCorrection.innerHTML = WrongResults[CorrectionIndex] + ". " + TestQuestions[WrongResults[CorrectionIndex] - 1][0]
                TestArea.appendChild(WrongResultsCorrection)
                switch (Answers[WrongResults[CorrectionIndex] - 1]) {
                    case 'a':
                        YourAnswer.innerHTML = "Sua resposta: " + Answers[WrongResults[CorrectionIndex] - 1] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][1]
                        break;
                    case 'b':
                        YourAnswer.innerHTML = "Sua resposta: " + Answers[WrongResults[CorrectionIndex] - 1] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][2]
                        break;
                    case 'c':
                        YourAnswer.innerHTML = "Sua resposta: " + Answers[WrongResults[CorrectionIndex] - 1] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][3]       
                        break;
                    case 'd':
                        YourAnswer.innerHTML = "Sua resposta: " + Answers[WrongResults[CorrectionIndex] - 1] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][4]    
                        break;
                    }
                YourAnswer.style.color = "#BC4749"
                switch (TestQuestions[WrongResults[CorrectionIndex] - 1][5]) {
                    case 'a':
                        RightAnswer.innerHTML = "Resposta correta: " + TestQuestions[WrongResults[CorrectionIndex] - 1][5] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][1]
                        break;
                    case 'b':
                        RightAnswer.innerHTML = "Resposta correta: " + TestQuestions[WrongResults[CorrectionIndex] - 1][5] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][2]
                        break;
                    case 'c':
                        RightAnswer.innerHTML = "Resposta correta: " + TestQuestions[WrongResults[CorrectionIndex] - 1][5] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][3]       
                        break;
                    case 'd':
                        RightAnswer.innerHTML = "Resposta correta: " + TestQuestions[WrongResults[CorrectionIndex] - 1][5] + ") " + TestQuestions[WrongResults[CorrectionIndex] - 1][4]
                        break;
                    }
                RightAnswer.style.color = "#6A994E"
                TestArea.appendChild(YourAnswer)
                TestArea.appendChild(RightAnswer)
            }
            const ReiniciePara = document.createElement("p")
            ReiniciePara.innerHTML = "Reinicie a página para poder gerar mais uma prova."
            TestArea.appendChild(ReiniciePara)
            const ScrollToTopBtn = document.createElement("button")
            ScrollToTopBtn.innerHTML = "Clique aqui para reiniciar a página"
            TestArea.appendChild(ScrollToTopBtn)
            ScrollToTopBtn.addEventListener("click", () => {
                window.location.reload();
            })
        }
    });
};
