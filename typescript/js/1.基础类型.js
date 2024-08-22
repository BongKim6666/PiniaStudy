let num = 10;
num = 11;
function abc(a) {
    console.log(a);
}
abc("123");
//类型声明 指定ts变量（参数，形参）的类型 ts编译器，自动检查
//Boolean
let flag = false;
flag = true;
//Number
let a = 0;
a = 123;
//String
let str = "Hello World";
str = "";
//Undefined && null 用的不多， 还可以作为其他类型的子类型
let u = undefined;
let n = null;
//还可以作为其他类型的子类型(没开启严格模式的情况下oK！）
let b = undefined;
let c = null;
//但是在tsconfig.json中如果开启了严格模式，就应该按找这个来写
let b1 = undefined; // 允许 b 是 number 或 undefined
let c1 = null; // 允许 c 是 number 或 null
console.log(b1);
console.log(c1);
