interface Carro {
    marca: string
    modelo: string
}

type Onibus = {
    marca: string
    modelo: string
    capacidade: number
}

type Veiculo = Carro | Onibus

const meuVeiculo: Veiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    capacidade: 5
}