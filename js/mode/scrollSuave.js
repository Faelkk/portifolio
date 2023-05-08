import { handleNavLinkClick } from "./scrollSuaveImport.js";

export function scrollSuave() {
  const linksNav = document.querySelectorAll('.ul-itens li a[href^="#"]');
  const projetoBtn = document.querySelector(".a-projeto");

  linksNav.forEach((item) => {
    item.addEventListener("click", (event) =>
      handleNavLinkClick(event, projetoBtn, window.scroll)
    );
  });
}
