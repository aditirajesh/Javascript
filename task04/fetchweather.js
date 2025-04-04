function getweather() {
    let city = document.getElementById("city").value;
    const apikey = '9b5bd2cd0c808cd58f2673a9a5a51a4b';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(res => res.json())
        .then(data => {

            if (data.cod !== 200) {
                document.getElementById("weather-details").innerHTML = `❌ ${data.message}`;
                return;
            }
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const feels_like = data.main.feels_like;
            const weather = data.weather[0].main;
            const description = data.weather[0].description;

            document.getElementById("weather-details").innerHTML = `
                <strong>Weather:</strong> ${weather} <br>
                <strong>Description:</strong> ${description} <br>
                <strong>Temperature:</strong> ${temp}°C <br>
                <strong>Feels Like:</strong> ${feels_like}°C <br>
                <strong>Humidity:</strong> ${humidity}%
            `;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            document.getElementById("weather-details").innerHTML = '❌ Error fetching data. Please try again.';
        });
}
