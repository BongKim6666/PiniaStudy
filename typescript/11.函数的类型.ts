//js
// function add(a, b) {
//   return a + b;
// }

// let add2 = function (a, b) {
//   return a + b;
// };

//ts
function add(a: number, b: number): number {
  return a + b;
}
//(a: number, b: number) => number 来定义这个函数的完整类型
let add3: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b;
};
