const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('pt')) {
  window.location.href = 'pt-br';
}

const LanguageSelectorBtn = document.getElementById("LanguageSelector")
const LanguageSelectorChevron = document.getElementById("ChevronLanguageSelector")

let Chevrondown = false

LanguageSelectorBtn.addEventListener("click", () => {
  if (Chevrondown === false) {
    LanguageSelectorChevron.classList.add("fa-rotate-90")
    document.querySelector("#ptbr").style.display = "block";
    document.querySelector("#en").style.display = "block";
    Chevrondown = true
  } else {
    LanguageSelectorChevron.classList.remove("fa-rotate-90")
    document.querySelector("#ptbr").style.display = "none";
    document.querySelector("#en").style.display = "none";
    Chevrondown = false
  };
});




