// // find the first even digit from the left
// let n = 753914286;
// let rev = 0;
// while (n > 0) {
//   let ld = n % 10;
//   rev = rev * 10 + ld;
//   n = parseInt(n / 10);
// }
// while (rev > 0) {
//   let ld = rev % 10;
//   rev = parseInt(rev / 10);
//   if (ld % 2 == 0) {
//     console.log(ld);
//     break;
//   }
// }

// // find the first prime number b/w 50 and 100
// for (let j = 50; j <= 100; j++) {
//   let flag = 0;
//   for (let i = 2; i * i <= j; i++) {
//     if (j % i == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 0) {
//     console.log(j);
//     break;
//   }
// }

// // find the first number whose sum is 10
// let i = 1;
// while (true) {
//   let temp = i,
//     sum = 0;
//   while (temp > 0) {
//     let ld = temp % 10;
//     sum += ld;
//     temp = parseInt(temp / 10);
//   }
//   if (sum == 10) {
//     console.log(i);
//     break;
//   }
//   i++;
// }

// //find the first number with exactly 3 divisors b/w 1 and 100
// for (let i = 1; i <= 100; i++) {
//   let c = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       c++;
//     }
//   }
//   if (c == 3) {
//     console.log(i);
//     break;
//   }
// }

// // stop when 3 consecutive odd numbers occur b/w 1 and 50

// // find the first palindrome b/w 10 and 500

// let rev = 0;
// for (let i = 10; i <= 500; i++) {
//   let rev = 0,
//     temp = i;
//   while (temp > 0) {
//     let ld = temp % 10;
//     rev = rev * 10 + ld;
//     temp = parseInt(temp / 10);
//   }
//   if (rev == i) {
//     console.log(i);
//     break;
//   }
// }

// // find the first perfet number b/w 1 and 1000

// for (let i = 1; i <= 1000; i++) {
//   let sum = 0;
//   for (let j = 1; j < i; j++) {
//     if (i % j == 0) {
//       sum += j;
//     }
//   }
//   if (sum == i) {
//     console.log(i);
//     break;
//   }
// }

// // print the first 5 even numbers
// let c = 0,
//   i = 1;
// while (true) {
//   if (i % 2 == 0) {
//     console.log(i);
//     c++;
//   }
//   if (c == 3) {
//     break;
//   }
//   i++;
// }

// // print first 5 prime numbers

// let j = 1,
//   c = 0;
// while (true) {
//   let flag = 0;
//   for (let i = 2; i * i <= j; i++) {
//     if (j % i == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 0) {
//     console.log(j);
//     c++;
//   }
//   if (c == 5) {
//     break;
//   }
//   j++;
// }

// // print the first 3 numbers divisible by 7

// let i = 1,
//   c = 0;
// while (true) {
//   if (i % 7 == 0) {
//     console.log(i);
//     c++;
//   }
//   if (c == 3) {
//     break;
//   }
//   i++;
// }

// //     ---------------  continue ----------------------    ////

// // print 1-30 skipping even numbers

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // print 1-40 skipping multiple of 4
// for (let i = 1; i <= 40; i++) {
//   if (i % 4 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // print 1-30 skipping numbers from 10-20
// for (let i = 1; i <= 30; i++) {
//   if (i >= 10 && i <= 20) {
//     continue;
//   }
//   console.log(i);
// }

// // print 1-50 skipping multiples of 3
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // Extract 502304 skipping digit 0
// let n = 502304;
// while (n > 0) {
//   let ld = n % 10;
//   n = parseInt(n / 10);
//   if (ld == 0) {
//     continue;
//   }
//   console.log(ld);
// }

// // extracty 5832461 printing only even digits
// let n = 5832461;
// while (n > 0) {
//   let ld = n % 10;
//   n = parseInt(n / 10);
//   if (ld % 2 !== 0) {
//     continue;
//   }
//   console.log(ld);
// }

// // extract 1432578 skipping odd digits
// let n = 1432578;
// while (n > 0) {
//   let ld = n % 10;
//   n = parseInt(n / 10);
//   if (ld % 2 !== 0) {
//     continue;
//   }
//   console.log(ld);
// }

// // print 1-200 skipping multiples of 3 or 5
// for (let i = 1; i <= 200; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// // print 1-500 skipping numbers with odd digit sum
// for (let i = 1; i <= 500; i++) {
//   let temp = i,
//     sum = 0;
//   while (temp > 0) {
//     let ld = temp % 10;
//     sum += ld;
//     temp = parseInt(temp / 10);
//   }
//   if (sum % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// // print 1-500 skipping numbers containing digit 0
// for (let i = 1; i <= 500; i++) {
//   let temp = i,
//     flag = 0;
//   while (temp > 0) {
//     let ld = temp % 10;
//     temp = parseInt(temp / 10);
//     if (ld == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 1) {
//     continue;
//   }
//   console.log(i);
// }

//   ---------------  break + continue --------------------   //

// // print 1-50 skip multiples of 3 stop at 40
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     continue;
//   }
//   if (i == 40) {
//     break;
//   }
//   console.log(i);
// }

// // print odd numbers skip evens stop at the first multiple of 7
// let i = 1;
// while (true) {
//   if (i % 2 == 0) {
//     i++;
//     continue;
//   }
//   if (i % 7 == 0) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// // extract 5830421 skip odd digits stop at 0
// let n = 5830421;
// while (n > 0) {
//   let ld = n % 10;
//   n = parseInt(n / 10);
//   if (ld % 2 !== 0) {
//     continue;
//   }
//   if (ld == 0) {
//     break;
//   }
//   console.log(ld);
// }

// // extract 8325147, print digits until 5
// let n = 8325147;
// while (n > 0) {
//   let ld = n % 10;
//   n = parseInt(n / 10);
//   console.log(ld);
//   if (ld == 5) {
//     break;
//   }
// }

// // search from 51, skip non-multiplea of 9 , stop at the first multiple of 9
// let i = 51;
// while (true) {
//   if (i % 9 !== 0) {
//     i++;
//     continue;
//   }
//   if (i % 9 === 0) {
//     console.log(i);
//     break;
//   }
//   i++;
// }
