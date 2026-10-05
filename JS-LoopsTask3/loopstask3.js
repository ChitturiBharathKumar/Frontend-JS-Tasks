// 1.Find the average of numbers from 1 to N.
let n = 5;
let s = 0;

for (let i = 1; i <= n; i++) {
    s += i;
}
console.log("Average =", s / n);


// 2.Find the sum of squares of numbers from 1 to N.
let n1 = 5;
let s1 = 0;

for (let j = 1; j <= n1; j++) {
    s1 += j * j;
}
console.log(s1);


// 3.Find the sum of cubes of numbers from 1 to N.
let n2 = 5;
let s2 = 0;

for (let k = 1; k <= n2; k++) {
    s2 += k * k * k;
}
console.log(s2);


// 4.Calculate the power of a number without using the ** operator.
let a1 = 2;
let p = 5;
let ans = 1;

for (let i = 1; i <= p; i++) {
    ans = ans * a1;
}
console.log(ans);


// 5.Display the first N terms of the Fibonacci series.
let n3 = 7;
let x = 0;
let y = 1;

for (let i = 1; i <= n3; i++) {
    console.log(x);
    let z = x + y;
    x = y;
    y = z;
}


// 6.Display the first N terms of the series:
//     1, 1/2, 1/3, 1/4, ...
let n4 = 4;

for (let i = 1; i <= n4; i++) {
    console.log("1/" + i);
}


// 7.Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
let n5 = 5;
let num = 0;

for (let i = 1; i <= n5; i++) {
    num = num * 10 + 1;
    console.log(num);
}


// 8.Display the first N terms of the series:
let n6 = 5;
let val = 1;

for (let i = 1; i <= n6; i++) {
    console.log(val);
    val = val * 3;
}


// 9.Print all numbers from 10 to 150 that are divisible by both 3 and 5.
for (let i = 10; i <= 150; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}


// 10.Count how many numbers from 200 down to 50 are divisible by 7.
let count = 0;

for (let i = 200; i >= 50; i--) {
    if (i % 7 == 0) {
        count++;
    }
}

console.log(count);


// 11.Print numbers from 120 down to 20 that are not divisible by 5.
for (let i = 120; i >= 20; i--) {
    if (i % 5 != 0) {
        console.log(i);
    }
}


// 12.Find the average of all even numbers in the range from 10 to 100.
let sum = 0;
let count2 = 0;

for (let i = 10; i <= 100; i++) {
    if (i % 2 == 0) {
        sum += i;
        count2++;
    }
}

console.log(sum / count2);


// 13.Find the average of all factors of a given number.
let n7 = 9;
let sum2 = 0;
let count3 = 0;

for (let i = 1; i <= n7; i++) {
    if (n7 % i == 0) {
        console.log(i);
        sum2 += i;
        count3++;
    }
}

console.log("average =", sum2 / count3);