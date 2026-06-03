const botao = document.getElementById("saibaMais");

botao.addEventListener("click", () => {
    document
    .getElementById("sobre")
    .scrollIntoView({
        behavior:"smooth"
    });
});

let numero = 0;
const contador = document.getElementById("contadorNumero");

const animacao = setInterval(() => {

    numero += 50;

    contador.textContent =
    numero.toLocaleString();

    if(numero >= 5000){
        clearInterval(animacao);
    }

}, 20);

const formulario =
document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso! 🌱"
    );

    formulario.reset();
});