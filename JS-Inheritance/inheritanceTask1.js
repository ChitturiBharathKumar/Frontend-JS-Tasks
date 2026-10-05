class Parent {
    constructor() {
        console.log("Parent Constructor");
    }

    show() {
        console.log("Parent Method");
    }
}

class Child extends Parent {
}

let obj = new Child();

obj.show();

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    display() {
        console.log(this.brand);
        console.log(this.model);
    }
}

let c = new Car("Toyota", "Fortuner");

c.display();

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    display() {
        super.eat();
        console.log(this.breed);
    }
}

let d = new Dog("Tommy", "Labrador");

d.display();

class Employee {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(this.name + " is working");
    }
}

class Developer extends Employee {
    constructor(name, language) {
        super(name);
        this.language = language;
    }

    details() {
        super.work();
        console.log("Programming Language: " + this.language);
    }
}

let e = new Developer("Bharath", "Java");

e.details();