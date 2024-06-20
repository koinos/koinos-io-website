export function animate(container) {
  const elements = container.querySelectorAll(".fadeInUp, .fadeInDown, .fadeInLeft, .fadeInRight");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        // check and reapply the correct class to trigger the animation
        if (target.classList.contains('fadeInUp')) {
          target.classList.remove('animated', 'fadeInUp');
          void target.offsetWidth; // trigger reflow
          target.classList.add('animated', 'fadeInUp');
        } else if (target.classList.contains('fadeInDown')) {
          target.classList.remove('animated', 'fadeInDown');
          void target.offsetWidth; // trigger reflow
          target.classList.add('animated', 'fadeInDown');
        } else if (target.classList.contains('fadeInLeft')) {
          target.classList.remove('animated', 'fadeInLeft');
          void target.offsetWidth; // trigger reflow
          target.classList.add('animated', 'fadeInLeft');
        } else if (target.classList.contains('fadeInRight')) {
          target.classList.remove('animated', 'fadeInRight');
          void target.offsetWidth; // trigger reflow
          target.classList.add('animated', 'fadeInRight');
        }
        observer.unobserve(target);
      }
    });
  }, {
    rootMargin: '0px 0px 0px 0px', // adjust as needed
    threshold: 0 // adjust as needed (0% visible triggers animation)
  });

  elements.forEach(element => observer.observe(element));
}