import { handleNavLinkClick } from "./scrollSuaveImport.js";
import constantesJs from "./consts.js";

export function menuMobile() {
  constantesJs.menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    constantesJs.menuIcon.classList.toggle("active");
    constantesJs.aside.classList.toggle("active");

    constantesJs.body.style.overflowY = "hidden";
    constantesJs.aside.style.overflowY = "hidden";

    constantesJs.allLinks.forEach((btnNav) => {
      btnNav.addEventListener("click", (event) =>
        handleNavLinkClick(event, constantesJs.projetoBtn, window.scroll)
      );
    });
  });

  constantesJs.btnMobile.addEventListener("click", () => {
    constantesJs.menuIcon.classList.toggle("active");
    constantesJs.aside.classList.toggle("active");
    constantesJs.body.style.overflowY = "auto";
  });
}
