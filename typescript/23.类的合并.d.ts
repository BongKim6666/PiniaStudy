/* 
        类的合并

        通常发生在声明文件（.d.ts 文件）中。对于普通的 TypeScript 代码文件，类的合并是不支持的。


        限制
        必须在同一作用域: 同名类的合并必须发生在相同的作用域中。这意味着它们必须在同一文件或相同的模块中。
        不同的文件: 如果类定义在不同的文件中，TypeScript 不会自动将它们合并，除非它们在同一个模块作用域中被声明。

*/
// 类的第一部分
class Person4 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// 类的第二部分
class Person4 {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// 使用合并后的类
const person = new Person4("Alice", 30);
person.greet(); // 输出: Hello, my name is Alice and I am 30 years old.
