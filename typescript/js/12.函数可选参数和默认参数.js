//在函数中参数也可像Interface的属性一样， 加一个问号 ， 变成可选参数
let getName = function (x, y) {
    return x + y;
};
console.log(getName("Tom", "Ford"));
console.log(getName("Tom"));
// 可选参数  必参不可放在可选参数之后
// let getName1 = function (x: string, y?: string, z: string): string {
//   return x + y;
// };
// 默认参数（设定默认值的参数）  可以放在可选参数之后但
let getName2 = function (x, y, z = "Boy") {
    return x + y + z;
};
console.log(getName2("Jerry")); // Jerry Undefined Boy
