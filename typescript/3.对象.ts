//Object
let obj: object = {};
obj = undefined;
obj = null;
obj = [];
obj = new String();
obj = String; //这会被允许，因为 String 是一个对象（构造函数），符合 object 类型的宽泛定义

let obj1: { [key: string]: any } = {}; // 使用更加具体的类型定义
obj1 = { a: 1, b: "2", c: true };
