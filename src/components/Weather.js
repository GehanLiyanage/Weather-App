import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const API_KEY = 'a2a3570afd320601899116b9694df6a7'; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        try {
            const response = await axios.get(url);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching the weather:', error);
        }
    };

    return (
        <div className="weather">
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
