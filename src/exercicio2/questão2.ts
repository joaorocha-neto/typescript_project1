let dadosFlexiveis: any = "Olá TypeScript!"

console .log(dadosFlexiveis)
dadosFlexiveis = (123)
console .log(dadosFlexiveis)

function inferirTipo(valor: any) {
    console.log(typeof valor)
}

inferirTipo("joão")
inferirTipo(10)