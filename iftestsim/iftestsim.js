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
    ["Qual é o superlativo absoluto sintético de 'bom'?", "Muito bom", "Excelente", "Ótimo", "Boíssimo", "c"],
    ["Qual é a figura de linguagem usada em: 'A cidade acordou assustada'?", "Metáfora", "Hipérbole", "Prosopopeia", "Ironia", "c"],
    ["Qual o valor de x na equação: 4x - 8 = 0?", "1", "2", "4", "8", "b"],
    ["Qual desses órgãos pertence ao sistema respiratório?", "Fígado", "Pulmão", "Estômago", "Coração", "b"],
    ["Em que ano ocorreu a Abolição da Escravatura no Brasil?", "1822", "1889", "1888", "1930", "c"],
    ["Qual o nome do fenômeno que causa o aquecimento da Terra?", "Camada de ozônio", "Efeito estufa", "Resfriamento global", "Poluição térmica", "b"],
    ["Qual destas é uma conjunção coordenativa adversativa?", "Porque", "Portanto", "Mas", "Que", "c"],
    ["Qual o valor da raiz quadrada de 144?", "10", "11", "12", "14", "c"],
    ["Qual o nome da parte da célula responsável pela digestão celular?", "Lisossomo", "Mitocôndria", "Ribossomo", "Núcleo", "a"],
    ["Quem liderou a Inconfidência Mineira?", "Tiradentes", "Dom Pedro II", "José Bonifácio", "Duque de Caxias", "a"],
    ["Qual é o principal rio que corta a região Norte do Brasil?", "São Francisco", "Paraná", "Amazonas", "Tocantins", "c"],
    ["Qual dessas frases está com acentuação correta?", "Heroi", "País", "Vooo", "Pólenes", "b"],
    ["Qual o resultado de -3 × 5?", "-8", "15", "-15", "-5", "c"],
    ["Qual dos planetas é conhecido como 'planeta vermelho'?", "Vênus", "Saturno", "Marte", "Urano", "c"],
    ["Em que período histórico ocorreu a Revolução Francesa?", "Idade Média", "Idade Moderna", "Idade Antiga", "Pré-História", "b"],
    ["Qual é o nome do gás mais abundante na atmosfera?", "Oxigênio", "Dióxido de carbono", "Hidrogênio", "Nitrogênio", "d"],
    ["Qual destas palavras é um adjetivo?", "Casa", "Rapidamente", "Feliz", "Ontem", "c"],
    ["Quanto é 3² + 2²?", "13", "11", "17", "9", "a"],
    ["Qual o nome da membrana que envolve a célula?", "Lisossomo", "Citoplasma", "Membrana plasmática", "Ribossomo", "c"],
    ["Qual evento marca o fim da Idade Média?", "Revolução Francesa", "Descobrimento da América", "Queda do Império Romano do Ocidente", "Queda de Constantinopla", "d"],
    ["Qual o nome da capital do estado de Roraima?", "Porto Velho", "Boa Vista", "Macapá", "Rio Branco", "b"],
    ["O que é uma progressão aritmética (PA)?", "Sequência com razão constante", "Sequência de potências", "Sequência alternada", "Sequência sem padrão", "a"],
    ["Qual é o processo que permite às plantas capturar energia solar?", "Transpiração", "Digestão", "Respiração", "Fotossíntese", "d"],
    ["Quem foi o primeiro presidente da República do Brasil?", "Floriano Peixoto", "Getúlio Vargas", "Deodoro da Fonseca", "Café Filho", "c"],
    ["Qual o nome da linha imaginária que marca 0° de longitude?", "Linha do Equador", "Meridiano de Greenwich", "Trópico de Câncer", "Trópico de Capricórnio", "b"],
    ["Qual o plural correto de 'pão'?", "Pãos", "Pães", "Pãoses", "Pãeses", "b"],
    ["Quanto é 10% de 250?", "25", "20", "30", "15", "a"],
    ["Qual é o nome do processo pelo qual um sólido vira gás sem passar pelo líquido?", "Condensação", "Sublimação", "Evaporação", "Solidificação", "b"],
    ["Qual foi o movimento que lutou pelo fim da escravidão no Brasil?", "Diretas Já", "Abolicionismo", "Federalismo", "Revolta dos Malês", "b"],
    ["Qual das alternativas apresenta uma preposição?", "Mas", "Muito", "Com", "Porém", "c"],
    ["Qual o nome do continente com mais países?", "Europa", "Ásia", "América", "África", "d"],
    ["Quem escreveu 'O Auto da Barca do Inferno'?", "Machado de Assis", "José de Alencar", "Padre Anchieta", "Gil Vicente", "d"],
    ["Quanto é (3 + 2)²?", "25", "10", "20", "15", "a"],
    ["Qual a função das mitocôndrias?", "Controle genético", "Síntese de proteínas", "Armazenamento de água", "Produção de energia", "d"],
    ["Qual era o nome da capital do Brasil antes de Brasília?", "Rio de Janeiro", "São Paulo", "Salvador", "Belo Horizonte", "a"],
    ["O que indica o advérbio na frase: 'Ele saiu rapidamente.'?", "Lugar", "Modo", "Tempo", "Negação", "b"],
    ["Qual o número primo entre os seguintes: 4, 6, 9, 11?", "4", "6", "9", "11", "d"],
    ["Qual camada da Terra é composta por magma?", "Núcleo", "Manto", "Crosta", "Atmosfera", "b"],
    ["Qual a língua oficial da Argentina?", "Português", "Espanhol", "Italiano", "Inglês", "b"],
    ["Quanto é 2³?", "6", "8", "4", "9", "b"],
    ["Qual é a função do verbo na frase: 'Ele correu para casa'?", "Predicado", "Sujeito", "Verbo de ligação", "Verbo significativo", "d"],
    ["Qual dessas expressões indica tempo?", "Debaixo da cama", "Ao meio-dia", "Com força", "Sem parar", "b"],
    ["Qual o valor de x na equação: 2x + 5 = 15?", "5", "10", "15", "20", "a"],
    ["O que é clorofila?", "Proteína do sangue", "Hormônio vegetal", "Pigmento responsável pela cor verde das plantas", "Mineral do solo", "c"],
    ["Quem foi Zumbi dos Palmares?", "Imperador", "Líder indígena", "Escravizado e líder quilombola", "Descobridor do Brasil", "c"],
    ["O que indica a palavra 'aqui' na frase: 'Fique aqui'?", "Modo", "Tempo", "Lugar", "Causa", "c"],
    ["Qual o resultado de (2 + 3) × (4 + 1)?", "25", "20", "30", "15", "a"],
    ["Qual parte da célula armazena o material genético?", "Mitocôndria", "Núcleo", "Ribossomo", "Lisossomo", "b"],
    ["Qual é o marco do início da Idade Moderna?", "Queda de Roma", "Queda de Constantinopla", "Descobrimento da América", "Revolução Francesa", "b"],
    ["Qual destas cidades brasileiras é mais ao sul?", "Curitiba", "Florianópolis", "Porto Alegre", "São Paulo", "c"],
    ["Qual frase está com pontuação correta?", "João foi ao mercado, comprou pão, e voltou.", "João foi ao mercado: comprou pão e voltou.", "João foi ao mercado comprou pão voltou.", "João foi ao mercado. Comprou pão e voltou.", "d"],
    ["Qual é a área de um retângulo de 8 cm por 4 cm?", "12 cm²", "16 cm²", "24 cm²", "32 cm²", "d"],
    ["O que ocorre na transpiração das plantas?", "Entrada de água", "Saída de oxigênio", "Perda de água", "Entrada de luz", "c"],
    ["Quem foi o primeiro governador-geral do Brasil?", "Tomé de Souza", "Mem de Sá", "Pedro Álvares Cabral", "Anchieta", "a"],
    ["Qual é o país mais populoso do mundo?", "Índia", "China", "Estados Unidos", "Rússia", "b"],
    ["Qual é o antônimo de 'valente'?", "Forte", "Covarde", "Bravo", "Ágil", "b"],
    ["Qual é a raiz quadrada de 81?", "7", "8", "9", "10", "c"],
    ["O que é célula procarionte?", "Célula com núcleo definido", "Célula com parede celular", "Célula sem núcleo organizado", "Célula animal", "c"],
    ["Qual revolta ocorreu contra a vacinação obrigatória?", "Revolta da Chibata", "Revolta da Vacina", "Canudos", "Sabinada", "b"],
    ["Qual dessas regiões do Brasil é a mais industrializada?", "Norte", "Sul", "Centro-Oeste", "Sudeste", "d"],
    ["Qual dessas frases tem sujeito indeterminado?", "Estuda-se muito aqui.", "Eu estudei ontem.", "Ele estuda muito.", "Eles estudaram juntos.", "a"],
    ["Quanto é 7 × 6 - 4?", "38", "42", "40", "38", "a"],
    ["O que é ecossistema?", "Conjunto de espécies", "Conjunto de seres humanos", "Conjunto de seres vivos e ambiente", "Conjunto de vegetais", "c"],
    ["Quem liderou o movimento conhecido como Revolta dos Malês?", "Indígenas", "Militares", "Escravizados muçulmanos", "Colonizadores", "c"],
    ["O que é um planalto?", "Área baixa e plana", "Área elevada e irregular", "Montanha", "Área costeira", "b"],
    ["Qual é o coletivo de lobos?", "Matilha", "Alcateia", "Rebanho", "Bando", "b"],
    ["Quanto é (10² - 5²)?", "25", "50", "75", "100", "c"],
    ["Qual a estrutura vegetal responsável pela fotossíntese?", "Raiz", "Caule", "Folha", "Semente", "c"],
    ["Qual evento marcou o fim da monarquia no Brasil?", "Proclamação da República", "Independência", "Ditadura Militar", "Abolição da Escravidão", "a"],
    ["Qual estado brasileiro faz fronteira com a Bolívia e com o Peru?", "Acre", "Rondônia", "Mato Grosso", "Amazonas", "a"],
    ["Qual dessas frases apresenta um predicado nominal?", "A menina é alegre.", "Eles correram rápido.", "Ela escreveu a carta.", "Você estudou muito.", "a"],
    ["Qual a média aritmética de 8, 10 e 12?", "10", "9", "11", "12", "a"],
    ["Qual é o nome da estrutura que separa o tórax do abdômen?", "Fêmur", "Diafragma", "Pelve", "Tórax", "b"],
    ["Quem proclamou a independência dos EUA?", "Thomas Jefferson", "George Washington", "Benjamin Franklin", "Abraham Lincoln", "a"],
    ["Qual o clima predominante na Amazônia?", "Semiárido", "Tropical úmido", "Equatorial", "Temperado", "c"],
    ["O que significa a sigla ONU?", "Organização Nacional Unida", "Organização das Nações Unidas", "Ordem Mundial Unificada", "Organização Norte Universal", "b"],
    ["Qual destas palavras é um substantivo abstrato?", "Mesa", "Coragem", "Casa", "Garrafa", "b"],
    ["Qual é o perímetro de um quadrado com lado de 6 cm?", "36 cm", "12 cm", "24 cm", "30 cm", "c"],
    ["Como se chama o processo de formação do zigoto?", "Divisão celular", "Fecundação", "Mutação", "Geração espontânea", "b"],
    ["Quem foi o responsável pelo golpe militar de 1964 no Brasil?", "Militares e civis contrários ao governo", "Getúlio Vargas", "Jango", "Dom Pedro II", "a"],
    ["Qual dessas capitais é do Nordeste brasileiro?", "Vitória", "Recife", "Cuiabá", "Palmas", "b"],
    ["Qual oração apresenta verbo de ligação?", "Ela parecia cansada.", "O menino correu rápido.", "Ele escreveu bem.", "Nós viajamos ontem.", "a"],
    ["Quanto é ¼ de 40?", "5", "10", "15", "20", "b"],
    ["Qual a função do estômago no sistema digestório?", "Digestão química de proteínas", "Absorver nutrientes", "Produzir saliva", "Regular a glicose", "a"],
    ["Qual foi o tratado que dividiu as terras descobertas entre Portugal e Espanha?", "Tratado de Madri", "Tratado de Lisboa", "Tratado de Tordesilhas", "Tratado de Utrecht", "c"],
    ["Qual o ponto mais alto do Brasil?", "Monte Roraima", "Pico da Neblina", "Pico das Agulhas Negras", "Pico Paraná", "b"],
    ["Qual o adjetivo na frase: 'O aluno dedicado passou na prova'?", "Aluno", "Prova", "Passou", "Dedicado", "d"],
    ["Qual o resultado de: (3² + 4²)?", "16", "25", "12", "7", "b"],
    ["Qual órgão do corpo humano é responsável por bombear sangue?", "Fígado", "Pulmão", "Coração", "Estômago", "c"],
    ["Qual o nome do movimento abolicionista que envolveu artistas e intelectuais no Brasil?", "Negritude", "Movimento Negro", "Movimento Abolicionista", "Modernismo", "c"],
    ["Qual desses países não faz fronteira com o Brasil?", "Chile", "Uruguai", "Colômbia", "Peru", "a"],
    ["Qual desses pronomes é de tratamento?", "Ele", "Ela", "Você", "Vossa Excelência", "d"],
    ["Qual é o mínimo múltiplo comum (MMC) de 4 e 6?", "12", "6", "24", "8", "a"],
    ["Qual é a função dos alvéolos pulmonares?", "Captar luz", "Trocar gases com o sangue", "Produzir hormônios", "Armazenar oxigênio", "b"],
    ["Qual a capital do estado de Santa Catarina?", "Curitiba", "Florianópolis", "Joinville", "Porto Alegre", "b"],
    ["Qual o verbo da frase: 'O aluno leu o livro ontem'?", "Aluno", "Livro", "Leu", "Ontem", "c"],
    ["Quanto é ⅓ de 90?", "20", "30", "15", "60", "b"],
    ["Qual é a principal função dos ossos?", "Produzir energia", "Bombear sangue", "Sustentação do corpo", "Regular temperatura", "c"],
    ["Qual revolta ficou conhecida pelo lema 'Liberdade ainda que tardia'?", "Canudos", "Sabinada", "Inconfidência Mineira", "Balaiada", "c"],
    ["Qual dessas capitais está na região Norte?", "Teresina", "Rio Branco", "João Pessoa", "Vitória", "b"],
    ["Qual é o tipo de sujeito na frase: 'Faz frio à noite.'?", "Oculto", "Indeterminado", "Simples", "Inexistente", "d"],
    ["Qual a fórmula da área do triângulo?", "b × h", "(b × h) ÷ 2", "l × l", "2 × π × r", "b"],
    ["O que é sistema nervoso?", "Sistema que regula o sangue", "Sistema que comanda o corpo", "Sistema de respiração", "Sistema digestivo", "b"],
    ["Quem governava o Brasil durante o período da ditadura militar?", "Presidentes eleitos diretamente", "Imperadores", "Presidentes militares", "Parlamentares", "c"],
    ["Qual dessas capitais é banhada pelo Oceano Atlântico?", "Campo Grande", "São Paulo", "Salvador", "Brasília", "c"],
    ["O que são verbos defectivos?", "Verbos com muitos tempos verbais", "Verbos que não têm todas as conjugações", "Verbos regulares", "Verbos com vogais finais", "b"],
    ["Qual o resultado da expressão: (12 ÷ 3) + (5 × 2)?", "14", "10", "16", "13", "c"],
    ["Qual é a função do pâncreas?", "Produzir suco gástrico", "Produzir insulina", "Digere gorduras", "Produz bile", "b"],
    ["Qual revolta foi liderada por Antônio Conselheiro?", "Revolta da Vacina", "Guerra de Canudos", "Balaiada", "Sabinada", "b"],
    ["Qual é a capital do estado de Sergipe?", "Aracaju", "Maceió", "Natal", "Recife", "a"],
    ["O que é sujeito composto?", "Sujeito com núcleo verbal", "Sujeito com verbo auxiliar", "Sujeito com dois ou mais núcleos", "Sujeito elíptico", "c"]
];

