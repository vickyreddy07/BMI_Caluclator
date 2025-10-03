function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let results = document.getElementById("results");

    if (!weight || !height || weight <= 0 || height <= 0) {
        results.innerHTML = "⚠️ Please enter valid values!";
        return;
    }

    height = height / 100; // convert cm to meters
    let bmi = (weight / (height * height)).toFixed(1);

    let message = "";
    if (bmi < 18.5) message = `Your BMI is ${bmi} → Underweight 😕`;
    else if (bmi <= 24.9) message = `Your BMI is ${bmi} → Healthy 🥦`;
    else if (bmi <= 29.9) message = `Your BMI is ${bmi} → Overweight ⚠️`;
    else message = `Your BMI is ${bmi} → Obese 🚨`;

    results.innerHTML = message;
}
