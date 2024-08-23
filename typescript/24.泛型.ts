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
function getArr<T>(value: T, count: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }
  return arr;
}
console.log(getArr(123, 3));

function updateArr<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(updateArr([123, "123"]));

/* 
      泛型约束（Generic Constraints）
      允许你限制泛型参数的类型，使其必须符合某些条件或实现某些接口。
*/

//1. 基本泛型约束
//你可以使用 extends 关键字来约束泛型参数，指定它必须继承自某个类型或实现某个接口。这确保了泛型参数符合特定的结构或拥有特定的方法。
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

logLength({ length: 10, value: "test" }); // 正确，因为对象具有 length 属性
// logLength(123); // 错误，因为 number 类型没有 length 属性

/* 
    keyof 操作符
    用于获取一个类型的所有键的联合类型。它通常与泛型一起使用，以便在类型安全的上下文中访问对象的属性
*/
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person5 = {
  name: "Alice",
  age: 30,
};

const personName = getProperty(person5, "name"); // 类型是 string
const personAge = getProperty(person5, "age"); // 类型是 number

//泛型接口
interface IArr {
  <T>(value: T, count: number): Array<T>;
}

let getArr1: IArr = function <T>(value: T, count: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }
  return arr;
};

//T 是泛型参数，表示接口 InterfaceName 中的属性 property 和方法 method 使用了泛型类型 T。具体的类型将在实现接口或使用接口时确定
interface InterfaceName<T> {
  property: T;
  method(arg: T): T;
}

//定义一个简单的泛型接口：
/* 
  Box<T> 是一个泛型接口，T 是类型参数。
  stringBox 实现了 Box<string>，所以 content 的类型是 string。
  numberBox 实现了 Box<number>，所以 content 的类型是 numb
*/
interface Box<T> {
  content: T;
  getContent(): T;
}

const stringBox: Box<string> = {
  content: "Hello",
  getContent() {
    return this.content;
  },
};

const numberBox: Box<number> = {
  content: 42,
  getContent() {
    return this.content;
  },
};
