import constantesJs from "./consts.js";
export default function animaTexto() {
  let index = 0;
  function typeText() {
    if (constantesJs.index < constantesJs.stringTexto.length) {
      constantesJs.texto.innerHTML += stringTexto.charAt(index);
      constantesJs.index++;
      setTimeout(typeText, 70);
    } else {
      clearTimeout(typeText);
    }
  }
  typeText();
}
