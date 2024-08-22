//联合类型 表示类型可以为多种类型中的一种
let data: number | string | boolean = 123;
//只能访问此联合类型的所有类型里共有的属性或方法

data = true; // 再次赋值，会让TS走类型推断，给变量定义一个类型，导致下面不能在布尔值类型的变量上使用split方法
// console.log(data.split(""));
