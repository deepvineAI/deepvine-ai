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

  /* Video modal ----------------------------------------------------------- */
  var modal = document.getElementById('video-modal');
  if (modal) {
    var frame = modal.querySelector('iframe');
    var src = frame.getAttribute('data-src');
    var openModal = function (e) { if (e) e.preventDefault(); frame.src = src; modal.classList.add('is-open'); document.body.style.overflow = 'hidden'; };
    var closeModal = function () { modal.classList.remove('is-open'); frame.src = ''; document.body.style.overflow = ''; };
    document.querySelectorAll('[data-open-video]').forEach(function (el) { el.addEventListener('click', openModal); });
    modal.querySelectorAll('[data-close-video]').forEach(function (el) { el.addEventListener('click', closeModal); });
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }
})();
