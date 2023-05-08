export function animaTexto() {
  const texto = document.querySelector(".type-writter");
  const stringTexto = "Front-end Developer |";
  let index = 0;
  function typeText() {
    if (index < stringTexto.length) {
      texto.innerHTML += stringTexto.charAt(index);
      index++;
      setTimeout(typeText, 70);
    } else {
      clearTimeout(typeText);
    }
  }
  typeText();
}
