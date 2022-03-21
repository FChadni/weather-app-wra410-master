// DEFINE UI ELEMENTS
// const temperature = document.querySelector('#temp')
// const city = document.querySelector('#cityname')
// const weatherDescription = document.querySelector('#description')
// const weatherIcon = document.querySelector('#icon')
// const searchIcon = document.getElementById('search')

const apiKey = 'cdc611cf09764dbdf027930621632644'

const infocontainer = document.querySelector('.info-container');
// infocontainer.style.display = "none"

const cityInput = document.getElementById('input-city');

document.getElementById('search').addEventListener('click', () =>{
  if(infocontainer.style.display === "none"){
    infocontainer.style.display === "flex";
  }else{
    infocontainer.style.display === "none";
  }
})
cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather();
  }
})

document.getElementById('search').addEventListener('click', ()=>{
  let searchT = document.getElementById('input-city').value;
  if(searchT)
    getWeather(searchT);
})

function getWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`)
      .then(data => {
        return data.json();
      }).then(displayResults);
}

function displayResults(data){
  console.log(data);
  let city = document.getElementById('cityname');
  city.innerText = `${data.name}, ${data.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.date')
  date.innerText = dateBuilder(now);

  let temp = document.getElementById('temp');
  temp.innerHTML = `${Math.floor(data.main.temp)}<span>°F</span>`;

  let weatherIcon = document.getElementById('icon');
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  let description = document.getElementById('description');
  description.innerText = data.weather[0].description;

  let low = document.querySelector('.low_num');
  low.innerText = `${Math.floor(data.main.temp_min)}°F`;

  let hi = document.querySelector('.hi_num');
  hi.innerText = `${Math.floor(data.main.temp_max)}°F`;

  let feels_like = document.querySelector('.feels_like_num');
  feels_like.innerText = `${Math.floor(data.main.feels_like)}%`;

  let humidity = document.querySelector('.humidity_num');
  humidity.innerHTML = `${Math.floor(data.main.humidity)}%`;

  let wind = document.querySelector('.wind_num');
  wind.innerHTML = `${Math.floor(data.wind.speed)} mps`;

  let visibility = document.querySelector('.visibility_num');
  visibility.innerHTML = `${Math.floor(data.visibility)} m`;

}

function dateBuilder(d){
  let months = ["January", "February", "March", "April","May","June","July","August","September","October",
    "November", "December"];
  let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

var toggle = document.getElementById('toggle');
toggle.onclick = function (){
  document.body.classList.toggle("dark-mode");
  // if(document.body.classList.contains("dark-mode")){
  //   toggle.src = "image/toggle_light.png"
  // }else{
  //   toggle.src = "image/toggle_dark.png"
  // }
}

// function getWeather(query) {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${apiKey}`)
//       .then(data => {
//         return data.json();
//       }).then(displayResults);
  // fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=imperial&appid=${apiKey}`)
  //   .then((res) => {
  //     const data = res.json()
  //     return data
  //   }).then((data) => {
  //     city.textContent = 'Weather in ' + data.name
  //     const test = Math.ceil(data.main.temp)
  //     temperature.textContent = test + '°F'
  //     weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  //     console.log(data.weather[0].icon)
  //     weatherDescription.textContent = data.weather[0].description
  //     console.log(data)
  //   })
// }

// function displayResults(){
//   console.log(data);
//   let city = document.querySelector('#cityname')
//   city.innerText = `${data.name}, ${data.sys.country}`
//   // city.textContent = 'Weather in ' + data.name
//   // const test = Math.ceil(data.main.temp)
//   // temperature.textContent = test + '°F'
//   // weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
//   // console.log(data.weather[0].icon)
//   // weatherDescription.textContent = data.weather[0].description
//   // console.log(data)
// }


