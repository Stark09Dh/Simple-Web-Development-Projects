const apikey = "91ae19fc2949857a60c293cfdce9f998";

const inpt = document.getElementById("txt-input");

const button = document.getElementById("btn");

async function show() {
  const city = inpt.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const response = await fetch(url);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    let type = data.weather[0].main;
    switch (type) {
      case "Clear":
        document.querySelector(".weather-icon").src = "clear.png";
        break;
      case "Haze":
        document.querySelector(".weather-icon").src = "Haze.png";
        break;
      case "Clouds":
        document.querySelector(".weather-icon").src = "clouds.png";
        break;
      case "Drizzle":
        document.querySelector(".weather-icon").src = "drizzle.png";
        break;
      case "Mist":
        document.querySelector(".weather-icon").src = "mist.png";
        break;
      case "Snow":
        document.querySelector(".weather-icon").src = "snow.png";
        break;
      case "Rain":
        document.querySelector(".weather-icon").src = "rain.png";
        break;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

button.addEventListener("click", show);
