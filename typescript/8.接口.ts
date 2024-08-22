interface Person {
  name: string;
  age: number;
  job?: string;
  readonly sex: string; //readonly 修饰符可以用在接口或类的属性上，以确保这些属性在对象创建后不会被修改。
  [propName: string]: any; //在不确定接口里的一个属性的名称时， 可以用这种方法指定， 叫做任意属性
  //一个接口中只能定义一个任意属性
  //任意属性允许接口声明具有不确定名称的属性。它们用来处理对象中那些未在接口中显式声明的属性。这些属性的名称是动态的，可以是任意字符串，并且值的类型是指定的。
  //它允许 Person 接口拥有任意数量的属性，只要这些属性的键是字符串，值的类型是 any。这使得 Person 对象可以有额外的属性而不必在接口中明确声明它们。

  //   [propName: string]: string| number| boolean; // 但是如果后面的value ，进行了类型指定的话， 上面一切符合该属性条件的属性都会受到影响，并且报错
}

let tom: Person = {
  name: "Tom",
  age: 18,
  job: "teacher",
  hobby: "soccer", // 对应了这部分 [propName: string]: any; 因为定义接口时，还不知道该属性该起什么名称
  sex: "male",
};

// tom.sex = "female"; // readonly和const比较相似， readonly 用于属性或数组元素，确保数据不可变；

const numbers: readonly number[] = [1, 2, 3];
// numbers[0] = 5; //readonly一旦赋值便不可修改值
console.log(tom);
