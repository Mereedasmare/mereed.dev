document.documentElement.classList.add("js-ready");

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
const revealAll = () => revealNodes.forEach((node) => node.classList.add("visible"));

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
    { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
  );

  revealNodes.forEach((node) => observer.observe(node));
  window.setTimeout(revealAll, 1400);
} else {
  revealAll();
}
