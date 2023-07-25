const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0fc0d3f6a9msh83aca0b5420b605p1cfe9bjsn1c4066e2e8c4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) => {
    cityname.innerHTML = city
    fetch(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          cityname.innerHTML = city
          cloud_pct.innerHTML = response.cloud_pct
          temp.innerHTML = response.temp
          if(response.temp<10){
    
            document.getElementById("bg").style.backgroundImage = "url('Winter.jpg')";
        
          }
          feels_like.innerHTML = response.feels_like
          humidity.innerHTML = response.humidity
          max_temp.innerHTML = response.max_temp
          min_temp.innerHTML = response.min_temp
           wind_degrees.innerHTML = response.wind_degrees
          wind_speed.innerHTML = response.wind_speed
        })
        .catch((err) => console.error(err));
}
  
let submit = document.getElementById("submit")
let search = document.getElementById("search")
let bg = document.getElementById("bg")
 submit.addEventListener("click" ,(e)=>{
    e.preventDefault()
    getweather(search.value)
    search.value = ""
  })

  getweather("Chennai")