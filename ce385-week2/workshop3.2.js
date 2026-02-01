function calculateBMI(weight,height) {
    let bmiValue = weight / (height * height);

    let bmi = bmiValue.toFixed(2);

    let category = "";

    if (bmiValue < 18.5) {
        category = "ผอม";
    } else if (bmiValue < 25) {
        category = "ปกติ";
    } else if (bmiValue < 30) {
        category = "อ้วน"
    } else {
        category = "อ๊วนอ้วน";
    }

    return {
        bmi: bmi,
        category: category
    };
}

console.log(calculateBMI(70,1.75));
console.log(calculateBMI(40,1.80));
console.log(calculateBMI(100,1.75));