//剩余参数
function fn3(x, y, ...args) {
    console.log(...args);
}
fn3("1", "2", 1, 2, 3, 4, 5);
function reverse(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
    else {
        return;
    }
}
