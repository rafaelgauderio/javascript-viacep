// controladores em MCV são os módulos, componentes que tratam os eventos do usuário


//função construtora
function State () {
    this.botaoSalvar = null;
    this.botaoLimpar = null;

    this.inputCep= null;
    this.inputLogradouro = null;
    this.inputNumero = null;
    this.inputCity = null;

    this.erroCep = null;
    this.erroNumbero = null;
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
    state.botaoSalvar = document.forms.enderecoNovo.botaoLimpar;

    //erros
    state.erroCep = document.querySelector('[data-erro="cep"]');
    state.erroNumero = document.querySelector('[data-erro="numero"]');

    console.log(state);


}
