function verificarTipo(valor: string | number) {
    if (typeof valor === "string") {
        console.log("É uma string:", valor)
    } else {
        console.log("É um numero:", valor)
    }
}

verificarTipo("Teste")
verificarTipo(123)