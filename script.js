const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const pulo = () => {
  sonic.classList.add("pulo");
  sonic.src = "./pasta/Sonic-pulando.gif";

  setTimeout(() => {
    sonic.classList.remove("pulo");
    sonic.src = "./pasta/Sonic.gif";
  }, 900);
};

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (eggmanPosition < 190 && eggmanPosition > 0 && sonicPosition < 300) {
    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;

    sonic.style.animation = "none";
    sonic.src = "./pasta/Sonic-Loss.gif";
    sonic.style.width = "400px";
    fundo.src = "./pasta/Gameover.png";
  }
}, 10);

document.addEventListener("click", pulo);
