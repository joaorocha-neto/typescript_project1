function processarID(id: number | string) {

    if (typeof id == "string") {
        console.log(id.toLowerCase());
    }

    else {
        console.log(id * 2);
    }
    
}



const nomes = ["João", "Maria", "Lúcia"];

nomes.forEach (function (s) {
    console .log(s.toUpperCase());
})

processarID("DJJEFN")
processarID(100)
