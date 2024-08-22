//剩余参数
function fn3(x: string, y: string, ...args: number[]) {
  console.log(...args);
}

fn3("1", "2", 1, 2, 3, 4, 5);

//函数重载：函数名相同， 形参不同的多个函数

function reverse(x: string): string;
function reverse(x: number): number;
function reverse(x: string | number): string | number | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  } else {
    return;
  }
}
