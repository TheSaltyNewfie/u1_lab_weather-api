const information = document.querySelector('#information')
const api_key = document.querySelector('#api-key')
const city = document.querySelector('#postal-code')
const submit = document.querySelector('#searchButton')

async function getInfo() {
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key.value}&q=${city.value}&aqi=no`)
    console.log(res.data)

    information.innerHTML = `
        <div id="location-icon-area">
            <h2>${res.data.location.name}</h2>
            <img src="${res.data.current.condition.icon}" alt="weather-icon">
            <p>${res.data.current.condition.text}</p>
        </div>
        <h3>${res.data.location.tz_id}</h3>
        <p>Temperature: ${res.data.current.temp_c}°C</p>
        <p>Feels Like: ${res.data.current.feelslike_c}°C</p>
        <p>Wind: ${res.data.current.wind_kph} kph</p>
        <p>Humidity: ${res.data.current.humidity}%</p>
    `
}

submit.addEventListener('click', getInfo)

