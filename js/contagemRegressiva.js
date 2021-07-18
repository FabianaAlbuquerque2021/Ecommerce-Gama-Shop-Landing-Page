import Countdown from "./countdown.js";

const tempoParaContagem = new Countdown("9 August 2021 20:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaContagem.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);