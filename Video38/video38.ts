class Data5 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name
    }
}
class Data6 extends Data5 {
    address: string;
    constructor(name: string, age: number, address: string) {
        super(name, age); // kế thừa props từ lớp cha
        this.address = address;
    }
    getName() {
        return super.getName() + this.address
    }
}
let newDat5 = new Data6('Thu', 22, 'Ha Noi');
console.log(newDat5.getName())