function sum() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let c = Number(document.getElementById("num3").value);

    let result = a + b + c;

    document.getElementById("result").innerHTML = "Sum = " + result;
}