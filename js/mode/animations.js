import { animaTexto } from "./typeWritter.js";

export function animationJs() {
  let a;
  const nav = document.querySelector(".nav");
  const sectionInicio = document.querySelector(".section-inicio");
  const body = document.querySelector("body");
  window.addEventListener("DOMContentLoaded", () => {
    nav.classList.add("active");
    sectionInicio.classList.add("active");
    body.style.overflowX = "hidden";
    a = true;
  });
  setTimeout(() => {
    if (a === true) {
      animaTexto();
    }
  }, 570);
}
