/* All Yoga Training — Bali
   Mobile navigation toggle + anchor close. No dependencies. */
(function () {
  'use strict';

  var header = document.querySelector('.header-inner');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!header || !toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (link && link.getAttribute('href').charAt(0) === '#') setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) setOpen(false);
  });
})();
