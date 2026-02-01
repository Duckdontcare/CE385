let sumEven = 0;

for (let i = 2; i <= 50; i += 2) {
    sumEven += i;
}

let productOdd = 1;

for (let i = 1; i <= 10; i += 2) {
    productOdd *= i;
}

console.log("ผลรวมเลขคู่ 2-50 = ", sumEven);
console.log("ผลรวมเลขคู่ 1-10 = ", productOdd);