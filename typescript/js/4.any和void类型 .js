//any 表示任何类型
let h = 123;
h = "abc";
h = true;
let newArr = [1, 2, 3, "", null];
//void 表示空值  没有返回值的函数
function fn() {
    console.log("Hello World");
}
//void vs never：void 表示函数可能不返回值，而 never 表示函数不会返回且会抛出错误或无限循环。
function throwError() {
    throw new Error("Something went wrong!");
}
function infiniteLoop() {
    while (true) { }
}
