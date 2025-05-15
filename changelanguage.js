const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('pt')) {
  window.location.href = 'indexpt-br.html';
}