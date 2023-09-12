var peso = 30;
var altura = 1.5;
var BMI = peso / (altura ** 2);

if (BMI == 18.5) {
    console.log("bajo peso");
} else if (18.5 < BMI && BMI < 24.9) {
    console.log("normal");
} else if (25 < BMI && BMI < 29.9) {
    console.log("sobrepeso");
} else {
    console.log("obesidad")
}