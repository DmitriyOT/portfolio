// Загрузчик Яндекс.Метрики (счётчик 111460043).
// Подключён по официальному способу для сайтов с CSP: код счётчика вынесен
// во внешний файл, поэтому в script-src не нужен 'unsafe-inline'
// (https://yandex.ru/support/metrica/code/install-counter-csp.html).
// Хиты отправляются вручную из src/lib/metrika.ts: в init выставлен
// defer:true — рекомендованный режим для SPA, чтобы просмотры страниц
// при переходах по History API не задваивались
// (https://yandex.com/support/metrica/en/code/counter-spa-setup).
// Активен только на продовом домене: dev-сервер, preview и smoke-тесты
// (localhost) не должны ни портить статистику, ни ходить во внешнюю сеть.
(function () {
  if (window.location.hostname !== 'dmitriyot.github.io') return;

  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t); a = e.getElementsByTagName(t)[0]; k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=111460043', 'ym');

  // defer:true — автоматический хит при загрузке отключён; url и referer
  // передаются вручную при каждом ym('hit') в src/lib/metrika.ts.
  // ssr:true из исходного сниппета не нужен: это флаг для SSR-сайтов.
  window.ym(111460043, 'init', {
    defer: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    accurateTrackBounce: true,
    trackLinks: true,
  });
})();
