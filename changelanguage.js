(function () {
  const alreadyRedirected = localStorage.getItem('lang_redirected');
  const manualLang = new URLSearchParams(window.location.search).get('lang');
  const preferredLang = localStorage.getItem('preferred_language');

  if (manualLang) {
    localStorage.setItem('preferred_language', manualLang);
    return;
  }

  if (alreadyRedirected || preferredLang) return;

  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('pt')) {
    localStorage.setItem('lang_redirected', 'true');
    window.location.href = '/indexptbr.html';
  } else {
    localStorage.setItem('lang_redirected', 'true');
    window.location.href = '/index.html';
  }
})();

const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('pt')) {
  window.location.href = 'indexpt-br.html';
}