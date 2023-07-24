class Data {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getData(): string {
        return `${this.name} ${this.age}`;
    }
}
let newData = new Data('Thu', 22);
console.log(newData.getData()); 