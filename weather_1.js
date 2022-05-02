$(document).ready(function () {
  //variables//
  //searchbar
  const button = document.querySelector(".searchbtn");
  const inputValue = document.querySelector(".input");

  //CTA//

  const dateCTAEL = document.getElementById("dateCTA");
  const cityNameEL = document.getElementById("cityNameCTA");
  const temperatureCTAEL = document.getElementById("temperatureCTA");
  const humidityCTAEL = document.getElementById("humidityCTA");
  const windSpeedCTA = document.getElementById("windSpeedCTA");
  const uvIndexCTAEL = document.getElementById("uvIndexCTA");
  const imgCTAEL = document.getElementById("imgCTA");

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

    dateCTAEL.innerHTML =
      day + "," + "  " + months[month] + " " + date + ", " + " " + year;
  }, 1000);

  //Function that save user inputs in search bar//
  $("#searchbtn").on("click", function () {
    const searchValue = $("#searchbar").val();
    
    //Open Weather APIkey, Fetch Function and Current Weather//

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchValue +
        "&appid=389e99137584af0845e21489c7fa8c55" +
        "&units=imperial"
    )
      .then((response) => response.json())
      .then((data) => {
        const nameValue = data["name"];
        const tempValue = "Temperature: " + data["main"]["temp"] + " F";
        const humidityValue = "Humidity: " + data["main"]["humidity"] + "%";
        const windSpeedValue = "Wind Speed: " + data["wind"]["speed"] + " MPH";
        const { icon } = data.weather[0];
        const longitude = data["coord"]["lon"];
        const latitude = data["coord"]["lat"];

        cityNameCTA.innerHTML = nameValue;
        temperatureCTA.innerHTML = tempValue;
        humidityCTA.innerHTML = humidityValue;
        windSpeedCTA.innerHTML = windSpeedValue;
        document.querySelector(".imgCTA").src =
          "http://openweathermap.org/img/wn/" + icon + ".png";

        // Second Call to get UV Index//
        fetch(
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            latitude +
            "&lon=" +
            +longitude +
            "&units=imperial" +
            "&exclude=minutely,hourly" +
            "&appid=389e99137584af0845e21489c7fa8c55"
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const uviValue = data["current"]["uvi"];
            uvIndexCTA.innerHTML = "UV Index: " + uviValue;

            //Call to update Five Day Forecast//

            //dayOne
            const dayOne = data["daily"]["1"]["dt"];
            var date = new Date(dayOne * 1000).toDateString();;
            const dayOneTemp =
              "Temperature " + data["daily"]["1"]["temp"]["day"] + " F";
            const dayOneHumidity =
              "Humidity " + data["daily"]["1"]["humidity"] + "%";
            const dayOneIcon = data["daily"]["1"]["weather"]["0"]["icon"];

            document.getElementById("dayone").innerHTML = date;
            document.getElementById("temperatureone").innerHTML = dayOneTemp;
            document.querySelector(".imageOne").src =
              "http://openweathermap.org/img/wn/" + dayOneIcon + ".png";
            document.getElementById("humidityone").innerHTML = dayOneHumidity;

            //dayTwo
            const dayTwo = data["daily"]["2"]["dt"];
            var date = new Date(dayTwo * 1000).toDateString();
              
            const dayTwoTemp =
              "Temperature " + data["daily"]["2"]["temp"]["day"] + " F";
            const dayTwoHumidity =
              "Humidity " + data["daily"]["2"]["humidity"] + "%";
            const dayTwoIcon = data["daily"]["2"]["weather"]["0"]["icon"];

            document.getElementById("daytwo").innerHTML = date;
            document.getElementById("temperaturetwo").innerHTML = dayTwoTemp;
            document.querySelector(".imgtwo").src =
              "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png";
            document.getElementById("humiditytwo").innerHTML = dayTwoHumidity;

            //daythree
            const dayThree = data["daily"]["3"]["dt"];
            var date = new Date(dayThree * 1000).toDateString();;
            const dayThreeTemp =
              "Temperature " + data["daily"]["3"]["temp"]["day"] + " F";
            const dayThreeHumidity =
              "Humidity " + data["daily"]["3"]["humidity"] + "%";
            const dayThreeIcon = data["daily"]["3"]["weather"]["0"]["icon"];

            document.getElementById("daythree").innerHTML = date;
            document.getElementById("temperaturethree").innerHTML = dayThreeTemp;
            document.querySelector(".imgthree").src =
              "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png";
            document.getElementById("humiditythree").innerHTML = dayThreeHumidity;

            //dayfour
            const dayFour = data["daily"]["4"]["dt"];
            var date = new Date(dayFour * 1000).toDateString();;
            const dayFourTemp =
              "Temperature " + data["daily"]["4"]["temp"]["day"] + " F";
            const dayFourHumidity =
              "Humidity " + data["daily"]["4"]["humidity"] + "%";
            const dayFourIcon = data["daily"]["4"]["weather"]["0"]["icon"];

            document.getElementById("dayfour").innerHTML = date;
            document.getElementById("temperaturefour").innerHTML = dayFourTemp;
            document.querySelector(".imgfour").src =
              "http://openweathermap.org/img/wn/" + dayFourIcon + ".png";
            document.getElementById("humidityfour").innerHTML = dayFourHumidity;

            //dayfive
            const dayFive = data["daily"]["5"]["dt"];
            var day = new Date(dayFive*1000).toDateString();;
            
            const dayFiveTemp =
              "Temperature " + data["daily"]["5"]["temp"]["day"] + " F";
            const dayFiveHumidity =
              "Humidity " + data["daily"]["5"]["humidity"] + "%";
            const dayFiveIcon = data["daily"]["5"]["weather"]["0"]["icon"];

            document.getElementById("dayfive").innerHTML = date;
            document.getElementById("temperaturefive").innerHTML = dayFiveTemp;
            document.querySelector(".imgfive").src =
              "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png";
            document.getElementById("humidityfive").innerHTML = dayFiveHumidity;

            //local storage//
            localStorage.setItem("searchHistory", nameValue);
            const searchValue = localStorage.getItem("searchHistory");
            
          });
      });
  });
});
