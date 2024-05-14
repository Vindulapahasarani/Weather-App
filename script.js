
function searchWeather() {
    const apiKey = '5c702073e2b1be5c0e7ffb6630e1fb0b';
    const city = document.getElementById('city').value;

    if (!city) {
        alert("Please Enter a Correct City Name");
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    fetch(currentWeatherUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            displayWeather(data);

        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const cityInfoDiv = document.getElementById('City-info');
    const weatherInfoDiv = document.getElementById('Weather-info');
    const weatherIcon = document.getElementById('#WeatherIcon');
    const humidityElement = document.getElementById('Humidity-level');
    const WindSpeedElemenet = document.getElementById('Wind-speed-level');




    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(Number(data.main.temp) - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const humidityLevel = data.main.humidity;
        const windspeedlevel = data.wind.speed;

        console.log(windspeedlevel);
        console.log(humidityLevel);
        console.log(cityName);

        const temperatureHTML = `<p>${temperature}℃</p>`;

        const cityHTML = `<p>${cityName}</p>`;


        const weatherHtml = `<p>${description}</p>`;

        const humidityHTML = `<p>${humidityLevel}%</p>`;

        const windspeedHTML = `<p>${windspeedlevel}Kmph</p>`

        //var iconUrl = "D:\ICET Documents\Internet Technologies\Weather_App\images\cloudy (2).png"




        document.getElementById('WeatherIcon').src = ``;


        tempDivInfo.innerHTML = temperatureHTML;
        cityInfoDiv.innerHTML = cityHTML;
        humidityElement.innerHTML = humidityHTML;
        WindSpeedElemenet.innerHTML = windspeedHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.alt = description;

        showImage();
    }
}

function showImage() {
    const weatherIcon = document.getElementById('WeatherIcon');
    weatherIcon.style.display = 'block';
}
