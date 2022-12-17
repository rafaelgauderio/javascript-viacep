import * as controladorModal from './controller-modal.js';

export function iniciar () {

    const linkContato = document.querySelector(".link-contato");
    linkContato.addEventListener('click', handleLinkContatoCLick);
}

function handleLinkContatoCLick (evento) {
    evento.preventDefault();
    controladorModal.mostrarModal();
}