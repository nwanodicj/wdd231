const apiKey = "YOUR_API_KEY_HERE";
const lat = 6.5244;   // Lagos
const lon = 3.3792;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    // CURRENT WEATHER (first item)
    document.getElementById("temp").textContent = Math.round(data.list[0].main.temp);
    document.getElementById("description").textContent = data.list[0].weather[0].description;

    // 3 DAY FORECAST (every 8th item ≈ 24hrs)
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    for (let i = 8; i <= 24; i += 8) {
        const day = data.list[i];

        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

        const temp = Math.round(day.main.temp);

        forecastDiv.innerHTML += `
            <p><strong>${dayName}:</strong> ${temp}°C</p>
        `;
    }
}

getWeather();