// --- Redirecionamento automático baseado no idioma do navegador ---
(function () {
  const alreadyRedirected = localStorage.getItem('lang_redirected');
  const urlParams = new URLSearchParams(window.location.search);
  const manualLang = urlParams.get('lang');
  const preferredLang = localStorage.getItem('preferred_language');

  // Se o usuário escolheu manualmente um idioma via ?lang=, salvamos essa escolha
  if (manualLang) {
    localStorage.setItem('preferred_language', manualLang);
    localStorage.setItem('lang_redirected', 'true');
    return;
  }

  // Se já redirecionamos antes ou temos uma preferência salva, não redirecionamos
  if (alreadyRedirected || preferredLang) return;

  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('pt')) {
    localStorage.setItem('lang_redirected', 'true');
    localStorage.setItem('preferred_language', 'pt');
    window.location.href = '/indexptbr.html?lang=pt';
  } else {
    localStorage.setItem('lang_redirected', 'true');
    localStorage.setItem('preferred_language', 'en');
    window.location.href = '/index.html?lang=en';
  }
})();