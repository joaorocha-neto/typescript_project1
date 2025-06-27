function combine(a: boolean, b: number): boolean | number {
    if (a) {
        return b * 2
    } else {
        return false
    }
}

console.log(combine(true, 5))
console.log(combine(false, 10))