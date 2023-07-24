const sum4 = (a1: number, b1: number, c1?: number) => {
    if (c1) return a1 + b1 + c1;
    return a1 + b1;
}
console.log(sum4(1, 2), sum4(1, 2, 3))