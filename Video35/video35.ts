class Data1 {
    protected name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Data2 extends Data1 {
    address: string;
    constructor(name: string, age: number, address: string) {
        super(name, age);
        this.address = address;
    }
}
let newData1 = new Data2('name', 2, 'address');
// newData1.name = 'Thu';