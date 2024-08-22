// Implements

//通过使用 implements，可以强制一个类按照接口的规定提供具体的方法和属性实现
//当一个类使用 implements 关键字时，它承诺实现接口中定义的所有方法和属性
interface Drivable {
  speed: number;
  drive(): void;
}

// 实现接口的类
class Car1 implements Drivable {
  // 必须实现接口中定义的属性和方法
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  drive(): void {
    console.log(`Driving at ${this.speed} km/h`);
  }
}

// 创建 Car 类的实例
const myCar = new Car1(120);
myCar.drive(); // 输出: Driving at 120 km/h

/* 
    接口的多重实现
    一个类可以实现多个接口，只要它实现了所有接口中的方法和属性：
 */

interface Engine {
  start(): void;
}

interface Wheels {
  rotate(): void;
}

class Motorcycle implements Engine, Wheels {
  start(): void {
    console.log("Engine started");
  }

  rotate(): void {
    console.log("Wheels rotating");
  }
}

const myMotorcycle = new Motorcycle();
myMotorcycle.start(); // 输出: Engine started
myMotorcycle.rotate(); // 输出: Wheels rotating

/* 
        接口继承接口

        接口继承: 通过 extends 关键字，一个接口可以继承一个或多个接口的属性和方法。
        接口组合: 继承多个接口可以创建一个包含多个接口特性的复合接口。
        实现: 实现继承接口的类需要实现所有继承接口中的属性和方法。
*/

interface Person3 {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  position: string;
}

// 定义继承自 Person 和 Employee 的接口
interface Manager extends Person3, Employee {
  department: string;
}

// 实现 Manager 接口的类
class DepartmentManager implements Manager {
  name: string;
  age: number;
  employeeId: number;
  position: string;
  department: string;

  constructor(
    name: string,
    age: number,
    employeeId: number,
    position: string,
    department: string
  ) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
    this.position = position;
    this.department = department;
  }

  getDetails(): void {
    console.log(
      `Manager ${this.name}, Age ${this.age}, ID ${this.employeeId}, Position ${this.position}, Department ${this.department}`
    );
  }
}

/* 
        接口继承类
        接口可以继承类，在继承类中可以实现所有继承接口中的属性和方法。

*/

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 1, z: 1 };
