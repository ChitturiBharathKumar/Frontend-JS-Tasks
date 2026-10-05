class Mathematics {
  static add() {
    console.log(10 + 20);
  }
  static sub(a, b) {
    console.log(a - b);
  }
  static mul() {
    return 10 * 20;
  }
  static div(a, b) {
    return a / b;
  }
}

Mathematics.add();
Mathematics.sub(20, 10);
console.log(Mathematics.mul());
console.log(Mathematics.div(20, 10));

class AnonymousFun {
  static evenOdd() {
    let n = 10;

    if (n % 2 == 0) console.log("Even");
    else console.log("Odd");
  }

  static largest(a, b) {
    if (a > b) console.log(a);
    else console.log(b);
  }

  static smallest() {
    let a = 15,
      b = 8,
      c = 20;

    if (a < b && a < c) return a;
    else if (b < c) return b;
    else return c;
  }

  static reverseNumber(n) {
    let rev = 0;

    while (n > 0) {
      let digit = n % 10;
      rev = rev * 10 + digit;
      n = parseInt(n / 10);
    }

    return rev;
  }
}

AnonymousFun.evenOdd();
AnonymousFun.largest(25, 40);
console.log(AnonymousFun.smallest());
console.log(AnonymousFun.reverseNumber(12345));

class ArrowFun {
  static positiveNegative = () => {
    let n = -5;

    if (n > 0) console.log("Positive");
    else if (n < 0) console.log("Negative");
    else console.log("Zero");
  };

  static evenRange = (start, end) => {
    for (let i = start; i <= end; i++) {
      if (i % 2 == 0) console.log(i);
    }
  };

  static evenDigitCount = () => {
    let n = 246813;
    let count = 0;

    while (n > 0) {
      let digit = n % 10;

      if (digit % 2 == 0) count++;

      n = parseInt(n / 10);
    }

    return count;
  };

  static palindrome = (n) => {
    let original = n;
    let rev = 0;

    while (n > 0) {
      let digit = n % 10;
      rev = rev * 10 + digit;
      n = parseInt(n / 10);
    }

    return original == rev;
  };
}

ArrowFun.positiveNegative();
ArrowFun.evenRange(1, 50);
console.log(ArrowFun.evenDigitCount());
console.log(ArrowFun.palindrome(121));
