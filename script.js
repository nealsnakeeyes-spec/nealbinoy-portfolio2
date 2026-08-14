const reveals = document.querySelectorAll('.section, .job, .skill-panel, .hero-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});
reveals.forEach((el) => { el.classList.add('reveal'); observer.observe(el); });
