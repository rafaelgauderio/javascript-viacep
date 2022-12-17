import * as controladorFormulario from './controllers/controlador-formulario.js';
import * as controladorLista from './controllers/controlador-lista.js';
import * as controladorModal from './controllers/controller-modal.js';
import * as controladorPagina from './controllers/controller-pagina.js';

controladorModal.iniciar();
controladorPagina.iniciar();
controladorFormulario.init();
controladorLista.init();


