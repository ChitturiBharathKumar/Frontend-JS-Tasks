class Product {
  // Static variables
  static company = "Amazon";
  static count = 0;

  constructor(name, price, brand, category, quantity) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.category = category;
    this.quantity = quantity;

    Product.count++;
  }

  display() {
    console.log("Company:", Product.company);
    console.log("Total Products:", Product.count);

    console.log("Name:", this.name);
    console.log("Price:", this.price);
    console.log("Brand:", this.brand);
    console.log("Category:", this.category);
    console.log("Quantity:", this.quantity);

    console.log("----------------");
  }
}

let p1 = new Product("Laptop", 50000, "HP", "Electronics", 2);
let p2 = new Product("Phone", 20000, "Samsung", "Electronics", 5);
let p3 = new Product("Watch", 5000, "Titan", "Accessories", 3);
let p4 = new Product("Shoes", 3000, "Nike", "Fashion", 4);

p1.display();
p2.display();
p3.display();
p4.display();

class Employee {
  // Static variables
  static company = "TCS";
  static count = 0;

  constructor(name, id, age, salary, department) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.salary = salary;
    this.department = department;

    Employee.count++;
  }

  display() {
    console.log("Company:", Employee.company);
    console.log("Total Employees:", Employee.count);

    console.log("Name:", this.name);
    console.log("ID:", this.id);
    console.log("Age:", this.age);
    console.log("Salary:", this.salary);
    console.log("Department:", this.department);

    console.log("----------------");
  }
}

let e1 = new Employee("Bharath", 101, 22, 50000, "Developer");
let e2 = new Employee("Rahul", 102, 24, 60000, "Testing");
let e3 = new Employee("Arun", 103, 25, 55000, "Developer");
let e4 = new Employee("Priya", 104, 23, 65000, "HR");

e1.display();
e2.display();
e3.display();
e4.display();

class Mobile {
  static type = "Smartphone";
  static operatingSystem = "Android";

  constructor(brand, model, price, color, storage) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.storage = storage;
  }

  display() {
    console.log("Type of Mobile :", Mobile.type);
    console.log("Operating System:", Mobile.operatingSystem);

    console.log("Brand :", this.brand);
    console.log("Model :", this.model);
    console.log("Price :", this.price);
    console.log("Color :", this.color);
    console.log("Storage :", this.storage);
    console.log("----------------");
  }
}

let m1 = new Mobile("Samsung", "S24", 60000, "Black", "256GB");
let m2 = new Mobile("Apple", "iPhone 15", 70000, "Blue", "128GB");
let m3 = new Mobile("OnePlus", "12", 55000, "Green", "256GB");
let m4 = new Mobile("Vivo", "V30", 35000, "Black", "128GB");

m1.display();
m2.display();
m3.display();
m4.display();
