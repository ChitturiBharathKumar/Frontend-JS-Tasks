// Arrow Function — Without Arguments & Without Return

// 1. Even or Odd
let evenOdd = () => {
    let n = 10;

    if (n % 2 == 0)
        console.log("Even");
    else
        console.log("Odd");
};

evenOdd();


// 2. Positive or Negative
let positiveNegative = () => {
    let n = -5;

    if (n > 0)
        console.log("Positive");
    else if (n < 0)
        console.log("Negative");
    else
        console.log("Zero");
};

positiveNegative();


// 3. Leap Year
let leapYear = () => {
    let year = 2024;

    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
        console.log("Leap Year");
    else
        console.log("Not a Leap Year");
};

leapYear();


// 4. Print 1 to 10
let printNumbers = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
};

printNumbers();


// 5. Sum of 1 to 100
let sumNumbers = () => {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    console.log(sum);
};

sumNumbers();

// Arrow Function — With Arguments & Without Return

// 1. Largest of Two Numbers
let largest = (a, b) => {
    if (a > b)
        console.log(a);
    else
        console.log(b);
};

largest(25, 40);

// 2. Print Even Numbers in Range
let evenRange = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0)
            console.log(i);
    }
};

evenRange(1, 50);


// 3. Sum of Range
let sumRange = (start, end) => {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    console.log(sum);
};

sumRange(1, 100);

// 4. Print Factors of a Number
let factors = (n) => {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0)
            console.log(i);
    }
};

factors(24);

// 5. Print Numbers Between Two Values in Reverse
let reverseRange = (start, end) => {
    for (let i = end; i >= start; i--) {
        console.log(i);
    }
};

reverseRange(5, 15);

// Arrow Function — Without Arguments & With Return

// 1. Return Smallest Number in Fixed Values
let smallest = () => {
    let a = 15, b = 8, c = 20;

    if (a < b && a < c)
        return a;
    else if (b < c)
        return b;
    else
        return c;
};

console.log(smallest());


// 2. Return Number of Even Digits
let evenDigitCount = () => {
    let n = 246813;
    let count = 0;

    while (n > 0) {
        let digit = n % 10;

        if (digit % 2 == 0)
            count++;

        n = parseInt(n / 10);
    }

    return count;
};

console.log(evenDigitCount());


// 3. Return Product of Digits
let productDigits = () => {
    let n = 234;
    let product = 1;

    while (n > 0) {
        product *= n % 10;
        n = parseInt(n / 10);
    }

    return product;
};

console.log(productDigits());

// 4. Return Sum of Even Numbers 1 to 50
let evenSum = () => {
    let sum = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0)
            sum += i;
    }

    return sum;
};

console.log(evenSum());

// 5. Return Sum of Digits
let sumDigits = () => {
    let n = 12345;
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }

    return sum;
};

console.log(sumDigits());


// Arrow Function — With Arguments & With Return

// 1. Reverse a Number
let reverseNumber = (n) => {
    let rev = 0;

    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = parseInt(n / 10);
    }

    return rev;
};

console.log(reverseNumber(12345));


// 2. Check Palindrome
let palindrome = (n) => {
    let original = n;
    let rev = 0;

    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = parseInt(n / 10);
    }

    return original == rev;
};

console.log(palindrome(121));

// 3. Calculate Simple Interest
let simpleInterest = (p, r, t) => {
    return (p * r * t) / 100;
};

console.log(simpleInterest(10000, 5, 2));

// 4. Calculate Power
let power = (base, exponent) => {
    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }

    return result;
};

console.log(power(2, 5));

// 5. Perfect Number
let perfectNumber = (n) => {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }

    return sum == n;
};

console.log(perfectNumber(28));
