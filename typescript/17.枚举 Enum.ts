//枚举 Enum 类型用于取值被限定在一定范围内的场景 ， 比如一周只有7天， 颜色限定为红绿蓝等。
//可以通过名称拿取值， 通过值去拿取名称
enum Days {
  Sun,
  Mon,
  Tue,
  Wec,
  Thu,
  Fri,
  Sat,
}

//枚举成员会被赋值为从0开始递增的数字， 同时也会对枚举值到枚举名进行反向映射
console.log(Days.Sun === 0); // 0
console.log(Days[0] === "Sun"); // Sun

//如果像下面的例子中一样， 赋值给其中的一个元素，该元素后续的全部元素， 都会默认+1 ,
enum NumberType {
  one, //显示0   ， 没有给第一个参数赋值的话， 它默认为0
  two = 3, //显示3
  three, //显示4
  four, //显示5
}

console.log(NumberType.one);
console.log(NumberType.two);
console.log(NumberType.three);
console.log(NumberType.four);

//枚举项有两种类型 常数项（constant member） 和计算所得项（computed member）
//常数项是在编译时就可以确定其值的成员。
//计算所得项是基于计算结果赋值的成员

// 计算所得项后面不能放置没有赋值的枚举项
enum Color {
  red,
  blue = "blue".length, //计算所得项
  // green, // 比如在上面我们要计算 blue.length的值，但是下面的green就要初始化，就会报错
}

//常数枚举  是使用const enum定义的枚举类型
// 常数枚举和普通枚举的区别是， 它会在编译阶段被删除， 并且不能包含计算成员

//const enum 的生成行为
//常量值的直接替换：在编译时，const enum 的成员会被直接替换为它们的常量值。这意味着常数枚举不会在编译后的 JavaScript 文件中生成任何对象或映射，只有直接的常量值。
//不生成默认值对象：const enum 不会生成一个枚举对象或任何默认值。编译后的 JavaScript 代码中只会包含直接的常量值，而不会有与枚举相关的对象或代码。
const enum Directions {
  Up,
  Down,
  Left,
  Right,
  // blue = "blue".length, // 包含计算成员就会报错
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

//外部枚举 （Ambient Enums）是使用declare enum定义的枚举类型
// 只会用于编译时的检查， 编译结果中会被删除
//适用于需要表示一组固定的常量值，并且希望在 TypeScript 中提供类型安全和代码的可读性。
//在声明文件中使用外部枚举可以与现有的 JavaScript 代码库或第三方库中的枚举进行集成。

//declare 关键字用于在 TypeScript 中声明一个变量、类、函数或其他类型的存在，而不提供实际的实现。这通常用于声明文件（.d.ts 文件）中，
//以告知 TypeScript 编译器某个实体在其他地方已经定义好了。
//它主要用于提供类型信息和确保 TypeScript 编译器了解这些实体的类型，但不会生成任何实际的代码。

declare enum ABC {
  a,
  b,
  c,
}

//declare和const 一起用也是可以的
//常数枚举只能使用常量表达式（即在编译时可以确定的值）来初始化其成员。它们不能包含计算所得的值，也不能引用其他的非 const 枚举或变量。
declare const enum XYZ {
  x,
  y,
  z,
}

//总结
//declare：用于在 TypeScript 中声明一个变量、函数、类等的存在和类型，但不提供实现。它主要用于类型声明文件（.d.ts）中。
//const enum：用于定义一个常数枚举，其值在编译时完全确定。编译器会将常数枚举的成员值直接嵌入到代码中，从而减少运行时的开销和生成的 JavaScript 代码体积。
//declare const enum：用于声明现有常数枚举的类型，以便 TypeScript 可以识别它，但不会生成实际的 JavaScript 代码。这在与现有 JavaScript 代码库集成时非常有用，特别是当这些库使用了常数枚举时。
