//I will be creating  a weather dashboard with form inputs
//when a city is search, this should show the current and future condition for that city


//setting global variables

let searchCity = $("#search-city");
let APIkey = "575a1c7b796e55e547288cbfb76ff8e8";
let btn = document.querySelector('.btn');
let localStoreList = [];
let todayEl = document.querySelector("#today")
let tempEl = document.querySelector("#temperature")
let humidityEl = document.querySelector("#humidity")
let windEl = document.querySelector("#wind-speed")
let UVEl = document.querySelector("#uv")



// using fetch to find a city (create an eventlisterner for the fetch)

function getWeather(srchInput) {
          console.log("INPUT: ", srchInput);
          fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${srchInput}&limit=5&appid=${APIkey}`)
               .then(response => response.json())
               .then(cities => {
                    //chosing a city from the cities found in the arrays
                    let firstcity = cities[0]
                    console.log(firstcity.lat);
                    console.log(firstcity.lon);
     
                    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstcity.lat}&lon=${firstcity.lon}&appid=${APIkey}&units=metric`)
     
     
               })
     
     
               .then(response => response.json())
               .then(data => {
               //filter the date dt_text for the 0 hour
               
               getFiveDays(data)
                    console.log(data)
                        console.log(data.list[8].weather[0]); 
                       tempEl.textContent =  ` ${data.list[0].main.temp}`;
                       humidityEl.textContent = ` ${data.list[0].main.humidity}`;
                       windEl.textContent = ` ${data.list[0].wind.speed}`;
                     
                      
     
     
               })
          localStoreList.push(srchInput)
          for (let i = 0; i < localStoreList.length; i++) {
               localStorage.setItem(i, JSON.stringify(localStoreList[i]));
          }
     }

btn.addEventListener('click', function (event) {
     event.preventDefault();
     // const inputVal = input.value
     var srchInput = document.querySelector("#search-input").value;
     console.log("CLICK");
     getWeather(srchInput);
})


function getFiveDays(response) {
     var startDtProp = dayjs().add(1, 'day').startOf('day').unix();
     var endDtProp = dayjs().add(6, 'day').startOf('day').unix();

     console.log(response)

     for (let i = 0; i < response.length; i++) {

          if (response[i].dt >= startDtProp && response[i].dt < endDtProp) {

               if (response[i].dt_txt.slice(11,13) == "12") {
                    console.log("RESPONSE: ", response[i].dt_txt.slice(11,13));
                    console.log("RESPONSE LIST: ", response[i]);
                    getWeather(response[i])
               }
          }
     }
}



// var getCity = localStorage.getItem()
var srchedCityList = document.querySelector("#searched-city-container");
var listBtn = document.createElement("button");
// listBtn.innerHTML = getCity;
srchedCityList.appendChild(listBtn);





