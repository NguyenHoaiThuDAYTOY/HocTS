type aType = number | string;
function addNumberOrString1(a: aType, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameter must be a number or string')
}
console.log('check: ', addNumberOrString1('Hoai', 'Thu'));