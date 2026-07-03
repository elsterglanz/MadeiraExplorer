// =====================================
// Madeira 2026 - Wetter-Widget
// Datenquelle: Open-Meteo (kostenlos, kein API-Key nötig)
// https://open-meteo.com
// =====================================

// Koordinaten der Unterkunft (Arco da Calheta)
const WEATHER_LAT = 32.71334731397877;
const WEATHER_LNG = -17.158790468875203;

// WMO Weathercodes -> Icon + deutscher Text
// https://open-meteo.com/en/docs (WMO Weather interpretation codes)
const WMO_CODES = {
    0: ["☀️", "Klarer Himmel"],
    1: ["🌤️", "Überwiegend klar"],
    2: ["⛅", "Teilweise bewölkt"],
    3: ["☁️", "Bedeckt"],
    45: ["🌫️", "Nebel"],
    48: ["🌫️", "Reifnebel"],
    51: ["🌦️", "Leichter Nieselregen"],
    53: ["🌦️", "Nieselregen"],
    55: ["🌧️", "Starker Nieselregen"],
    56: ["🌧️", "Gefrierender Nieselregen"],
    57: ["🌧️", "Starker gefr. Nieselregen"],
    61: ["🌦️", "Leichter Regen"],
    63: ["🌧️", "Regen"],
    65: ["🌧️", "Starker Regen"],
    66: ["🌧️", "Gefrierender Regen"],
    67: ["🌧️", "Starker gefr. Regen"],
    71: ["🌨️", "Leichter Schneefall"],
    73: ["🌨️", "Schneefall"],
    75: ["❄️", "Starker Schneefall"],
    77: ["❄️", "Schneegriesel"],
    80: ["🌦️", "Leichte Regenschauer"],
    81: ["🌧️", "Regenschauer"],
    82: ["⛈️", "Heftige Regenschauer"],
    85: ["🌨️", "Leichte Schneeschauer"],
    86: ["❄️", "Schneeschauer"],
    95: ["⛈️", "Gewitter"],
    96: ["⛈️", "Gewitter mit Hagel"],
    99: ["⛈️", "Starkes Gewitter mit Hagel"]
};

function describeWeatherCode(code) {
    return WMO_CODES[code] || ["❓", "Unbekannt"];
}

function formatWeekday(dateStr) {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("de-DE", { weekday: "short" });
}

async function loadWeather() {

    const box = document.getElementById("weatherWidget");

    if (!box) return;

    const url =
        "https://api.open-meteo.com/v1/forecast" +
        "?latitude=" + WEATHER_LAT +
        "&longitude=" + WEATHER_LNG +
        "&current=temperature_2m,weather_code,wind_speed_10m" +
        "&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max" +
        "&timezone=Europe%2FLisbon" +
        "&forecast_days=6";

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const data = await response.json();

        renderWeather(data);

    } catch (err) {

        console.warn("Wetter konnte nicht geladen werden:", err);

        box.innerHTML =
            "<p>⚠️ Wetter konnte nicht geladen werden. " +
            "Prüfe deine Internetverbindung.</p>";

    }

}

function renderWeather(data) {

    const box = document.getElementById("weatherWidget");

    if (!box || !data || !data.current || !data.daily) {
        box.innerHTML = "<p>⚠️ Keine Wetterdaten verfügbar.</p>";
        return;
    }

    const [currentIcon, currentText] = describeWeatherCode(data.current.weather_code);

    let html = `
        <div class="weather-current">
            <div class="weather-current-icon">${currentIcon}</div>
            <div class="weather-current-temp">${Math.round(data.current.temperature_2m)}°C</div>
            <div class="weather-current-text">${currentText}<br>💨 ${Math.round(data.current.wind_speed_10m)} km/h</div>
        </div>
    `;

    const days = data.daily.time || [];

    html += `<div class="weather-days">`;

    // Erster Eintrag ist "heute" - für die Vorschau ab morgen die nächsten 5 Tage zeigen
    for (let i = 1; i < Math.min(days.length, 6); i++) {

        const [icon] = describeWeatherCode(data.daily.weather_code[i]);
        const max = Math.round(data.daily.temperature_2m_max[i]);
        const min = Math.round(data.daily.temperature_2m_min[i]);
        const rain = data.daily.precipitation_probability_max
            ? data.daily.precipitation_probability_max[i]
            : null;

        html += `
            <div class="weather-day">
                <div class="weather-day-label">${formatWeekday(days[i])}</div>
                <div class="weather-day-icon">${icon}</div>
                <div class="weather-day-temp">${max}° / ${min}°</div>
                ${rain !== null ? `<div class="weather-day-rain">💧 ${rain}%</div>` : ""}
            </div>
        `;

    }

    html += `</div>`;

    html += `
        <p class="weather-source">
            Daten: <a href="https://open-meteo.com" target="_blank">Open-Meteo.com</a>
        </p>
    `;

    box.innerHTML = html;

}

document.addEventListener("DOMContentLoaded", loadWeather);
