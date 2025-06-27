function Impar(valor: number): boolean {
    if (typeof valor === "number") {
        return valor % 2 !== 0
    }
    return false
}

console.log("É impar?", Impar(5))
console.log("É impar?", Impar(8))
