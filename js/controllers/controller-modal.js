function State () {

    this.container = null;
    this.botaoFechar = null;
}

const state = new State ();

export function iniciar () {
    state.container = document.getElementById("contato-modal");
    state.botaoFechar = document.getElementById("fechar-caixa-modal");

    state.botaoFechar.addEventListener('click',handleBotaoFecharClick);
}

export function mostrarModal () {
    state.container.classList.add("active");
}

export function fecharModal () {
    state.container.classList.remove("active");
}

function handleBotaoFecharClick (evento) {
    evento.preventDefault();
    fecharModal();
}
