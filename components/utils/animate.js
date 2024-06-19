export function animate(container) {
  const elements = container.querySelectorAll(
    ".fadeInUp, .fadeInDown, .fadeInLeft, .fadeInRight"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px", // adjust as needed
      threshold: 0.1, // adjust as needed (10% visible triggers animation)
    }
  );

  elements.forEach((element) => observer.observe(element));
}
