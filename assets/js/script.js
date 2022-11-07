// var apiKey = "6e147552d80202b55f66d7edcf4df9d0"

// fetch('api.openweathermap.org/data/2.5/weather')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


//  object for storing functions and var to use api
let weather = {
  // api key required to access openweathermap endpoint
  "apiKey": "6e147552d80202b55f66d7edcf4df9d0",
  // fetch and promises that return the data
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
    .then((Response) => Response.json())
    .then((data) => this.displayWeather(data));
  },
  // function that will display the weather
  displayWeather: function(data) {
    // Retrieving the data that is requested from api and making them variables
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp,humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    // These queryselectors will place the vars above onto the page
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
  }
}