/* Deepvine.AI — shared site behaviour */
(function () {
  'use strict';

  /* Mobile nav ---------------------------------------------------------- */
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav__burger');
  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  /* Dropdowns (click for touch / keyboard; hover handled in CSS) ---------- */
  document.querySelectorAll('.has-drop > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var li = btn.parentElement;
      var open = li.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.has-drop.is-open').forEach(function (li) {
      li.classList.remove('is-open');
      var b = li.querySelector('button'); if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  /* Click-to-load video (YouTube loads only after the visitor presses play) */
  document.querySelectorAll('.video__frame[data-video]').forEach(function (frame) {
    var btn = frame.querySelector('.video__play');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var id = frame.getAttribute('data-video');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
      iframe.title = frame.getAttribute('data-title') || 'Video';
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      frame.innerHTML = '';
      frame.appendChild(iframe);
    });
  });
})();
