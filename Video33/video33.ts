function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
    return a + b;
};
console.log('check add: ', add(1, 2), add('Hoai', 'Thu'))