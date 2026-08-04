(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const year = document.querySelector('#year');
  const sections = [...document.querySelectorAll('main section[id]')];
  const navigation = [...document.querySelectorAll('.nav-links a')];

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open navigation');
  };

  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    navLinks?.classList.toggle('open', !expanded);
  });

  navigation.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 18);
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 190) current = section.id;
    });
    navigation.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px' });

    document.querySelectorAll('.reveal').forEach((el, index) => {
      el.style.transitionDelay = `${Math.min((index % 4) * 65, 195)}ms`;
      observer.observe(el);
    });
  }
})();
