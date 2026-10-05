class Car {
  static brand = "BMW";
  static country = "Germany";

  constructor(model, color, price, year, engine, fuelType) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
    this.engine = engine;
    this.fuelType = fuelType;
  }

  display() {
    console.log("Brand:", Car.brand);
    console.log("Country:", Car.country);

    console.log("Model:", this.model);
    console.log("Color:", this.color);
    console.log("Price:", this.price);
    console.log("Year:", this.year);
    console.log("Engine:", this.engine);
    console.log("Fuel Type:", this.fuelType);
  }
}

let c1 = new Car("X1", "Black", 5000000, 2025, "2.0L", "Petrol");
let c2 = new Car("X3", "White", 7000000, 2024, "3.0L", "Diesel");
let c3 = new Car("X5", "Blue", 9000000, 2025, "3.0L", "Petrol");

c1.display();

console.log("----------------");

c2.display();

console.log("----------------");

c3.display();

class Mobile {
  static company = "Samsung";
  static os = "Android";

  constructor(model, ram, storage, price, color, battery) {
    this.model = model;
    this.ram = ram;
    this.storage = storage;
    this.price = price;
    this.color = color;
    this.battery = battery;
  }

  display() {
    console.log("Company:", Mobile.company);
    console.log("OS:", Mobile.os);

    console.log("Model:", this.model);
    console.log("RAM:", this.ram);
    console.log("Storage:", this.storage);
    console.log("Price:", this.price);
    console.log("Color:", this.color);
    console.log("Battery:", this.battery);
  }
}

let m1 = new Mobile("Galaxy S24", "8GB", "128GB", 60000, "Black", "4000mAh");
let m2 = new Mobile("Galaxy S25", "12GB", "256GB", 80000, "Blue", "4500mAh");
let m3 = new Mobile("Galaxy A55", "8GB", "256GB", 40000, "Green", "5000mAh");

m1.display();

console.log("----------------");

m2.display();

console.log("----------------");

m3.display();

class Movie {
  static industry = "Tollywood";
  static language = "Telugu";

  constructor(name, hero, heroine, director, budget, rating) {
    this.name = name;
    this.hero = hero;
    this.heroine = heroine;
    this.director = director;
    this.budget = budget;
    this.rating = rating;
  }

  display() {
    console.log("Industry:", Movie.industry);
    console.log("Language:", Movie.language);

    console.log("Movie Name:", this.name);
    console.log("Hero:", this.hero);
    console.log("Heroine:", this.heroine);
    console.log("Director:", this.director);
    console.log("Budget:", this.budget);
    console.log("Rating:", this.rating);
  }
}

let movie1 = new Movie("Movie A","Hero A","Heroine A","Director A","100 Crores",8.5);

let movie2 = new Movie("Movie B","Hero B","Heroine B","Director B","150 Crores",9.0);

movie1.display();

console.log("----------------");

movie2.display();
