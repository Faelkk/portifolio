import { handleNavLinkClick } from "./scrollSuaveImport.js";

export function menuMobile() {
  const menuIcon = document.querySelector(".menuIcon");
  const aside = document.getElementById("aside");
  const btnMobile = document.getElementById("close");
  const body = document.querySelector("body");
  const allLinks = document.querySelectorAll('a[href^="#"]');
  const projetoBtn = document.querySelector(".a-projeto");

  menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    menuIcon.classList.toggle("active");
    aside.classList.toggle("active");

    body.style.overflowY = "hidden";
    aside.style.overflowY = "hidden";

    allLinks.forEach((btnNav) => {
      btnNav.addEventListener("click", (event) =>
        handleNavLinkClick(event, projetoBtn, window.scroll)
      );
    });
  });

  btnMobile.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    aside.classList.toggle("active");
    aside.style.transition = "all .5s ease-in-out";
    body.style.overflowY = "auto";
  });
}
