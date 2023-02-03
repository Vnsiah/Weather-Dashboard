//I will be creating  a weather dashboard with form inputs
//when a city is search, this should show the current and future condition for that city


//setting global variables

let searchCity = $("#search-city");
let APIkey = "575a1c7b796e55e547288cbfb76ff8e8";
let btn = document.querySelector('.btn');
let localStoreList = [];
let todayEl = document.querySelector("#today")
let tempEl = document.querySelector("#temperature")


// using fetch to find a city (create an eventlisterner for the fetch)

btn.addEventListener('click', function (event) {
     event.preventDefault();
     // const inputVal = input.value
     console.log("CLICK");
     var srchInput = document.querySelector("#search-input").value;
     console.log("INPUT: ", srchInput);
     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${srchInput}&limit=5&appid=${APIkey}`)
          .then(response => response.json())
          .then(cities => {
               //chosing a city from the cities found in the arrays
               let firstcity = cities[0]
               console.log(firstcity.lat);
               console.log(firstcity.lon);

               return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstcity.lat}&lon=${firstcity.lon}&appid=${APIkey}&units=metric`)


          })


          .then(response => response.json())
          .then(data => {
               console.log(data)
               //     console.log(data.list[8].weather[0]); 
                  tempEl.textContent =  ` ${data.list[0].main.temp}`;


          })
     localStoreList.push(srchInput)
     for (let i = 0; i < localStoreList.length; i++) {
          localStorage.setItem(i, JSON.stringify(localStoreList[i]));
     }

})


// var getCity = localStorage.getItem()
var srchedCityList = document.querySelector("#searched-city-container");
var listBtn = document.createElement("button");
// listBtn.innerHTML = getCity;
srchedCityList.appendChild(listBtn);





