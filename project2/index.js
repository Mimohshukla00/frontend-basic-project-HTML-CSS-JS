function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value) / 100; // convert cm to meters

  if (isNaN(weight) || isNaN(height) || height === 0) {
    const bmiMessage = document.querySelector("#bmi-message");
    bmiMessage.textContent = "Please enter valid values for weight and height.";
    return;
  }

  let bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("bmi-result").textContent = bmi;

  let message = "";
  if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    message = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    message = "Overweight";
  } else {
    message = "Obesity";
  }

  document.getElementById("bmi-message").textContent = message;
}
