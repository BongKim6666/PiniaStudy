// Implements
// 实现接口的类
class Car1 {
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`Driving at ${this.speed} km/h`);
    }
}
// 创建 Car 类的实例
const myCar = new Car1(120);
myCar.drive(); // 输出: Driving at 120 km/h
class Motorcycle {
    start() {
        console.log("Engine started");
    }
    rotate() {
        console.log("Wheels rotating");
    }
}
const myMotorcycle = new Motorcycle();
myMotorcycle.start(); // 输出: Engine started
myMotorcycle.rotate(); // 输出: Wheels rotating
// 实现 Manager 接口的类
class DepartmentManager {
    constructor(name, age, employeeId, position, department) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        console.log(`Manager ${this.name}, Age ${this.age}, ID ${this.employeeId}, Position ${this.position}, Department ${this.department}`);
    }
}
/*
        接口继承类
        接口可以继承类，在继承类中可以实现所有继承接口中的属性和方法。

*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let point3d = { x: 1, y: 1, z: 1 };
