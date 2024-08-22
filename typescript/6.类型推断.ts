//类型推断

let mango = "mango"; //虽然没有给变量指定具体的类型，但是TS会根据值的类型自动推断出变量的类型
// mango = 123; //字符串类型 赋值乘number就会报错

let apple; //这种没有为变量赋值的情况下 ，会根据TS的类型推断 把变量判断为any 类型
apple = "apple";
apple = true;
apple = 123;
