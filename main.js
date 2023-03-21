'use strict';
{
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
    });
  }
  const targets = document.querySelectorAll('main section');
  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  targets.forEach(target => {
    observer.observe(target);
  });
}