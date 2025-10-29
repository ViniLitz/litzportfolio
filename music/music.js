const MusicalNoteAreaH2 = document.querySelector(".MusicalNoteAreaH2")

const MusicalNoteImage = document.querySelector(".NoteImage")

const ChoiceButton1 = document.querySelector(".ChoiceButton1")
const ChoiceButton2 = document.querySelector(".ChoiceButton2")
const ChoiceButton3 = document.querySelector(".ChoiceButton3")

const NextLevelButton = document.querySelector(".NextLevelButton")

let MusicNotes
let FirstWrongAnswerNum
let ChoiceButtons
let CorrectButtonNum

function NextNote() {
    
    MusicNotes = ["C", "D", "E", "F", "G", "A", "B"]
    ChoiceButtons = [ChoiceButton1, ChoiceButton2, ChoiceButton3]

    ChoiceButton1.style.backgroundColor = "#f2e8cf"
    ChoiceButton1.style.border = "4px solid #386641"
    ChoiceButton1.style.color = "black"

    ChoiceButton2.style.backgroundColor = "#f2e8cf"
    ChoiceButton2.style.border = "4px solid #386641"
    ChoiceButton2.style.color = "black"

    ChoiceButton3.style.backgroundColor = "#f2e8cf"
    ChoiceButton3.style.border = "4px solid #386641"
    ChoiceButton3.style.color = "black"
    
    MusicalNoteAreaH2.style.color = "black"
    MusicalNoteAreaH2.innerHTML = "Que nota é essa?"

    ChoiceButton1.style.display = "inline-block"
    ChoiceButton2.style.display = "inline-block"
    ChoiceButton3.style.display = "inline-block"

    CorrectAnswerNum = Math.floor(Math.random() * 7)
    CorrectAnswer = MusicNotes[CorrectAnswerNum]

    CorrectButtonNum = Math.floor(Math.random() * 2)
    ChoiceButtons[CorrectButtonNum].innerHTML = CorrectAnswer
    ChoiceButtons.splice(CorrectButtonNum, 1)
    
    MusicNotes.splice(CorrectAnswerNum, 1)
    FirstWrongAnswerNum = Math.floor(Math.random() * 6)
    ChoiceButtons[0].innerHTML = MusicNotes[FirstWrongAnswerNum]
    MusicNotes.splice(FirstWrongAnswerNum, 1)
    ChoiceButtons[1].innerHTML = MusicNotes[Math.floor(Math.random() * 5)]

    switch (CorrectAnswer) {
    case "C":
        MusicalNoteImage.src = "images/NotasMusicais/C5.png"
        break;
    case "D":
        MusicalNoteImage.src = "images/NotasMusicais/D5.png"
        break;
    case "E":
        MusicalNoteImage.src = "images/NotasMusicais/E5.png"
        break;
    case "F":
        MusicalNoteImage.src = "images/NotasMusicais/F4.png"
        break;
    case "G":
        MusicalNoteImage.src = "images/NotasMusicais/G4.png"
        break;
    case "A":
        MusicalNoteImage.src = "images/NotasMusicais/A4.png"
        break;
    case "B":
        MusicalNoteImage.src = "images/NotasMusicais/B4.png"
        break;
    }
}

NextLevelButton.addEventListener("click", NextNote)

ChoiceButton1.addEventListener("click", ()=> {if (ChoiceButton1.innerHTML === CorrectAnswer) {
    ChoiceButton1.style.backgroundColor = "#6a994e"
    ChoiceButton1.style.border = "4px solid #6a994e"
    ChoiceButton1.style.color = "#f2e8cf"

    MusicalNoteAreaH2.style.color = "#6a994e"
    MusicalNoteAreaH2.innerHTML = "Resposta correta!"

    ChoiceButton2.style.display = "none"
    ChoiceButton3.style.display = "none"
} else {
    ChoiceButton1.style.backgroundColor = "#bc4749"
    ChoiceButton1.style.border = "4px solid #bc4749"
    ChoiceButton1.style.color = "#f2e8cf"

    MusicalNoteAreaH2.style.color = "#bc4749"
    MusicalNoteAreaH2.innerHTML = "Resposta errada!"

    ChoiceButton2.style.display = "none"
    ChoiceButton3.style.display = "none"
}})

ChoiceButton2.addEventListener("click", ()=> {if (ChoiceButton2.innerHTML === CorrectAnswer) {
    ChoiceButton2.style.backgroundColor = "#6a994e"
    ChoiceButton2.style.border = "4px solid #6a994e"
    ChoiceButton2.style.color = "#f2e8cf"

    MusicalNoteAreaH2.style.color = "#6a994e"
    MusicalNoteAreaH2.innerHTML = "Resposta correta!"

    ChoiceButton1.style.display = "none"
    ChoiceButton3.style.display = "none"
} else {
    ChoiceButton2.style.backgroundColor = "#bc4749"
    ChoiceButton2.style.border = "4px solid #bc4749"
    ChoiceButton2.style.color = "#f2e8cf"

    MusicalNoteAreaH2.style.color = "#bc4749"
    MusicalNoteAreaH2.innerHTML = "Resposta errada!"

    ChoiceButton1.style.display = "none"
    ChoiceButton3.style.display = "none"
}})

ChoiceButton3.addEventListener("click", ()=> {if (ChoiceButton3.innerHTML === CorrectAnswer) {
    ChoiceButton3.style.backgroundColor = "#6a994e"
    ChoiceButton3.style.border = "4px solid #6a994e"
    ChoiceButton3.style.color = "#f2e8cf"

    MusicalNoteAreaH2.style.color = "#6a994e"
    MusicalNoteAreaH2.innerHTML = "Resposta correta!"

    ChoiceButton1.style.display = "none"
    ChoiceButton2.style.display = "none"
} else {
    ChoiceButton3.style.backgroundColor = "#bc4749"
    ChoiceButton3.style.border = "4px solid #bc4749"
    ChoiceButton3.style.color = "#f2e8cf"

    MusicalNoteAreaH2.style.color = "#bc4749"
    MusicalNoteAreaH2.innerHTML = "Resposta errada!"

    ChoiceButton1.style.display = "none"
    ChoiceButton2.style.display = "none"
}})

NextNote()