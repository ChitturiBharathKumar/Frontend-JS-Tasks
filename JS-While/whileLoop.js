function sum() {
  let n = parseInt(document.getElementById("in1").value);

  let sum = 0;
  while (n > 0) {
    let ld = n % 10;
    sum += ld;
    n = parseInt(n / 10);
  }

  document.getElementById("res1").value = sum;
}

function avg() {
  let n = parseInt(document.getElementById("in2").value);

  let sum = 0,
    count = 0;
  while (n > 0) {
    let ld = n % 10;
    sum += ld;
    count++;
    n = parseInt(n / 10);
  }

  document.getElementById("res2").value = sum / count;
}

function firstLastSum() {
  let n = parseInt(document.getElementById("in3").value);

  let lastDigit = n % 10;
  let firstDigit = n;
  while (firstDigit >= 10) {
    firstDigit = parseInt(firstDigit / 10);
  }

  document.getElementById("res3").value = firstDigit + lastDigit;
}

function avg5() {
  let n = parseInt(document.getElementById("in4").value);

  let sum = 0,
    count = 0;
  while (n > 0) {
    let ld = n % 10;
    if (ld % 5 == 0) {
      sum += ld;
      count++;
    }
    n = parseInt(n / 10);
  }

  document.getElementById("res4").value = sum / count;
}

function diff() {
  let n = parseInt(document.getElementById("in5").value);

  let largest = 0,
    smallest = 10;
  while (n > 0) {
    let ld = n % 10;
    largest = Math.max(largest, ld);
    smallest = Math.min(smallest, ld);
    n = parseInt(n / 10);
  }

  document.getElementById("res5").value = largest - smallest;
}
