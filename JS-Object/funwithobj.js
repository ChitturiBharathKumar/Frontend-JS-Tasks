let person = {
  add: function a() {
    let a = 10;
    let b = 20;
    console.log("Addition : ", a + b);
  },
  sub: function b(a, b) {
    console.log("Subtraction : ", a - b);
  },
  mul: function c() {
    let a = 10;
    let b = 20;
    return "Multiplication : " + a * b;
  },
  div: function d(a, b) {
    return "Division : " + a / b;
  },
  evenOdd: function () {
    let a = 2;
    if (a % 2 == 0) {
      console.log(a + " is Even");
    } else {
      console.log(a + " is odd");
    }
  },
  positiveNegative: function (n) {
    if (n > 0) {
      console.log(n + " is Positive");
    } else if (n < 0) {
      console.log(n + " is Negative");
    } else {
      console.log(n + " is Zero");
    }
  },
  leapYear: function () {
    let year = 2022;
    if (year % 400 == 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return year + " is a Leap Year";
    } else {
      return year + " is not a Leap Year";
    }
  },
  largestTwo: function (a, b) {
    if (a > b) {
      return a + " is Largest Number";
    } else {
      return b + " is Largest Number";
    }
  },
  sumNumbers: () => {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
      sum += i;
    }

    console.log(sum);
  },
  factors: (n) => {
    for (let i = 1; i <= n; i++) {
      if (n % i == 0) console.log(i);
    }
  },
  evenDigitCount: () => {
    let n = 246813;
    let count = 0;

    while (n > 0) {
      let digit = n % 10;

      if (digit % 2 == 0) count++;

      n = parseInt(n / 10);
    }

    return count;
  },
  perfectNumber: (n) => {
    let sum = 0;

    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        sum += i;
      }
    }

    return sum == n;
  },
};

person.add();
person.sub(20, 10);
console.log(person.mul());
console.log(person.div(10, 20));

person.evenOdd();
person.positiveNegative(10);
console.log(person.leapYear());
console.log(person.largestTwo(10, 20));

person.sumNumbers();
person.factors(20);
console.log(person.evenDigitCount());
console.log(person.perfectNumber(6));