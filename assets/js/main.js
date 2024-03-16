window.sokai = window.sokai || {};
window.sokai.main = {
  scrollSnap: () => {
    const options = {
      root: null,
      rootMargin: "0px 0px",
      threshold: [0.3, 0.9],
    };

    const topSection = document.getElementById("js-topSection");
    const viewportHeight = window.innerHeight;
    const topSectionObserver = new IntersectionObserver(([entry]) => {
      const scrollY = window.scrollY;
      if (entry.isIntersecting) {
        if (scrollY > (viewportHeight * 50) / 100) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else if (scrollY > (viewportHeight * 10) / 100) {
          window.scrollTo({
            top: viewportHeight,
            behavior: "smooth",
          });
        }
      }
    }, options);

    topSectionObserver.observe(topSection);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  window.sokai.main.scrollSnap();
});
