export function animate(container) {
    const elements = container.querySelectorAll(
      ".fadeInUp, .fadeInDown, .fadeInLeft, .fadeInRight"
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    });
  
    elements.forEach((element) => observer.observe(element));
  }