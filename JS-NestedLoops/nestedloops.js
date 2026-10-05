//sum of prime numbers
let sum = 0;
for (let j = 20; j <= 150; j++) {
  let c = 0;
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      c++;
    }
  }
  if (c == 2) {
    sum += j;
  }
}
console.log(sum);

// Average of perfect numbers
let c =0 , add = 0;
for (let j = 1; j <= 1000; j++) {
  let s = 0;
  for (let i = 1; i < j; i++) {
    if (j % i == 0) {
      s += i;
    }
  }
  if (j == s) {
    c++;
    add += j;
  }
}
console.log(add/c);

// leap years in range
for (let i = 1900; i <= 2026; i++) {
  if (i % 100 == 0 && i % 400 == 0) {
    console.log(i);
  } else if (i % 4 == 0) {
    console.log(i);
  }
}

//palindrome Numbers
for (let i = 100; i <= 500; i++) {
  let temp = i,
    rev = 0;
  while (temp > 0) {
    let ld = temp % 10;
    rev = rev * 10 + ld;
    temp = parseInt(temp / 10);
  }
  if (i == rev) {
    console.log(i);
  }
}

//Digit sum = 10
for (let i = 120; i <= 850; i++) {
  let temp = i,
    s = 0;
  while (temp > 0) {
    let ld = temp % 10;
    s = s + ld;
    temp = parseInt(temp / 10);
  }
  if (s == 10) {
    console.log(i);
  }
}

// Pairs with Target sum
for (let j = 1; j <= 50; j++) {
  for (let i = 1; i <= 50; i++) {
    if (j + i == 30) {
      console.log(j + " , " + i);
    }
  }
}

// Exactly 3 Factors
for (let j = 10; j <= 300; j++) {
  let c = 0;
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      c++;
    }
  }
  if (c == 3) {
    console.log(j);
  }
}

// Prime Factors
for (let j = 20; j <= 50; j++) {
  let res = "";
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      res = res + ", " + i;
    }
  }
  console.log(j + "-> " + res);
}

// Armstrong numbers
for (let i = 100; i <= 999; i++) {
  let temp = i,
    c = 0,
    s = 0;
  while (temp > 0) {
    let ld = temp % 10;
    s = s + Math.pow(ld, 3);
    temp = parseInt(temp / 10);
  }
  if (i == s) {
    console.log(i);
  }
}

// maximum no of factors b/w 50 to 150
let digit,
  max = 0;
for (let j = 50; j <= 150; j++) {
  let c = 0;
  for (let i = 1; i <= j; i++) {
    if (j % i == 0) {
      c++;
    }
  }
  if (max < c) {
    max = c;
    digit = j;
  }
}
console.log(digit);
