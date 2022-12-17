function State () {

    this.container = null;
    this.botaoFechar = null;
}

const state = new State ();

export function iniciar () {
    state.container = document.getElementById("contato-modal");
    state.botaoFechar = document.getElementById("fechar-caixa-modal");

    state.botaoFechar.addEventListener('click',handleBotaoFecharClick);
    state.container.addEventListener('click',handleContainerClick);
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

function handleContainerClick(evento) {
    evento.preventDefault();
    if (evento.target ===this) {
        fecharModal();
    }
    console.log(evento.target);
    console.log(this);
    //this referência ao elemento onde foi escrito o evento. no caso foi ao container(section)
}


