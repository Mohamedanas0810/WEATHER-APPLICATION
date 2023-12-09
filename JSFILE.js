const city = document.querySelector('.sicon');
const inputvalue = document.querySelector('.inputvalue');
const APIKey = '694f2869a49a437f75763dac2ebcdc7b';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const Units = 'metric';
city.addEventListener("click", async function weatherdata() {
    var cityval = document.querySelector('.inputvalue');
    var cityvaluefinal = cityval.value;
    if (cityvaluefinal == "") {
        var wicon = document.getElementById("wicon");
        var degree = document.getElementById("degree");
        var humidityvalue = document.getElementById("humidity");
        var windspeedvalue = document.getElementById("windspeed");
        var cityvalue = document.getElementById("city");
        degree.innerText = "Enter your City Name";
        humidityvalue.innerText = "";
        windspeedvalue.innerText = "";
        wicon.src = 'Images/location.png';
        cityvalue.innerText = "";
    }
    else {
        try {
            var response = await fetch(URL + '?q=' + cityvaluefinal + '&appid=' + APIKey + '&units=' + Units);
            var datajson = await response.json();
            // console.log(datajson);
            const temperature = Math.round(datajson.main.temp) ;
            const humidity = datajson.main.humidity;
            const feelslike = datajson.main.feels_like;
            var Climate = datajson['weather'][0]['description'];
            const pressure = datajson.main.pressure;
            const windspeed = datajson.wind.speed;
            const iconval = datajson.weather[0].icon;
            var wicon = document.getElementById("wicon");
            var degree = document.getElementById("degree");
            degree.innerText = temperature  + "°C" + " - " + Climate;
            var cityvalue = document.getElementById("city");
            cityvalue.innerText = cityvaluefinal;
            var humidityvalue = document.getElementById("humidity");
            var windspeedvalue = document.getElementById("windspeed");
            humidityvalue.innerText = humidity + "%";
            windspeedvalue.innerText = windspeed + "Km/h";
            // var newicon = await fetch("https://openweathermap.org/img/wn/" + iconval + "@4x.png");
            // wicon.src = newicon.url;
            var img = "Images/" + Climate + ".png";
            wicon.src = img;


        }
        catch (e) {
            var wicon = document.getElementById("wicon");
            var degree = document.getElementById("degree");
            var humidityvalue = document.getElementById("humidity");
            var windspeedvalue = document.getElementById("windspeed");
            var cityvalue = document.getElementById("city");
            degree.innerText = "City not found";
            humidityvalue.innerText = "";
            windspeedvalue.innerText = "";
            wicon.src = 'Images/enter proper value.png';
            cityvalue.innerText = "";
        }
    }

})
inputvalue.addEventListener("keydown", async function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        var cityval = document.querySelector('.inputvalue');
        var cityvaluefinal = cityval.value;
        console.log(cityvaluefinal);
        if (cityvaluefinal == "") {
            var wicon = document.getElementById("wicon");
            var degree = document.getElementById("degree");
            var humidityvalue = document.getElementById("humidity");
            var windspeedvalue = document.getElementById("windspeed");
            var cityvalue = document.getElementById("city");
            degree.innerText = "Enter your City Name";
            humidityvalue.innerText = "";
            windspeedvalue.innerText = "";
            wicon.src = 'Images/location.png';
            cityvalue.innerText = "";
        }
        else {
            try {
                var response = await fetch(URL + '?q=' + cityvaluefinal + '&appid=' + APIKey + '&units=' + Units);
                var datajson = await response.json();
                // console.log(datajson);
                const temperature = Math.round(datajson.main.temp);
                const humidity = datajson.main.humidity;
                const feelslike = datajson.main.feels_like;
                var Climate = datajson['weather'][0]['description'];
                const pressure = datajson.main.pressure;
                const windspeed = datajson.wind.speed;
                const iconval = datajson.weather[0].icon;
                var wicon = document.getElementById("wicon");
                var degree = document.getElementById("degree");
                degree.innerText = temperature + "°C" + " - " + Climate;
                var cityvalue = document.getElementById("city");
                cityvalue.innerText = cityvaluefinal;
                var humidityvalue = document.getElementById("humidity");
                var windspeedvalue = document.getElementById("windspeed");
                humidityvalue.innerText = humidity + "%";
                windspeedvalue.innerText = windspeed + "Km/h";
                var newicon = await fetch("https://openweathermap.org/img/wn/" + iconval + "@4x.png");
                wicon.src = newicon.url;


            }
            catch (e) {
                var wicon = document.getElementById("wicon");
                var degree = document.getElementById("degree");
                var humidityvalue = document.getElementById("humidity");
                var windspeedvalue = document.getElementById("windspeed");
                var cityvalue = document.getElementById("city");
                degree.innerText = "City not found";
                humidityvalue.innerText = "";
                windspeedvalue.innerText = "";
                wicon.src = 'Images/enter proper value.png';
                cityvalue.innerText = "";
            }
        }
    }
})


