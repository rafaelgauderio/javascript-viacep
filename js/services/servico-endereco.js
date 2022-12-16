
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