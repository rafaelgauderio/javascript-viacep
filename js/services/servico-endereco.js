
import * as servicoRequisicao from './servico-requisicao.js';
import Endereco from '../models/endereco.js';


export async function buscaPorCep (cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resultado = await servicoRequisicao.getJson(url);
    // instanciando um objeto Endereco com os dados pegos do objeto via API
    // numero vai ser null e cidade vai ser localidade
    let endereco = new Endereco (resultado.cep, resultado.logradouro, null, resultado.localidade);
    return endereco;
}

//função para validar um endereço.
export function getErros(endereco) {
    // instancia um vetor vazia a vai adicionando erros a ela. depois retorna esse vetor
    const erros = {};
    if (!endereco.cep || endereco.cep =="") {
        erros.cep = "Campo obrigatório";
    } 
    if (!endereco.numero || endereco.numero == "") {
        erros.numero = "Campo obrigatório";
    }

    return erros;
}
