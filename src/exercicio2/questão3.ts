function gerarSaudacao(pessoa: {primeiroNome: string, ultimoNome?: string}) {

    if  (pessoa.ultimoNome) {
        console.log("olá " + pessoa.primeiroNome + pessoa.ultimoNome)
    }
    else {
        console.log("Olá " + pessoa.primeiroNome)
    }
}

gerarSaudacao({ primeiroNome: "João", ultimoNome: "Neto" })
gerarSaudacao({primeiroNome: "joão"})

