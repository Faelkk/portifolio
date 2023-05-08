import constantesJs from "./consts.js";
export function handleNavLinkClick(event, projetoBtn, scroll) {
  event.preventDefault();
  const btnNav = event.target;
  const href = btnNav.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  if (!constantesJs.aside.classList.contains("active")) {
    if (btnNav === projetoBtn) {
      scroll({
        top: offsetTop + 30,
        behavior: "smooth",
      });
    } else {
      scroll({
        top: offsetTop - 10,
        behavior: "smooth",
      });
    }
  }
}
