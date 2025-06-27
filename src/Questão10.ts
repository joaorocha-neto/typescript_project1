let result: string | number = "Ola"

function mostrarTipo(valor: string | number | boolean) {
    console.log(typeof valor)
}

mostrarTipo("Texto")
mostrarTipo(10)
mostrarTipo(true)