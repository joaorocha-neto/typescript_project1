

function processarDados(nome: string, idades: number[]) {
    let soma = 0
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i]
    }

    console.log("Olá " + nome.toUpperCase());
    console.log(`A soma das idades: ${soma}`)


    if ((idades[0]) % 2 == 0) {
        console.log("A primeira idade é par.")
    }
     
    else {
        console.log("A primeira idade é ímpar.")
    }
    
}

processarDados("joão", [25, 30, 22])



     