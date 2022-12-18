function State () {
    this.secaoLista = null;
    this.botaoExcluir = null;
}

const state = new State();

export function init () {
    //state.secaoLista = document.querySelector("#secao-lista");
    state.secaoLista = document.getElementById("secao-lista");
    state.botaoExcluir = document.getElementsByClassName("botao-excluir-item");

    
    
}

export function adicionarCardnoHtml(endereco) {
    const card = criarCard(endereco);
    state.secaoLista.appendChild(card);
}
 
function criarCard (endereco) {

    let div = document.createElement("div");
    div.classList.add("card-item-lista");

    let h4Cidade = document.createElement("h4");
    h4Cidade.innerHTML = endereco.cidade;

    let linhaLogradouro = document.createElement("p");
    linhaLogradouro.classList.add("linha-logradouro");
    linhaLogradouro.innerHTML = endereco.logradouro + ", " + endereco.numero;

    let linhaCep = document.createElement('p');
    linhaCep.classList.add("linha-cep");
    linhaCep.innerHTML = endereco.cep;

    let botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add("botao");
    botaoExcluir.classList.add("botao-excluir-item");
    botaoExcluir.innerHTML = "excluir";

    //agora criando os elementos criados dentro do index.html
    div.appendChild(h4Cidade);
    div.appendChild(linhaLogradouro);
    div.appendChild(linhaCep);
    div.appendChild(botaoExcluir);

    return div;

}

export function removerCard () {

    state.botaoExcluir = document.getElementsId("botao-excluir-item"); 
    state.botaoExcluir.addEventListener('click',handleBotaoExcluirClick);
    const card = document.getElementById("secao-lista");
    card.remove();
}

function handleBotaoExcluirClick(evento) {
    evento.preventDefault();
    console.log("clicou em excluir");
}



