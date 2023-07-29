const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0fc0d3f6a9msh83aca0b5420b605p1cfe9bjsn1c4066e2e8c4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) => {
  cityname.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cityname.innerHTML = city;
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      if (response.temp < 10) {
        document.getElementById("bg").style.backgroundImage =
          "url('Winter.jpg')";
      }
      if (response.temp < 10) {
        document.getElementById("table").style =
          "color:whitesmoke ;";
      }
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

let submit = document.getElementById("submit");
let search = document.getElementById("search");
let bg = document.getElementById("bg");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(search.value);
  search.value = "";
});

getweather("Chennai");

const getweather2 = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct2.innerHTML = response.cloud_pct;
      temp2.innerHTML = response.temp;
      feels_like2.innerHTML = response.feels_like;
      humidity2.innerHTML = response.humidity;
      max_temp2.innerHTML = response.max_temp;
      min_temp2.innerHTML = response.min_temp;
      wind_degrees2.innerHTML = response.wind_degrees;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getweather2("Delhi");

const getweather3 = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct3.innerHTML = response.cloud_pct;
      temp3.innerHTML = response.temp;
      feels_like3.innerHTML = response.feels_like;
      humidity3.innerHTML = response.humidity;
      max_temp3.innerHTML = response.max_temp;
      min_temp3.innerHTML = response.min_temp;
      wind_degrees3.innerHTML = response.wind_degrees;
      wind_speed3.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getweather3("Kolkata")

const getweather4 = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct4.innerHTML = response.cloud_pct;
      temp4.innerHTML = response.temp;
      feels_like4.innerHTML = response.feels_like;
      humidity4.innerHTML = response.humidity;
      max_temp4.innerHTML = response.max_temp;
      min_temp4.innerHTML = response.min_temp;
      wind_degrees4.innerHTML = response.wind_degrees;
      wind_speed4.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getweather4("Bengaluru")
const getweather5 = (city) => {
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct5.innerHTML = response.cloud_pct;
      temp5.innerHTML = response.temp;
      feels_like5.innerHTML = response.feels_like;
      humidity5.innerHTML = response.humidity;
      max_temp5.innerHTML = response.max_temp;
      min_temp5.innerHTML = response.min_temp;
      wind_degrees5.innerHTML = response.wind_degrees;
      wind_speed5.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

getweather5("Mumbai")