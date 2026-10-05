// Without Arguments & Without Return
function displayObject1() {
  let phone = {
    brand: "MI",
    model: "17 pro",
    price: 30000,
  };

  console.log(phone);
}

displayObject1();

// With Arguments & Without Return

function displayObject2(laptop) {
  console.log(laptop);
}

displayObject2({
  brand: "HP",
  model: "laptop 15",
  price: 50000,
});

// Without Arguments & With Return

function displayObject3() {
  return {
    brand: "BMW",
    model: "BMW X1",
    price: 5000000,
  };
}

console.log(displayObject3());

// With Arguments & With Return

function displayObject4(person) {
  return person;
}

console.log(
  displayObject4({
    name: "Bharath",
    age: 21,
    gender: "Male",
  }),
);
