const FirstQuestion = document.querySelector("FirstQuestion");

FirstQuestion.addEventListener("submit", (event) => {
    const FirstQuestionData = new FormData(FirstQuestion);
    let output = "";
        for (const entry of FirstQuestionData) {
      output = `${output}${entry[0]}=${entry[1]}\r`;
    }
    console.log(output);
    event.preventDefault();
  },
  false,
)