import RequestException from "./exceptions/excecao-requisicao.js";

// funcao que faz a requisicao e retorna o corpo da resposta
export async function getJson(url) {
  try {
    const resposta = await fetch(url);
    // funcao json também é assincrona e retorna  uma promise
    const jsonBody = await resposta.json();
    return jsonBody;
  } catch (erro) {
    // uma requisicao com um cep inválido pode gerar um exceção
    throw new RequestException("Erro ao tentar realização requisição.")
  }
}
