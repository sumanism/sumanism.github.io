const cards = document.querySelectorAll(".slide-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));

const skillBars = document.querySelectorAll(".bar div");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute("data-level");
        entry.target.style.width = level + "%";
      }
    });
  },
  { threshold: 0.4 }
);

skillBars.forEach(bar => skillObserver.observe(bar));
