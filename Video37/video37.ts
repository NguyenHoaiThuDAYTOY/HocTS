class Data4 {
    private _name: string;
    age: number;
    constructor(_name: string, age: number) {
        this._name = _name;
        this.age = age;
    }
    //getter
    get name(): string {
        return this._name;
    }
    //setter
    set name(name: string) {
        this._name = name;
    }
}
let newData4 = new Data4('namebase', 2);
let checkName = newData4.name; //getter
newData4.name = 'Thu';//getter
console.log(newData4)