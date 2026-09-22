const languageButton = document.querySelector('.language');
languageButton.addEventListener('click', () => {
  const english = document.body.classList.toggle('english');
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  languageButton.textContent = english ? '中文' : 'English';
  languageButton.setAttribute('aria-label', english ? '切换至中文' : 'Switch language');
});
