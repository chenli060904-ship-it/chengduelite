(() => {
    const key = 'macompass-lang';
    const buttons = Array.from(document.querySelectorAll('[data-lang-switch]'));

   const apply = (lang) => {
         document.body.dataset.lang = lang;
         document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

         buttons.forEach((button) => {
                 button.classList.toggle('is-active', button.dataset.langSwitch === lang);
                 button.setAttribute('aria-pressed', button.dataset.langSwitch === lang ? 'true' : 'false');
         });

         document.querySelectorAll('[data-en][data-zh]').forEach((node) => {
                 node.textContent = node.dataset[lang] || node.dataset.en || '';
         });

         localStorage.setItem(key, lang);
   };

   buttons.forEach((button) => button.addEventListener('click', () => apply(button.dataset.langSwitch)));
    apply(localStorage.getItem(key) || 'en');
})();
