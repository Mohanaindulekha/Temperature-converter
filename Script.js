function convertToCelsius() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitResult = document.getElementById("fahrenheit-result");

  if (celsiusInput.value === "") {
    alert("Please enter a temperature in Celsius.");
    return;
  }

  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9/5) + 32;

  fahrenheitResult.textContent = fahrenheit.toFixed(2) + "°F";
}

function convertToFahrenheit() {
  var fahrenheitInput = document.getElementById("fahrenheit");
  var celsiusResult = document.getElementById("celsius-result");

  if (fahrenheitInput.value === "") {
    alert("Please enter a temperature in Fahrenheit.");
    return;
  }

  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celsius = (fahrenheit - 32) * 5/9;

  celsiusResult.textContent = celsius.toFixed(2) + "°C";
}
