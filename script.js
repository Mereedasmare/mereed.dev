const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const page = document.body.dataset.page;

if (page) {
  const activeLink = document.querySelector(`[data-nav="${page}"]`);

  if (activeLink) {
    activeLink.classList.add("is-active");
    activeLink.setAttribute("aria-current", "page");
  }
}

const revealNodes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("visible"));
}
