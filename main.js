function tocaSom (idElementoAudio)
document.querySelector(idElementoAudio).play;

const listadeteclas = document.querySelectorAll ("teclas");

let contador = 0;
while (contador<listadeteclas.lenght) {
const efeito = listadeteclas [contador].classList[1];
const audio = "#som"+efeito;
listadeteclas(contador).onclick = function(){
    tocaSom(idAudio);
}
contador = contador +1
console.log(contador);

}
