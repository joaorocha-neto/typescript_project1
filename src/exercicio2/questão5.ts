type StatusPedido = "pendente" | "processando" | "concluido" | "cancelado"

interface Produto {
    id: number
    nome: string
    preco: number 
}

const ferrari: Produto = {
    id: 101,
    nome: "Carro Esportivo",
    preco: 20000.00 
};


enum PrioridadeEnvio {
    baixa = 1,
    media = 2,
    alta = 3
}

function exibirDetalhesPedido(produto: Produto, status: StatusPedido, prioridade: PrioridadeEnvio) {
    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
    console.log(`Status do pedido: ${status}`);
    console.log(`Nível de envio: ${PrioridadeEnvio[prioridade]}`);

}

exibirDetalhesPedido(ferrari, "processando", PrioridadeEnvio.media)