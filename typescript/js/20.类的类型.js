class Car {
    constructor(name) {
        this.name = name;
    }
}
class BMW extends Car {
    constructor(name) {
        super(name);
    }
}
const car = new Car("Benz"); // car 变量具有 Car 类中定义的所有公共属性和方法
