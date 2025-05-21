//Questões e suas respostas no seguinte formato: [Texto da questão, Opção A, Opção B, Opção C, Opção D, Opção correta] 

let QuestionsAndAnswers = [
    ["Qual é o tipo de predicado na frase: 'O menino chegou cansado.'?", "Verbal", "Nominal", "Verbo-nominal", "Inexistente", "c"],
    ["Qual das alternativas é um exemplo de metáfora?", "Ele estava doente", "Ela é uma flor", "Corri muito ontem", "O céu está azul", "b"],
    ["Qual é o valor de x na equação: 3x + 2 = 11?", "2", "3", "5", "6", "b"],
    ["Qual é a função dos ribossomos na célula?", "Produção de energia", "Síntese de proteínas", "Armazenamento de água", "Controle das funções celulares", "b"],
    ["Quem proclamou a independência do Brasil?", "Pedro Álvares Cabral", "Tiradentes", "Dom Pedro I", "Getúlio Vargas", "c"],
    ["Qual é a capital do estado do Tocantins?", "Palmas", "Teresina", "São Luís", "Rio Branco", "a"],
    ["Em que continente está localizado o deserto do Saara?", "Ásia", "América", "África", "Europa", "c"],
    ["Qual destas palavras é um advérbio de tempo?", "Rápido", "Ontem", "Ali", "Sempre", "b"],
    ["Qual é a principal fonte de energia usada em usinas hidrelétricas?", "Sol", "Vento", "Água", "Carvão", "c"],
    ["Qual foi o motivo da Revolução Farroupilha?", "Abolição da escravidão", "Impostos sobre produtos do sul", "Separação de Portugal", "Revolta contra o Império", "b"],
    ["Como se escreve o número 2.358 em algarismos romanos?", "MMCCCLVIII", "MMCCCXLVIII", "MMDCCCLVIII", "MMCCCXXXVIII", "a"],
    ["Qual é o sujeito da frase: 'Chove muito nesta época.'?", "Oculto", "Indeterminado", "Simples", "Inexistente", "d"],
    ["Qual é a fórmula da água?", "CO2", "H2O", "O2", "H2SO4", "b"],
    ["Qual é a função do núcleo na célula?", "Produzir proteínas", "Regular entrada de substâncias", "Controlar as atividades celulares", "Fornecer energia", "c"],
    ["Quem foi o presidente do Brasil durante o Estado Novo?", "Juscelino Kubitschek", "Getúlio Vargas", "Fernando Henrique", "Dilma Rousseff", "b"],
    ["Qual dessas opções é um bioma brasileiro?", "Taiga", "Savana", "Pampas", "Pântano", "c"],
    ["Qual o antônimo da palavra 'feliz'?", "Alegre", "Triste", "Risonho", "Contente", "b"],
    ["Quantos lados tem um octógono?", "6", "8", "10", "12", "b"],
    ["Qual é o valor de 5²?", "10", "15", "25", "30", "c"],
    ["Qual é a tradução da palavra 'apple' em inglês?", "Abacaxi", "Pêra", "Banana", "Maçã", "d"],
    ["O que é uma oração subordinada?", "Frase principal", "Frase independente", "Frase que depende de outra", "Verbo auxiliar", "c"],
    ["Qual o maior planeta do sistema solar?", "Terra", "Marte", "Júpiter", "Saturno", "c"],
    ["Qual destas guerras envolveu Brasil, Argentina e Uruguai contra o Paraguai?", "Guerra do Contestado", "Guerra de Canudos", "Guerra da Tríplice Aliança", "Guerra dos Farrapos", "c"],
    ["Qual o nome da linha imaginária que divide a Terra em hemisférios Norte e Sul?", "Trópico de Câncer", "Meridiano de Greenwich", "Linha do Equador", "Trópico de Capricórnio", "c"],
    ["Qual é o plural de 'cidadão'?", "Cidadões", "Cidadãos", "Cidadães", "Cidadõeses", "b"],
    ["Qual o resultado da expressão: (6 + 2) × 3?", "24", "30", "18", "20", "a"],
    ["Qual é o processo responsável pela formação de nuvens?", "Precipitação", "Evaporação", "Condensação", "Transpiração", "c"],
    ["Qual foi o período da história em que surgiram as máquinas a vapor?", "Idade Média", "Idade Moderna", "Revolução Industrial", "Idade Antiga", "c"],
    ["Qual das alternativas é um exemplo de frase interrogativa?", "Ele chegou ontem", "Você viu meu livro?", "Está chovendo", "Gosto de estudar", "b"],
    ["Em qual estado brasileiro fica o Pantanal?", "Mato Grosso do Sul", "Bahia", "Acre", "Paraná", "a"],
    ["Quantos segundos há em 1 hora?", "3600", "600", "1800", "120", "a"],
    ["O que é fotossíntese?", "Respiração das plantas", "Produção de clorofila", "Transformação de luz em energia pelas plantas", "Reprodução vegetal", "c"],
    ["Em que ano foi proclamada a República no Brasil?", "1822", "1889", "1500", "1930", "b"],
    ["Qual a função da vírgula na frase: 'Ana, venha aqui.'?", "Separar verbos", "Indicar enumeração", "Separar o vocativo", "Indicar sujeito", "c"],
    ["Qual a capital do estado do Amapá?", "Belém", "Macapá", "Boa Vista", "São Luís", "b"],
    ["O que é um poliedro?", "Figura com apenas curvas", "Figura plana", "Sólido com faces planas", "Número composto", "c"],
    ["Qual é o nome da camada mais externa da Terra?", "Manto", "Núcleo", "Crosta", "Atmosfera", "c"],
    ["Quem escreveu 'Dom Casmurro'?", "José de Alencar", "Machado de Assis", "Carlos Drummond", "Graciliano Ramos", "b"],
    ["Qual é o nome do processo que transforma o líquido em vapor?", "Solidificação", "Condensação", "Evaporação", "Sublimação", "c"],
    ["Qual é o superlativo absoluto sintético de 'bom'?", "Muito bom", "Excelente", "Ótimo", "Boíssimo", "c"]
];