let Answers = [];
let FinalResults = [];

//Inserir as questões na página

const TestArea = document.querySelector(".testarea")

//let RandomStartPosition = Math.floor(Math.random() * (QuestionsAndAnswers.length - 41))

function GenerateTest() {
    for (let QuestionsIndex = 0; QuestionsIndex < 40; QuestionsIndex++) {

        let RandomQuestion = Math.floor(Math.random() * QuestionsAndAnswers.length)

        const OptionLetter = ["a", "b", "c", "d"]

        const QuestionText = document.createElement("p")
        QuestionText.innerHTML = QuestionsIndex + 1 + ". " + QuestionsAndAnswers[RandomQuestion][0]
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
            OptionLabel.innerHTML = OptionLetter[OptionsIndex] + ") " + QuestionsAndAnswers[RandomQuestion][OptionsIndex + 1]

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
    for (let FormsIndex = 0; FormsIndex < 40; FormsIndex++) {
        const QuestionForm = document.querySelector(".form" + (FormsIndex + 1))
        const FormsData = new FormData(QuestionForm);
        for (const entry of FormsData) {
            Answers.push(`${entry[1]}`); 
        }
    }
    if (Answers.length !== 40) {
        alert("Algumas questões não foram resolvidas!")
        Answers.length = 0;
    } else {
        console.log(Answers);
        for (let AnswersIndex = 0; AnswersIndex < Answers.length; AnswersIndex++) {
            if (Answers[AnswersIndex] === QuestionsAndAnswers[AnswersIndex][5]) {
                FinalResults.push("right")
            } else {
                FinalResults.push("wrong")
            } 
        }
        console.log(FinalResults);
    }
});
}
    