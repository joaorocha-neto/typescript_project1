class Carro{
    private velocidade: number = 0;

    acelerar() {
        this.velocidade += 10;
    }

    frear() {
        this.velocidade -= 5;
    }

    exibirVelocidade() {
        console.log(`a velcidade atual é ${this.velocidade} km/h`);
    }
}

const meuCarro = new Carro();
meuCarro.acelerar();
meuCarro.exibirVelocidade();