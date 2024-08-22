let num: number = 10;
num = 11;

function abc(a: string) {
  console.log(a);
}
abc("123");

//类型声明 指定ts变量（参数，形参）的类型 ts编译器，自动检查

//Boolean
let flag: boolean = false;
flag = true;

//Number
let a: number = 0;
a = 123;

//String
let str: string = "Hello World";
str = "";

//Undefined && null 用的不多， 还可以作为其他类型的子类型
let u: undefined = undefined;
let n: null = null;

//还可以作为其他类型的子类型(没开启严格模式的情况下oK！）
let b: number = undefined;
let c: number = null;

//但是在tsconfig.json中如果开启了严格模式，就应该按找这个来写
let b1: number | undefined = undefined; // 允许 b 是 number 或 undefined
let c1: number | null = null; // 允许 c 是 number 或 null
console.log(b1);
console.log(c1);
