import { closeMenu } from "./closeMobile.js";

export function scrollSuave() {
  const linksNav = document.querySelectorAll('.ul-itens li a[href^="#"]');
  const projetoBtn = document.querySelector(".a-projeto");
  linksNav.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;
      if (item === projetoBtn) {
        scroll({
          top: offsetTop + 30,
          behavior: "smooth",
        });
      } else
        scroll({
          top: offsetTop - 10,
          behavior: "smooth",
        });
    });
  });
}
