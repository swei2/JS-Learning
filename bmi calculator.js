function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.floor(bmi);
    if (bmi < 18.5){
        return "Your BMI is " + bmi + ", so you are underweight";
    }
    if (bmi > 18.5 && bmi < 24.9){
        return "Your BMI is " + bmi + ", so you have a normal weight";
    }
    else {
        return "Your BMI is " + bmi + ", so you are overweight";
    }
    }
    
var test = bmiCalculator(50, 1.68);
console.log(test);
