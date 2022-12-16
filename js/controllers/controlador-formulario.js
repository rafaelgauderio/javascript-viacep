// controladores em MCV são os módulos, componentes que tratam os eventos do usuário

//import * as requisicaoServico from '../services/servico-requisicao.js'
import * as servicoEndereco from '../services/servico-endereco.js'
import Endereco from '../models/endereco.js';

//função construtora
function State() {

    this.botaoSalvar = null;
    this.botaoLimpar = null;

    this.inputCep = null;
    this.inputLogradouro = null;
    this.inputNumero = null;
    this.inputCidade = null;

    this.erroCep = null;
    this.erroNumero = null;

    this.endereco = new Endereco();
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
    state.inputNumero.addEventListener('keyup',handleInputNumeroKeyup);
    state.botaoLimpar.addEventListener('click', handleBotaoLimparClick);
    state.botaoSalvar.addEventListener('click', handleBotaoSalvarClick);
    state.inputCep.addEventListener('change', handleInputCepChange);

    //requisicaoServico.getJson('https://viacep.com.br/ws/90245000/json/');

}

function handleInputNumeroKeyup (evento) {
    // vai armazenar o valor digitado do objeto endereço do tipo Endereço 
    // quando for digitado no campo numero
    state.endereco.number = evento.target.value;

}

function handleInputNumeroChange(evento) {
    //se o conteúdo do campo estiver string vazia colocar a mensagem de erro de campo requerido
    if (evento.target.value == "") {
        setErroFormulario("numero", "Campo requerido");
    }
    else {
        //se o campo estiver preenchido não faz nada
        setErroFormulario("numero", "")
    }

}

function limparFormulario() {
    state.inputCep.value = "";
    state.inputLogradouro.value = "";
    state.inputNumero.value = "";
    state.inputCidade.value = "";

    setErroFormulario("cep", "");
    setErroFormulario("numero", "");

    //jogar o cursos para o campo cep
    state.inputCep.focus();

}

function handleBotaoLimparClick(evento) {
    // para evitar que o formulario seja enviado e chame outra pagina
    evento.preventDefault();
    limparFormulario();
}

async function handleBotaoSalvarClick(evento) {
    evento.preventDefault();
    //const resultado = await requisicaoServico.getJson('https://viacep.com.br/ws/90245000/json/');
    //console.log(resultado);
    console.log(state.endereco);
}

async function handleInputCepChange(evento) {
    const cep = evento.target.value;

    try {
        // fazer a requisição quando houver modificação no input do cep
        // modificado await só pode ser usado em função assincrona
        const endereco = await servicoEndereco.buscaPorCep(cep);

        // jogando oo campos logradouro e cidade para o formulario
        state.inputLogradouro.value = endereco.logradouro;
        state.inputCidade.value = endereco.cidade;
        state.endereco = endereco;

        //retirar a mensagem de erro de tivesse digitado um dep errado e jogar o foco pro input numero
        setErroFormulario("cep", "");
        state.inputNumero.focus();
        //console.log(endereco);  

    } catch (erro) {
        state.inputLogradouro.value = "";
        state.inputCidade.value = "";
        setErroFormulario("cep", "Cep inválido. Informe um cep correto!");
        state.inputCep.focus();       
    }    
}



function setErroFormulario(chave, valor) {
    //verifica se o armento passado como chave é um cep ou um numero
    const elemento = document.querySelector(`[data-erro=${chave}]`);
    // cria o elemento de campo requerido no campo em branco
    elemento.innerHTML = valor;

}
