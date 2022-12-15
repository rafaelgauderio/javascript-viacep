// criando um exceção personalizada
export default function RequestException(mensagem) {
    let erro = new Error(mensagem);
    return erro;
}

RequestException.prototype = Object.create(Error.prototype);