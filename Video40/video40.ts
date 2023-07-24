abstract class Employee {
    constructor(private name: string, private age: number) {
    }
    //abstract method
    abstract getSalary(): number;
    //normal method
    getName() {
        return this.name
    }
}
class DataEmployee extends Employee {
    constructor(name: string, age: number, private salary: number) {
        super(name, age)
    }
    getSalary(): number {
        return this.salary;
    }
}

const dataEmployee = new DataEmployee('Thu', 22, 2000);
console.log('check salary', dataEmployee.getSalary())