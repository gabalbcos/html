const botao = document.querySelector("[data-tipo=botao]");
const lista = document.querySelectorAll("li.item");

    botao.addEventListener('click', escondeLista)

function escondeLista(){
lista.forEach( (li) => {
            li.classList.toggle('hidden')
    })};