function getWeather(e) {
    var getCity = document.querySelector("#city");
    var getApi = "https://api.weatherapi.com/v1/current.json?key=7d749c5abe52471ab2210801220804&q=" + getCity.value + "&aqi=no";
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        document.querySelector("#cityName").textContent = data.location.name
        document.querySelector("#temp").textContent = data.current.temp_f
        document.querySelector(".temperature-description").textContent = data.current.condition.text
        var iconImg = 'http:' + data.current.condition.icon
        document.querySelector(".Iconimg").src = iconImg;
        document.querySelector(".location-timezone").textContent = data.location.localtime
    })
}
function get2dayforecast(e) {
    var getForecast = document.getElementById("city");
    console.log(getForecast.value);
    var getApi =
        "http://api.weatherapi.com/v1/forecast.json?key=7d749c5abe52471ab2210801220804&q=" +
        getForecast.value +
        "&days=5&aqi=no&alerts=no";
    fetch(getApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // Example of Looping Data
            for (let i = 0; i < data.forecast.forecastday.length; i++) {
                console.log(data.forecast.forecastday[i].day);
            }
            // Day 1 Date
            document.querySelector(".day1").textContent =
                data.forecast.forecastday[1].date;
            // Day 2 Date
            document.querySelector(".day2").textContent =
                data.forecast.forecastday[2].date;
        });
    then((data) => {
        console.log(data);
        // Example of Looping Data
        for (let i = 0; i < data.forecast.forecastday.length; i++) {
            console.log(data.forecast.forecastday[i].day);
        }
        document.querySelector(".temp1high").textContent =
            data.forecast.forecastday[1].maxtemp_f;
    });
}
document.querySelector("#search").addEventListener("click", getWeather, get2dayforecast)
document.querySelector("#searchword").addEventListener("click", getWord)
function getWord(e) {
    var getRandomfact = document.querySelector(".word");
    console.log(getRandomfact)
    var getApi = "https://random-word-api.herokuapp.com/word"
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.querySelector(".word").textContent = data
    }
    )
}