//类， 描述了所创建的对象共同的属性和方法
//实例化对象

class Person1 {
  name: string; //类的属性
  age: number; //类的属性
  constructor(name: string, age: number) {
    // 构造函数的类型 是定义new一个对象时，传入参数的类型
    this.name = name;
    this.age = age;
  }

  sayHi(str: string) {
    console.log("Hello " + str);
  }
}

const person1 = new Person1("tom", 17); //new的时候，会执行类中的构造方法 ， constructor
person1.name = "panda";
console.log(person1.name);
person1.sayHi("Judy");
