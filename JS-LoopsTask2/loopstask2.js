// 10 to 150 that are divisible by both 3 and 5
for (let i = 10; i <= 150; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

// count number from 200 down to 50 are divosible by 7
let count = 0;
for (let i = 200; i >= 50; i--) {
  if (i % 7 == 0) {
    count++;
  }
}
console.log(count);

// 120 down to 20 are not divisible by 5
for (let i = 120; i >= 20; i--) {
  if (i % 5 != 0) {
    console.log(i);
  }
}

// avg of all even nums in range from 10 to 100
let sum = 0;
let countEven = 0;
for (let i = 10; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
    countEven++;
  }
}
console.log(sum / countEven);

// Avg of all factors a given number
let n = 7;
let s = 0,
  c = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    c++;
    s += i;
  }
}
console.log(s / c);