//Inserir as questões na página

function GenerateTest() {
    for (let QuestionsIndex = 0; QuestionsIndex < QuestionsAndAnswers.length; QuestionsIndex++) {
        const TestArea = document.querySelector(".testarea")
        const OptionLetter = ["a", "b", "c", "d"]

        const QuestionText = document.createElement("p")
        QuestionText.innerHTML = (QuestionsIndex + 1) + ". " + QuestionsAndAnswers[QuestionsIndex][0]
        TestArea.appendChild(QuestionText)

        const QuestionForm = document.createElement("form")
        QuestionForm.classList.add("form" + (QuestionsIndex + 1))
        TestArea.appendChild(QuestionForm)

        for (let OptionsIndex = 0; OptionsIndex < 4; OptionsIndex++) {
            const OptionInput = document.createElement("input")
            OptionInput.type = "radio"
            OptionInput.setAttribute("id", "Option" + OptionLetter[OptionsIndex]);

            OptionInput.value = OptionLetter[OptionsIndex]
            OptionInput.name = "AnswerOption"

            const OptionLabel = document.createElement("label")
            OptionLabel.innerHTML = OptionLetter[OptionsIndex] + ") " + QuestionsAndAnswers[QuestionsIndex][OptionsIndex + 1]

            const OptionBreak = document.createElement('br');

            QuestionForm.appendChild(OptionInput)
            QuestionForm.appendChild(OptionLabel)
            QuestionForm.appendChild(OptionBreak)
        }
    }
    const SubmitAnswersBtn = document.createElement("button")
    SubmitAnswersBtn.innerHTML = "Confirmar respostas"
    TestArea.appendChild(SubmitAnswersBtn)

//Confirmar a resposta

    SubmitAnswersBtn.addEventListener("click", () => {
    for (let FormsIndex = 0; index < QuestionsAndAnswers.length; FormsIndex++) {
        const QuestionForm = document.querySelector(".form" + (QuestionsIndex + 1))
        const FormsData = new FormData(QuestionForm);
        let Answers = []
        for (const entry of FormsData) {
            Answers.push(`${entry[1]}`);
        }
    }
    console.log(Answers);
});
}






    
    
    