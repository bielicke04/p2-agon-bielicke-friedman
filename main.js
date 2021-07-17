
//***Weather ****/

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

var weather = {
  "apiKey": "c9e8a1e5219afb02e36d02feb8ea798b",
  fetchWeather: function (city) {
      fetch("http://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=imperial&appid="
      + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function(data) {
      var { name } = data;
      var { country } = data.sys;
      var {icon, description } = data.weather[0];
      var { temp, feels_like, humidity} = data.main;
      //console.log(name, country, icon, description, temp, feels_like, humidity)
      document.querySelector(".city").innerText = "Weather : " + name + ", " + country;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°";
      document.querySelector(".feels").innerText = "Feels like: " + feels_like + "°";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  },
  search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
      weather.search();
  }
});

//weather.fetchWeather("St Louis");



