// Small enhancements: current year + reveal-on-scroll.
document.getElementById('year').textContent = new Date().getFullYear();

const items = document.querySelectorAll('.card, .timeline li, .skills > div, .edu');
if ('IntersectionObserver' in window) {
  items.forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  items.forEach((el) => io.observe(el));
}
