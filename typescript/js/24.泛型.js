/*
    泛型
    在定义函数，接口，或类的时候，不预先指定具体的类型，
    而在使用时再指定类型的特性


     泛型参数 <T> ：  是泛型参数的声明，它定义了一个占位符类型，可以在函数、类或接口中使用 ，可以为泛型参数指定默认类型。
     
     T ：是泛型参数在具体使用时的类型

  
    function wrapInArray<T = string>(arg: T): T[] {
      return [arg];
    }


*/
function getArr(value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(getArr(123, 3));
function updateArr(tuple) {
    return [tuple[1], tuple[0]];
}
console.log(updateArr([123, "123"]));
function logLength(arg) {
    console.log(arg.length);
}
logLength({ length: 10, value: "test" }); // 正确，因为对象具有 length 属性
// logLength(123); // 错误，因为 number 类型没有 length 属性
/*
    keyof 操作符
    用于获取一个类型的所有键的联合类型。它通常与泛型一起使用，以便在类型安全的上下文中访问对象的属性
*/
function getProperty(obj, key) {
    return obj[key];
}
const person5 = {
    name: "Alice",
    age: 30,
};
const personName = getProperty(person5, "name"); // 类型是 string
const personAge = getProperty(person5, "age"); // 类型是 number
let getArr1 = function (value, count) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(value);
    }
    return arr;
};
const stringBox = {
    content: "Hello",
    getContent() {
        return this.content;
    },
};
const numberBox = {
    content: 42,
    getContent() {
        return this.content;
    },
};
