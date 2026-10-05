function printNaturalNums() {
  let n = parseInt(document.getElementById("in1").value);

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  let res = sum / n;
  document.getElementById("res1").value = res;
}

function sumSquares() {
  let n = parseInt(document.getElementById("in2").value);

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }

  document.getElementById("res2").value = sum;
}

function sumCubes() {
  let n = parseInt(document.getElementById("in3").value);

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i * i;
  }

  document.getElementById("res3").value = sum;
}

function powerOfNum() {
  let base = parseInt(document.getElementById("base").value);
  let pow = parseInt(document.getElementById("pow").value);

  let res = 1;
  for (let i = 1; i <= pow; i++) {
    res *= base;
  }

  document.getElementById("res4").value = res;
}

function fib() {
  let n = parseInt(document.getElementById("in5").value);

  let a = 0;
  let b = 1;
  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i != n) {
      res = res + a + ", ";
      let c = a + b;
      a = b;
      b = c;
    } else {
      res += a + ".";
    }
  }

  document.getElementById("res5").value = res;
}

function series1() {
  let n = parseInt(document.getElementById("in6").value);

  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      res += i + ", ";
    } else if (i != n) {
      res = res + "1/" + i + ", ";
    } else {
      res = res + "1/" + i + ".";
    }
  }

  document.getElementById("res6").value = res;
}

function series2() {
  let n = parseInt(document.getElementById("in7").value);

  let res = "";
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num = num * 10 + 1;
    if (i != n) {
      res += num + ", ";
    } else {
      res += num + ".";
    }
  }

  document.getElementById("res7").value = res;
}

function series3() {
  let n = parseInt(document.getElementById("in8").value);

  let res = "";
  let num = 1;
  for (let i = 1; i <= n; i++) {
    if (i != n) {
      res += num + ", ";
      num *= 3;
    } else {
      res += num + ".";
    }
  }

  document.getElementById("res8").value = res;
}

function avg() {
  let n = parseInt(document.getElementById("in9").value);

  let sum = 0,
    count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
      sum += i;
    }
  }
  document.getElementById("res9").value = sum / count;
}
