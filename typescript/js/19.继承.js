//扩展现有的类， 通过继承
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`I am ${this.name}`);
    }
}
let animal = new Animal("cat");
class Dog extends Animal {
    //子类
    constructor(name) {
        super(name); //继承父类的constructor，即构造函数 , 也就是父类中的this.name = name
        console.log(name);
    }
    //可以调用父类的方法， 还可以重写父类继承给子类的方法
    sayHi() {
        // console.log("我是dog类的sayHi方法");
        super.sayHi(); // 继承父类中的sayHi方法， 即 Animal.sayHi()
    }
}
let dog = new Dog("piggy");
dog.sayHi(); // I am piggy
//使用getter和setter可以改变属性的赋值和读取行为
//Getter：用于读取属性的值。它没有参数，并且只能返回值。
//Setter：用于设置属性的值。它有一个参数，用于接收要设置的新值。
class Pizza {
    constructor(name) {
        this._name = name;
    }
    get pizzaName() {
        return this._name;
    }
    set pizzaName(value) {
        console.log("Setter " + value);
    }
}
let pizza = new Pizza("Meat");
console.log(pizza.pizzaName); // Meat
pizza.pizzaName = "Sausage"; // Setter Sausage 当我设置一个值时， 它就会自动执行setter函数
//静态方法 static ， 它不需要实例化，而是直接通过类来调用  (只属于类自己的属性和方法）
class MathUtils {
    //静态方法
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(1, 2)); // 3
console.log((MathUtils.age = 3));
//public private和protected
//public修饰的属性或方法是公有的， 可以在任何地方被访问到，默认所有的属性和方法都是public的
//private修饰的属性或方法是私有的， 不能被声明它的类之外的地方访问，包括其子类，（实例化后不可以访问） 但是属性和方法可以被继承
//protected修饰的属性或方法是受保护的， 它和private类似，不能被声明它的类之外的地方访问
//但protected在其子类中可以被访问。（实例化后不可以访问） 性和方法可以被继承
class B {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age || 0;
        this.sex = sex || "female";
    }
    get Age() {
        //让外部访问 private的属性
        return this.age;
    }
    set Age(value) {
        //让外部访问 private的属性
        this.age = value;
    }
}
class C extends B {
    constructor(name, age, sex) {
        super(name, age, sex);
    }
    set Sex(value) {
        this.sex = value;
    }
}
console.log((new C().Sex = "male"));
//readonly修饰符
//只读属性: 使用 readonly 修饰符的属性只能在声明时或者在构造函数中初始化。初始化后，这些属性的值就不能再被修改。
//初始化: 只读属性可以在类的构造函数中赋值，也可以在声明时直接赋值，但一旦赋值后不能更改。
//使用 readonly 修饰符的好处:
//不变性: 确保对象的某些属性在对象的生命周期内不会被修改，这有助于避免不必要的副作用。
//类型安全: 提供更强的类型安全，防止意外修改只读属性的值。
//限制
//只读属性的设置: readonly 属性必须在声明时或在构造函数中初始化，无法在对象创建后进行修改。
//对象的可变性: readonly 修饰符只对属性本身有效。如果属性是一个对象或数组，则对象的内容仍然可以被修改（尽管属性引用本身不能改变）。
class X {
    //readonly age: number   ////只读属性， 但是在构造函数中是可以修改的
    //访问修饰符（public, protected, private）在构造函数参数中作为修饰符时，自动创建了类的属性，并将构造函数参数赋值给这个属性。
    // constructor(public age: number) {
    // constructor(private age: number) {
    constructor(age) {
        this.age = age;
        // this.age = age; // 这一行是多余的，因为构造函数参数 age 已经自动赋值给了 age 属性
    }
    update() {
        // this.age = 14; // 这会出错， 因为 age是只读属性
    }
}
console.log(new X(13));
class MyArray {
    constructor(items) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item); // This is allowed because we are modifying the content of the array, not the array reference
    }
}
const myArray = new MyArray([1, 2, 3]);
console.log(myArray.items); // 输出: [1, 2, 3]
myArray.addItem(4); //因为readonly的属性本身设置成了数组， 所以可以被更改
console.log(myArray.items); // 输出: [1, 2, 3, 4]
// The following line will produce an error:
// myArray.items = [5, 6];  // Error: Cannot assign to 'items' because it is a read-only property
/*
      abstract
      
      总结；

      抽象类: 用于定义一个不能直接实例化的基类，可以包含抽象方法和具体方法。
      抽象方法: 在抽象类中声明但不实现的方法，必须在继承的具体类中实现。
      目的: 提供一个模板，以确保子类实现特定的方法，同时允许共享通用的实现逻辑。

*/
//abstract 用于定义抽象类和其中的抽象方法
//抽象类不允许被实例化
//抽象类用于定义一个类的通用接口（方法和属性），供其他具体类继承并实现。
//设计基类: 抽象类通常用于定义一个基类，提供共同的接口和基本实现，供具体的子类继承和扩展。
//强制实现: 抽象方法强制子类提供具体实现，确保所有子类都有一致的接口。
//代码复用: 抽象类可以包含具体方法（具有实现），从而允许子类重用这些实现而无需重新编写代码。
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        /*
        如果父类没有显式定义构造函数，TypeScript 和 JavaScript 会提供一个默认的构造函数，该构造函数不做任何事情，但它仍然存在。
        子类的构造函数必须通过 super() 调用这个默认构造函数，才能正确初始化继承的属性和方法。 */
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 输出: 50
console.log(rectangle.getPerimeter()); // 输出: 30
