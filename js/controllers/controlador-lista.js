function State () {
    this.secaoLista = null;
}

const state = new State();

export function init () {
    //state.secaoLista = document.querySelector("#secao-lista");
    state.secaoLista = document.getElementById("secao-lista");
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

    //agora criando os elementos criados dentro do index.html
    div.appendChild(h4Cidade);
    div.appendChild(linhaLogradouro);
    div.appendChild(linhaCep);

    return div;

}



