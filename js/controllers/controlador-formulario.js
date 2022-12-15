// controladores em MCV são os módulos, componentes que tratam os eventos do usuário

import Endereco from '../models/endereco.js';

//função construtora
function State () {
    
    this.botaoSalvar = null;
    this.botaoLimpar = null;

    this.inputCep= null;
    this.inputLogradouro = null;
    this.inputNumero = null;
    this.inputCidade = null;

    this.erroCep = null;
    this.erroNumero = null;

    this.endereco = new Endereco ();
}

// instanciando um objeto State
const state = new State();




export function init() {

    // função responsável por iniciar o controlador

    //inputs
    state.inputCep = document.forms.enderecoNovo.cep;
    state.inputLogradouro = document.forms.enderecoNovo.logradouro;
    state.inputNumero = document.forms.enderecoNovo.numero;
    state.inputCidade = document.forms.enderecoNovo.cidade;

    //botoes
    state.botaoSalvar = document.forms.enderecoNovo.botaoSalvar;
    state.botaoLimpar = document.forms.enderecoNovo.botaoLimpar;

    //erros
    state.erroCep = document.querySelector('[data-erro="cep"]');
    state.erroNumero = document.querySelector('[data-erro="numero"]');

   // console.log(state);

   //setErroFormulario("cep", "testando mensagem de erro do campo cep");
   //setErroFormulario("numero", "testando mesagem de erro do campo numero");
   state.inputNumero.addEventListener('change', handleInputNumeroChange);
   state.botaoLimpar.addEventListener('click',handleBotaoLimparClick);

}

function handleInputNumeroChange(evento) {
    //se o conteúdo do campo estiver string vazia colocar a mensagem de erro de campo requerido
    if(evento.target.value == "") {
        setErroFormulario("numero","Campo requerido");
    } 
    else {
    //se o campo estiver preenchido não faz nada
        setErroFormulario("numero","")
    }

}

function limparFormulario () {
    state.inputCep.value = "";
    state.inputLogradouro.value = "";
    state.inputNumero.value = "";
    state.inputCidade.value = "";

    setErroFormulario("cep","");
    setErroFormulario("numero","");

    //jogar o cursos para o campo cep
    state.inputCep.focus();

}

function handleBotaoLimparClick(evento) {
    // para evitar que o formulario seja enviado e chame outra pagina
    evento.preventDefault();
    limparFormulario();
}

function setErroFormulario (chave, valor) {
    //verifica se o armento passado como chave é um cep ou um numero
    const elemento = document.querySelector(`[data-erro=${chave}]`);
    // cria o elemento de campo requerido no campo em branco
    elemento.innerHTML = valor;
    
}
