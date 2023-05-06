export function closeMenu() {
  const allAsides = document.querySelectorAll(".ul-itens-aside li a");
  const body = document.querySelector("body");
  const asideBtn = document.getElementById("aside");
  const menuIcon = document.querySelector(".menuIcon");
  allAsides.forEach((aside) => {
    aside.addEventListener("click", () => {
      asideBtn.classList.remove("active");
      body.style.overflowY = "auto";
      menuIcon.classList.remove("active");
    });
  });
}
