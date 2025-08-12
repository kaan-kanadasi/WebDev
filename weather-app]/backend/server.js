const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();

const CONFIG = {
    LOCATION_API_KEY: process.env.LOCATION_API_KEY || "27742cdbc5018245c73fc948b357e609",
    LOCATION_BASE_URL: "https://api.openweathermap.org",
    WEATHER_API_KEY: process.env.WEATHER_API_KEY || "Y5BP2JECZCF8FNLJTD2AN9QWZ",
    WEATHER_BASE_URL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
    DEFAULT_UNIT: "metric",
    DEFAULT_LANG: "en",
    LIMIT_LOCATION_OBJ: 1
};

const valid_langs_arr = ['metric', 'imperial'];

app.use(cors());
app.use(express.json());

// Serve static files from the parent directory
app.use(express.static('../'));

// API Routes
app.get('/api/weather/current', async (req, res) => {
    try {
        const { lat, lon, unit = 'metric', lang = 'en' } = req.query;
        
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const weatherUrl = `${CONFIG.WEATHER_BASE_URL}${lat},${lon}?unitGroup=${unit}&lang=${lang}&include=current&key=${CONFIG.WEATHER_API_KEY}`;
        const response = await fetch(weatherUrl);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();
        res.json(data.currentConditions);
    } catch (error) {
        console.error('Weather API error:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.get('/api/weather/hourly', async (req, res) => {
    try {
        const { lat, lon, unit = 'metric', lang = 'en' } = req.query;
        
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const weatherUrl = `${CONFIG.WEATHER_BASE_URL}${lat},${lon}?unitGroup=${unit}&lang=${lang}&include=hours&key=${CONFIG.WEATHER_API_KEY}`;
        const response = await fetch(weatherUrl);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();
        const hourIndexCurrent = new Date().getHours();
        const hourIndexTomorrow = hourIndexCurrent + 25;
        const hourlyWeatherForTwoDays = [...data.days[0].hours, ...data.days[1].hours];
        const hourlyData = hourlyWeatherForTwoDays.slice(hourIndexCurrent, hourIndexTomorrow);
        
        res.json(hourlyData);
    } catch (error) {
        console.error('Weather API error:', error);
        res.status(500).json({ error: 'Failed to fetch hourly weather data' });
    }
});

app.get('/api/weather/forecast', async (req, res) => {
    try {
        const { lat, lon, unit = 'metric', lang = 'en' } = req.query;
        
        if (!lat || !lon) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const weatherUrl = `${CONFIG.WEATHER_BASE_URL}${lat},${lon}?unitGroup=${unit}&lang=${lang}&include=days&key=${CONFIG.WEATHER_API_KEY}`;
        const response = await fetch(weatherUrl);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }

        const data = await response.json();
        const forecastData = data.days.slice(0, 7); // Get 7 days
        
        res.json(forecastData);
    } catch (error) {
        console.error('Weather API error:', error);
        res.status(500).json({ error: 'Failed to fetch forecast data' });
    }
});

app.get('/api/location/geocode', async (req, res) => {
    try {
        const { city, state = '', country = '', limit = 1 } = req.query;
        
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        const geocodingUrl = `${CONFIG.LOCATION_BASE_URL}/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${CONFIG.LOCATION_API_KEY}`;
        const response = await fetch(geocodingUrl);
        
        if (!response.ok) {
            throw new Error(`Geocoding API error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data || data.length === 0) {
            return res.status(404).json({ error: 'Location not found' });
        }

        const location = {
            lat: data[0].lat,
            lon: data[0].lon,
            name: data[0].name,
            country: data[0].country,
            state: data[0].state
        };
        
        res.json(location);
    } catch (error) {
        console.error('Geocoding API error:', error);
        res.status(500).json({ error: 'Failed to geocode location' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile('main.html', { root: '../' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Weather app server running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});