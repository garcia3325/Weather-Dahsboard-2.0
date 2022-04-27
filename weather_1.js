$(document).ready(function () {

  //variables//
//searchbar
const button = document.querySelector('.searchbtn');
const inputValue = document.querySelector('.input');

//CTA//

const dateCTAEL = document.getElementById("dateCTA");
const cityNameEL = document.getElementById("cityNameCTA");
const temperatureCTAEL = document.getElementById("temperatureCTA");
const humidityCTAEL = document.getElementById("humidityCTA");
const windSpeedCTA = document.getElementById("windSpeedCTA");
const uvIndexCTA = document.getElementById("uvIndexCTA");
const imgCTA = document.getElementById("imgCTA");

//Card 1//
const dateOne = document.getElementById("dayone");
const imgOne = document.getElementById("imgone");
const temperatureOne = document.getElementById("temperatureone");
const humidityOne = document.getElementById("humidityone");

//Card 2//
const dateTwo = document.getElementById("daytwo");
const imgTwo = document.getElementById("imgtwo");
const temperatureTwo = document.getElementById("temperaturetwo");
const humidityTwo = document.getElementById("humiditytwo");

//Card 3//
const dateThree = document.getElementById("daythree");
const imgThree = document.getElementById("imgthree");
const temperatureThree = document.getElementById("temperaturethree");
const humidityThree = document.getElementById("humiditythree");

//Card 4//
const dateFour = document.getElementById("dayfour");
const imgFour = document.getElementById("imgfour");
const temperatureFour = document.getElementById("temperaturefour");
const humidityFour = document.getElementById("humidityfour");

//Card 5//
const dateFive = document.getElementById("dayfive");
const imgFive = document.getElementById("imgfive");
const temperatureFive = document.getElementById("temperaturefive");
const humidityFive = document.getElementById("humidityfive");

//Create and append Date based on user browser to page//

setInterval(() => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  const month = new Date().getMonth();
  const date = new Date().getDate();
  const year = new Date().getFullYear();

  dateCTAEL.innerHTML = day + ","+"  " + months[month] + " " + date +", "+" "+ year;
}, 1000);

//Function that save user inputs in search bar//
  $("#searchbtn").on("click", function () {
    const searchValue = $("#searchbar").val();
    console.log(searchValue);
    

//APIkey and Fetch Function/

button.addEventListener('click',function(){
 fetch ("https://api.openweathermap.org/data/2.5/weather?q="+searchValue +'&appid=389e99137584af0845e21489c7fa8c55')
    .then(response => response.json())
    .then (data => console.log(data))

    .catch(err => alert("Wrong City Name")) 
})

  })
})
