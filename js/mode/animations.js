import animaTexto from "./typeWritter.js";
import constantesJs from "./consts.js";
export function animationJs() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const addActiveClass = () => {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        };

        setTimeout(addActiveClass, 0);
      }
    });
  });

  constantesJs.sections.forEach((section) => {
    observer.observe(section);
  });

  window.addEventListener("DOMContentLoaded", () => {
    constantesJs.nav.classList.add("active");
    constantesJs.sectionInicio.classList.add("active");
    constantesJs.body.style.overflowX = "hidden";

    setTimeout(() => {
      animaTexto();
    }, 570);
  });
}
