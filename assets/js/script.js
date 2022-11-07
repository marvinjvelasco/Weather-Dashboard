var APIKey = "6e147552d80202b55f66d7edcf4df9d0"

fetch('api.openweathermap.org/data/2.5/weather')
  .then((response) => response.json())
  .then((data) => console.log(data));