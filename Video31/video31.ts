const sum6 = (a1: number, b1: number, c1 = false) => {
    if (c1 === false) return a1 + b1;
    if (c1) return a1 - b1;
}
console.log(sum6(6, 2), sum6(6, 2, true))