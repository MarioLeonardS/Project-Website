// Get Element
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("value");

  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        let startValue = 0;
        const endValue = parseInt(el.dataset.value);
        const duration = Math.floor(10 / endValue);

        const counter = setInterval(() => {
          startValue++;
          el.textContent = startValue;

          if (startValue >= endValue) {
            clearInterval(counter);
          }
        }, duration);

        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(el);
});
