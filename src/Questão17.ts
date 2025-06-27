function obterComprimento(valor: string | string[]): number {
    if (typeof valor === "string") {
        return valor.length
    } else {
        let total = 0
        for (let i = 0; i < valor.length; i++) {
            total += valor[i].length
        }
        return total
    }
}

console.log("Comprimento:", obterComprimento("Texto"))
console.log("Soma dos comprimentos:", obterComprimento(["um", "dois", "três"]))
