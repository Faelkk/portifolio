export function menuMobile() {
  const menuIcon = document.querySelector(".menuIcon");
  const aside = document.getElementById("aside");
  const btnMobile = document.getElementById("close");
  const body = document.querySelector("body");
  console.log(body);
  menuIcon.addEventListener("click", (event) => {
    event.preventDefault();
    menuIcon.classList.toggle("active");
    aside.classList.toggle("active");
    body.style.overflowY = "hidden";
    aside.style.overflowY = "hidden";
  });
  btnMobile.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    aside.classList.toggle("active");
    body.style.overflowY = "auto";
  });
}
