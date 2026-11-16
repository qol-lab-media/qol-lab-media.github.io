/* ============================================================
   QOL Lab — アクセス計測ローダー
   ------------------------------------------------------------
   使い方：下の GA_MEASUREMENT_ID に Google Analytics 4 の
   測定ID（G-から始まる12桁）を入れるだけで、このスクリプトを
   読み込んでいる全ページの計測がその瞬間から始まります。
   ID が空のあいだは、外部への通信も送信も一切行いません。
   （読み込み時にエラーも出ません）
   ============================================================ */
(function () {
  'use strict';

  var GA_MEASUREMENT_ID = '';

  if (!GA_MEASUREMENT_ID) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true
  });
})();
