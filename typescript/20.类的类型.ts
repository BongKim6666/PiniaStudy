class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class BMW extends Car {
  constructor(name: string) {
    super(name);
  }
}

const car: Car = new Car("Benz"); // car 变量具有 Car 类中定义的所有公共属性和方法
