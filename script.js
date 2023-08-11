const convertButton = document.getElementById('convertButton');
const temperatureInput = document.getElementById('temperatureInput');
const unitSelect = document.getElementById('unitSelect');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    resultElement.textContent = 'Invalid input';
    return;
  }

  const selectedUnit = unitSelect.value;

  switch (selectedUnit) {
    case 'celsius':
      resultElement.textContent = convertToFahrenheit(temperature) + ' °F / ' + convertToKelvin(temperature) + ' K';
      break;
    case 'fahrenheit':
      resultElement.textContent = convertToCelsius(temperature) + ' °C / ' + convertToKelvin(convertToCelsius(temperature)) + ' K';
      break;
    case 'kelvin':
      resultElement.textContent = convertToCelsius(convertFromKelvin(temperature)) + ' °C / ' + convertFromKelvin(temperature) + ' K';
      break;
    default:
      resultElement.textContent = 'Invalid unit';
  }
});

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function convertToKelvin(celsius) {
  return celsius + 273.15;
}

function convertFromKelvin(kelvin) {
  return kelvin - 273.15;
}
