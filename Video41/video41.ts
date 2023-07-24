interface IData {
    name: string,
    age: number
}
function getData(data: IData) {
    return `${data.name} ${data.age}`;
}
let data = { name: 'Thu', age: 22 };
console.log(getData(data))
