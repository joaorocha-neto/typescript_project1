let misto: (number | string)[] = [1, "dois", 3, "quatro"]

let primeiroNumero = misto[0] as number
let primeiraString = misto[1] as string

console.log("Numero:", primeiroNumero)
console.log("String:", primeiraString)

let boolValor = (<unknown>true) as boolean
console.log("Booleano:", boolValor)