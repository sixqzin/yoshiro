// Tema: usa preferências do sistema e localStorage
(function(){
  const toggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-2, #theme-toggle-3, #theme-toggle-4, #theme-toggle-5');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;
  let dark = stored ? (stored === 'dark') : prefersDark;

  function applyTheme(isDark){
    if(isDark){
      document.documentElement.style.setProperty('--bg','#061019');
      document.documentElement.style.setProperty('--card','#0b1623');
      document.documentElement.style.setProperty('--text','#e6eef6');
      toggleButtons.forEach(b=>{b.textContent='🌙'; b.setAttribute('aria-pressed','true')});
    } else {
      document.documentElement.style.setProperty('--bg','#f5f7fb');
      document.documentElement.style.setProperty('--card','#ffffff');
      document.documentElement.style.setProperty('--text','#061019');
      toggleButtons.forEach(b=>{b.textContent='☀️'; b.setAttribute('aria-pressed','false')});
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  applyTheme(dark);

  toggleButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      dark = !dark;
      applyTheme(dark);
    });
  });

  // preencher ano no rodapé
  const years = document.querySelectorAll('#year, #year2, #year3, #year4, #year5');
  years.forEach(el=> el.textContent = new Date().getFullYear());
})();
