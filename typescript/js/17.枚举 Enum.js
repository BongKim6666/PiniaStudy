//枚举 Enum 类型用于取值被限定在一定范围内的场景 ， 比如一周只有7天， 颜色限定为红绿蓝等。
//可以通过名称拿取值， 通过值去拿取名称
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wec"] = 3] = "Wec";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
//枚举成员会被赋值为从0开始递增的数字， 同时也会对枚举值到枚举名进行反向映射
console.log(Days.Sun === 0); // 0
console.log(Days[0] === "Sun"); // Sun
//如果像下面的例子中一样， 赋值给其中的一个元素，该元素后续的全部元素， 都会默认+1 ,
var NumberType;
(function (NumberType) {
    NumberType[NumberType["one"] = 0] = "one";
    NumberType[NumberType["two"] = 3] = "two";
    NumberType[NumberType["three"] = 4] = "three";
    NumberType[NumberType["four"] = 5] = "four";
})(NumberType || (NumberType = {}));
console.log(NumberType.one);
console.log(NumberType.two);
console.log(NumberType.three);
console.log(NumberType.four);
//枚举项有两种类型 常数项（constant member） 和计算所得项（computed member）
//常数项是在编译时就可以确定其值的成员。
//计算所得项是基于计算结果赋值的成员
// 计算所得项后面不能放置没有赋值的枚举项
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = "blue".length] = "blue";
    // green, // 比如在上面我们要计算 blue.length的值，但是下面的green就要初始化，就会报错
})(Color || (Color = {}));
let directions = [
    0 /* Directions.Up */,
    1 /* Directions.Down */,
    2 /* Directions.Left */,
    3 /* Directions.Right */,
];
//总结
//declare：用于在 TypeScript 中声明一个变量、函数、类等的存在和类型，但不提供实现。它主要用于类型声明文件（.d.ts）中。
//const enum：用于定义一个常数枚举，其值在编译时完全确定。编译器会将常数枚举的成员值直接嵌入到代码中，从而减少运行时的开销和生成的 JavaScript 代码体积。
//declare const enum：用于声明现有常数枚举的类型，以便 TypeScript 可以识别它，但不会生成实际的 JavaScript 代码。这在与现有 JavaScript 代码库集成时非常有用，特别是当这些库使用了常数枚举时。
