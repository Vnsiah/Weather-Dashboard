//I will be creating  a weather dashboard with form inputs
//when a city is search, this should show the current and future condition for that city
  

//setting global variables for API keys

let APIkey = "575a1c7b796e55e547288cbfb76ff8e8";
let currentCity = "";
let lastCity = "";
let searchButton = $("#search-button");
let searchCity = $("#search-city")

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIkey}`)
    //  .then(response => response.json())
    //  .then(data => {

    //     console.log(data);

 


//creating current condition
// let getCurrentConditions = (event) => 
//     let city = $('#search-city').val();
//     currentCity = $('#search-city').val();


// }
