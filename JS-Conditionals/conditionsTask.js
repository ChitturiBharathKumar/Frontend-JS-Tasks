// ========================================
// IF - ELSE
// ========================================


// 1. Check whether a number is a 3-digit number

function threeDigit() {

    let n = parseInt(document.getElementById("in1").value);

    if (n >= 100 && n <= 999 || n <= -100 && n >= -999) {
        document.getElementById("res1").value = "3-digit number";
    } else {
        document.getElementById("res1").value = "Not a 3-digit number";
    }
}


// 2. Check whether number is divisible by both 3 and 5

function divisibleBy3And5() {

    let n = parseInt(document.getElementById("in2").value);

    if (n % 3 == 0 && n % 5 == 0) {
        document.getElementById("res2").value =
            "Divisible by both 3 and 5";
    } else {
        document.getElementById("res2").value =
            "Not divisible by both 3 and 5";
    }
}


// 3. Check whether triangle is valid

function validTriangle() {

    let a = parseInt(document.getElementById("side1").value);
    let b = parseInt(document.getElementById("side2").value);
    let c = parseInt(document.getElementById("side3").value);

    if (a + b > c && b + c > a && a + c > b) {
        document.getElementById("res3").value =
            "Valid Triangle";
    } else {
        document.getElementById("res3").value =
            "Invalid Triangle";
    }
}


// 4. Check whether number is a multiple of 10

function multipleOf10() {

    let n = parseInt(document.getElementById("in4").value);

    if (n % 10 == 0) {
        document.getElementById("res4").value =
            "Multiple of 10";
    } else {
        document.getElementById("res4").value =
            "Not a multiple of 10";
    }
}



// ========================================
// IF - ELSE IF - ELSE
// ========================================


// 1. Type of Triangle

function triangleType() {

    let a = parseInt(document.getElementById("t1").value);
    let b = parseInt(document.getElementById("t2").value);
    let c = parseInt(document.getElementById("t3").value);

    if (a == b && b == c) {

        document.getElementById("res5").value =
            "Equilateral Triangle";

    } else if (a == b || b == c || a == c) {

        document.getElementById("res5").value =
            "Isosceles Triangle";

    } else {

        document.getElementById("res5").value =
            "Scalene Triangle";
    }
}


// 2. Electricity Bill

function electricityBill() {

    let units = parseInt(document.getElementById("units").value);
    let bill;

    if (units <= 100) {

        bill = units * 2;

    } else if (units <= 200) {

        bill = units * 3;

    } else if (units <= 300) {

        bill = units * 5;

    } else {

        bill = units * 7;
    }

    document.getElementById("res6").value =
        "₹" + bill;
}


// 3. Age Category

function ageCategory() {

    let age = parseInt(document.getElementById("age").value);

    if (age < 13) {

        document.getElementById("res7").value =
            "Child";

    } else if (age <= 19) {

        document.getElementById("res7").value =
            "Teenager";

    } else if (age <= 59) {

        document.getElementById("res7").value =
            "Adult";

    } else {

        document.getElementById("res7").value =
            "Senior Citizen";
    }
}


// 4. Shopping Discount

function discount() {

    let amount = parseInt(document.getElementById("amount").value);
    let discount;

    if (amount < 1000) {

        discount = 0;

    } else if (amount < 5000) {

        discount = 10;

    } else if (amount < 10000) {

        discount = 20;

    } else {

        discount = 30;
    }

    let discountAmount = amount * discount / 100;
    let finalAmount = amount - discountAmount;

    document.getElementById("res8").value =
        "Discount: " + discount + "%, Final Amount: ₹" + finalAmount;
}


// 5. Season Based on Month

function season() {

    let month = parseInt(document.getElementById("month").value);

    if (month >= 3 && month <= 5) {

        document.getElementById("res9").value =
            "Spring";

    } else if (month >= 6 && month <= 8) {

        document.getElementById("res9").value =
            "Summer";

    } else if (month >= 9 && month <= 11) {

        document.getElementById("res9").value =
            "Autumn";

    } else if (month == 12 || month == 1 || month == 2) {

        document.getElementById("res9").value =
            "Winter";

    } else {

        document.getElementById("res9").value =
            "Invalid Month";
    }
}


// 6. Leap Year

function leapYear() {

    let year = parseInt(document.getElementById("year").value);

    if (year % 400 == 0) {

        document.getElementById("res10").value =
            "Leap Year";

    } else if (year % 4 == 0 && year % 100 != 0) {

        document.getElementById("res10").value =
            "Leap Year";

    } else {

        document.getElementById("res10").value =
            "Not a Leap Year";
    }
}



// ========================================
// NESTED IF
// ========================================


// 1. Blood Donation Eligibility

function bloodDonation() {

    let age = parseInt(document.getElementById("bloodAge").value);
    let weight = parseInt(document.getElementById("weight").value);

    if (age >= 18 && age <= 60) {

        if (weight > 50) {

            document.getElementById("res11").value =
                "Eligible for Blood Donation";

        } else {

            document.getElementById("res11").value =
                "Not Eligible: Weight should be above 50 kg";
        }

    } else {

        document.getElementById("res11").value =
            "Not Eligible: Age should be between 18 and 60";
    }
}


// 2. Student Grade

function studentGrade() {

    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);
    let m3 = parseInt(document.getElementById("m3").value);
    let m4 = parseInt(document.getElementById("m4").value);

    if (m1 >= 35 && m2 >= 35 && m3 >= 35 && m4 >= 35) {

        let avg = (m1 + m2 + m3 + m4) / 4;

        if (avg >= 90) {

            document.getElementById("res12").value = "Grade A";

        } else if (avg >= 80) {

            document.getElementById("res12").value = "Grade B";

        } else if (avg >= 70) {

            document.getElementById("res12").value = "Grade C";

        } else if (avg >= 60) {

            document.getElementById("res12").value = "Grade D";

        } else {

            document.getElementById("res12").value = "Grade E";
        }

    } else {

        document.getElementById("res12").value =
            "Failed in one or more subjects";
    }
}


// 3. Scholarship Eligibility

function scholarship() {

    let age = parseInt(document.getElementById("scholarAge").value);
    let score = parseInt(document.getElementById("score").value);

    if (age > 18) {

        if (score > 86) {

            document.getElementById("res13").value =
                "Eligible for Scholarship";

        } else {

            document.getElementById("res13").value =
                "Not Eligible: Score should be above 86";
        }

    } else {

        document.getElementById("res13").value =
            "Not Eligible: Age should be above 18";
    }
}