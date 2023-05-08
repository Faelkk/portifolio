import { handleNavLinkClick } from "./scrollSuaveImport.js";
import constantesJs from "./consts.js";
export function scrollSuave() {
  constantesJs.linksNav.forEach((item) => {
    item.addEventListener("click", (event) =>
      handleNavLinkClick(event, constantesJs.projetoBtn, window.scroll)
    );
  });
}
