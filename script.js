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
    get2dayforecast();
}
function get2dayforecast(event) {
    var getForecast = document.getElementById("city");
    console.log(getForecast.value)
    var getApi = "http://api.weatherapi.com/v1/forecast.json?key=7d749c5abe52471ab2210801220804&q=" + getForecast.value + "&days=5&aqi=no&alerts=no"
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.querySelector(".highValues").textContent = data.forecast.forecastday
        document.querySelector(".lowValues").textContent = data.forecast.forecastday
    })
}
function getDef(event) {
    var getRandomword = document.getElementById("word");
    console.log(getRandomword.value)
    var getApi = "https://api.dictionaryapi.dev/api/v2/entries/en/word"
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    })
}
document.querySelector("#search").addEventListener("click", getWeather, get2dayforecast)