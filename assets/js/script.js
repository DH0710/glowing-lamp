function getWeather(event) {
    var getCity = document.getElementById("city");
    console.log(getCity.value)
    const getApi = "https://api.weatherapi.com/v1/current.json?key=7d749c5abe52471ab2210801220804&q=" + getCity.value + "&aqi=no";
    fetch(getApi).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        document.querySelector("#cityName").textContent = data.location.name
        document.querySelector("#temp").textContent = data.current.temp_f
        document.querySelector(".temperature-description").textContent = data.current.condition.text
        var iconImg = 'http:' + data.current.condition.icon
        document.querySelector(".Iconimg").src = iconImg;
        document.querySelector(".location-timezone").textContent = data.location.localtime
    })
    
    
    function get5dayforecast(event) {
        var getForecast = document.getElementById("city");
        console.log(getCity.value)
        var getApi2 = "http://api.weatherapi.com/v1/forecast.json?key=7d749c5abe52471ab2210801220804&q=" + getCity.value + "&days=5&aqi=no&alerts=no";
        fetch(getForecast).then((response) => {
            return response.json()
        }).then((data2) => {
            console.log(data2);
            document.querySelector(".future").textContent = data2.forecast.forecastday[0].day.condition
        })


        function wordDef(event) {
            var getRandomworddef = document.getElementById("word");
            console.log(wordDef.value)
            var getApi3 = ""
            fetch(getApi3).then((response) => {
                return response.json()
            }).then((data3) => {
                console.log(data3)
                document.querySelector()

            })
        




}

    }


    document.getElementById("search").addEventListener("click", getWeather, get5dayforecast)
    document.getElementById("search")
}

