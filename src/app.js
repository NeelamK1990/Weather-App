function displayTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "cf1ef184bc4f8c6749a14597b0b5efe6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
