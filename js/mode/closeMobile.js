import constantesJs from "./consts.js";
export function closeMenu() {
  constantesJs.allAsides.forEach((aside) => {
    aside.addEventListener("click", () => {
      constantesJs.asideBtn.classList.remove("active");
      constantesJs.body.style.overflowY = "auto";
      constantesJs.menuIcon.classList.remove("active");
    });
  });
}
