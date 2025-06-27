let numeros: number[] = [10, 20, 30]
numeros.push(40)
console.log(numeros)

numeros.pop()
console.log(numeros)

numeros.forEach(function (n) {
    console.log("Numero:", n)
})