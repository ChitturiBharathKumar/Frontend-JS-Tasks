class Vehicle {
    start() {
        console.log("Vehicle is starting...");
    }

    speed() {
        console.log("Vehicle speed is normal");
    }
}

class Car extends Vehicle {
    // Override
    speed() {
        console.log("Car speed : 120 kmph");
    }

    music() {
        console.log("Music system is available");
    }
}

class SportsCar extends Car {
    // Override
    speed() {
        console.log("Sports Car speed : 300 kmph");
    }

    turbo() {
        console.log("Turbo mode enabled...");
    }
}

// Parent object
let vehicle = new Vehicle();
vehicle.speed();

// Child object
let car = new Car();
car.speed();
car.music();

// Grandchild object
let sports = new SportsCar();
sports.speed();
sports.music();
sports.turbo();

class Animal {
    sound() {
        console.log("Animal makes a sound");
    }

    eat() {
        console.log("Animal is eating...");
    }
}

class Dog extends Animal {
    // Override
    sound() {
        console.log("Dog says : Bow Bow");
    }

    bark() {
        console.log("Dog is barking...");
    }
}

class Puppy extends Dog {
    // Override
    sound() {
        console.log("Puppy says : Woof Woof");
    }

    play() {
        console.log("Puppy is playing...");
    }
}

// Parent object
let animal = new Animal();
animal.sound();

// Child object
let dog = new Dog();
dog.sound();
dog.eat();
dog.bark();

// Grandchild object
let puppy = new Puppy();
puppy.sound();
puppy.eat();
puppy.bark();
puppy.play();

class Employee {
    work() {
        console.log("Employee is working...");
    }

    salary() {
        console.log("Employee salary : 30000");
    }
}

class Developer extends Employee {
    // Override
    work() {
        console.log("Developer is writing code...");
    }

    coding() {
        console.log("Developer is coding in JavaScript");
    }
}

class SeniorDeveloper extends Developer {
    // Override
    work() {
        console.log("Senior Developer is designing applications...");
    }

    teamLead() {
        console.log("Senior Developer is leading the team...");
    }
}

// Parent object
let emp = new Employee();
emp.work();
emp.salary();

// Child object
let dev = new Developer();
dev.work();
dev.salary();
dev.coding();

// Grandchild object
let senior = new SeniorDeveloper();
senior.work();
senior.salary();
senior.coding();
senior.teamLead();