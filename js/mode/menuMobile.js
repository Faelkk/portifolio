export function menuMobile() {
  const menuIcon = document.querySelector(".menuIcon");
  const aside = document.getElementById("aside");
  const btnMobile = document.getElementById("close");
  menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    menuIcon.classList.toggle("active");
    aside.classList.toggle("active");
  });
  btnMobile.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    aside.classList.toggle("active");
  });
}
