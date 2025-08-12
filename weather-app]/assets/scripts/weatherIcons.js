// Weather Icons Helper Functions
class WeatherIcons {
    constructor() {
        this.basePath = 'weather-icons-master/design/fill/animation-ready/';
        this.iconMap = {
            // Weather conditions
            'clear-day': 'clear-day.svg',
            'clear-night': 'clear-night.svg',
            'partly-cloudy-day': 'partly-cloudy-day.svg',
            'partly-cloudy-night': 'partly-cloudy-night.svg',
            'cloudy': 'cloudy.svg',
            'overcast': 'overcast.svg',
            'overcast-day': 'overcast-day.svg',
            'overcast-night': 'overcast-night.svg',
            'rain': 'rain.svg',
            'snow': 'snow.svg',
            'sleet': 'sleet.svg',
            'thunderstorms': 'thunderstorms.svg',
            'thunderstorms-day': 'thunderstorms-day.svg',
            'thunderstorms-night': 'thunderstorms-night.svg',
            'thunderstorms-rain': 'thunderstorms-rain.svg',
            'thunderstorms-snow': 'thunderstorms-snow.svg',
            'fog': 'fog.svg',
            'haze': 'haze.svg',
            'mist': 'mist.svg',
            'smoke': 'smoke.svg',
            'tornado': 'tornado.svg',
            'hurricane': 'hurricane.svg',
            
            // Temperature units
            'celsius': 'celsius.svg',
            'fahrenheit': 'fahrenheit.svg',
            
            // Weather measurements
            'thermometer': 'thermometer.svg',
            'thermometer-celsius': 'thermometer-celsius.svg',
            'thermometer-fahrenheit': 'thermometer-fahrenheit.svg',
            'wind': 'wind.svg',
            'humidity': 'humidity.svg',
            'uv-index': 'uv-index.svg',
            'pressure-high': 'pressure-high.svg',
            'pressure-low': 'pressure-low.svg',
            
            // Time-based
            'sunrise': 'sunrise.svg',
            'sunset': 'sunset.svg',
            'moonrise': 'moonrise.svg',
            'moonset': 'moonset.svg',
            
            // Special conditions
            'lightning-bolt': 'lightning-bolt.svg',
            'raindrops': 'raindrops.svg',
            'raindrop': 'raindrop.svg',
            'snowflake': 'snowflake.svg',
            'star': 'star.svg',
            'starry-night': 'starry-night.svg'
        };
    }

    /**
     * Get the full path to an icon
     * @param {string} iconName - The name of the icon
     * @returns {string} The full path to the icon
     */
    getIconPath(iconName) {
        const fileName = this.iconMap[iconName] || iconName;
        return `${this.basePath}${fileName}`;
    }

    /**
     * Create an img element with a weather icon
     * @param {string} iconName - The name of the icon
     * @param {string} altText - Alt text for the image
     * @param {string} className - CSS class name
     * @returns {HTMLImageElement} The img element
     */
    createIcon(iconName, altText = '', className = 'weather-icon') {
        const img = document.createElement('img');
        img.src = this.getIconPath(iconName);
        img.alt = altText || iconName;
        img.className = className;
        return img;
    }

    /**
     * Set a weather icon in an existing element
     * @param {string} elementId - The ID of the element to set the icon in
     * @param {string} iconName - The name of the icon
     * @param {string} className - CSS class name
     */
    setIcon(elementId, iconName, className = 'weather-icon') {
        const element = document.getElementById(elementId);
        if (element) {
            const icon = this.createIcon(iconName, iconName, className);
            element.innerHTML = '';
            element.appendChild(icon);
        }
    }

    /**
     * Set weather condition icon based on weather data
     * @param {string} elementId - The ID of the element to set the icon in
     * @param {Object} weatherData - Weather data object
     * @param {string} className - CSS class name
     */
    setWeatherConditionIcon(elementId, weatherData, className = 'weather-condition-icon') {
        const condition = this.mapWeatherCondition(weatherData);
        this.setIcon(elementId, condition, className);
    }

    /**
     * Map weather condition from API data to icon name
     * @param {Object} weatherData - Weather data object
     * @returns {string} The icon name
     */
    mapWeatherCondition(weatherData) {
        // This is a basic mapping - you may need to adjust based on your API
        const condition = weatherData.condition?.toLowerCase() || weatherData.weather?.[0]?.main?.toLowerCase() || '';
        
        const conditionMap = {
            'clear': 'clear-day',
            'sunny': 'clear-day',
            'clouds': 'cloudy',
            'cloudy': 'cloudy',
            'partly cloudy': 'partly-cloudy-day',
            'overcast': 'overcast',
            'rain': 'rain',
            'drizzle': 'rain',
            'snow': 'snow',
            'sleet': 'sleet',
            'thunderstorm': 'thunderstorms',
            'thunderstorms': 'thunderstorms',
            'fog': 'fog',
            'mist': 'mist',
            'haze': 'haze',
            'smoke': 'smoke',
            'tornado': 'tornado',
            'hurricane': 'hurricane'
        };

        return conditionMap[condition] || 'clear-day';
    }

    /**
     * Get all available icon names
     * @returns {Array} Array of available icon names
     */
    getAvailableIcons() {
        return Object.keys(this.iconMap);
    }

    /**
     * Create a temperature display with unit icon
     * @param {number} temperature - Temperature value
     * @param {string} unit - Temperature unit ('celsius' or 'fahrenheit')
     * @param {string} className - CSS class name
     * @returns {HTMLElement} Container element with temperature and unit icon
     */
    createTemperatureDisplay(temperature, unit = 'celsius', className = 'temperature-display') {
        const container = document.createElement('div');
        container.className = className;
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.gap = '8px';

        const tempText = document.createElement('span');
        tempText.textContent = Math.round(temperature);

        const unitIcon = this.createIcon(unit, unit, 'temperature-unit-icon');

        container.appendChild(tempText);
        container.appendChild(unitIcon);

        return container;
    }
}

// Create a global instance
const weatherIcons = new WeatherIcons();

// Example usage functions
function setCurrentWeatherIcon(condition) {
    weatherIcons.setWeatherConditionIcon('current-weather-icon', { condition });
}

function setTemperatureUnit(unit) {
    weatherIcons.setIcon('temperature-unit', unit, 'temperature-unit-icon');
}

function updateWeatherInfoIcons(weatherData) {
    // Set various weather info icons
    if (weatherData.wind) {
        weatherIcons.setIcon('wind-icon', 'wind', 'weather-icon');
    }
    if (weatherData.humidity) {
        weatherIcons.setIcon('humidity-icon', 'humidity', 'weather-icon');
    }
    if (weatherData.uvIndex) {
        weatherIcons.setIcon('uv-index-icon', 'uv-index', 'weather-icon');
    }
    if (weatherData.pressure) {
        const pressureIcon = weatherData.pressure > 1013 ? 'pressure-high' : 'pressure-low';
        weatherIcons.setIcon('pressure-icon', pressureIcon, 'weather-icon');
    }
    if (weatherData.sunrise) {
        weatherIcons.setIcon('sunrise-icon', 'sunrise', 'weather-icon');
    }
    if (weatherData.sunset) {
        weatherIcons.setIcon('sunset-icon', 'sunset', 'weather-icon');
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WeatherIcons, weatherIcons };
}
