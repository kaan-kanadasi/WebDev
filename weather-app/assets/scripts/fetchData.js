async function fetchWeatherJsonData(url) 
{
    try 
    {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        return result;
    } 
    catch (error) 
    { 
        console.log('Weather fetch error:', error.message); 
        throw error;
    }
}

async function fetchLocationJsonData(url) 
{
    try 
    {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`Response status: ${response.status}`);

        const result = await response.json();
        if(!result) throw new Error("No location data found")
        const first_result = result[0]; /*access the first object in the .json*/ 
        return { 
            lat: first_result.lat, 
            lon: first_result.lon,
        };
    } 
    catch (error) 
    { 
        console.log('Location fetch error:', error.message); 
        throw error;
    }
}

function getLocationData_ByCitySearch(city_name, state_code, country_code, limit) 
{
    const geocoding_url = `${CONFIG.LOCATION_BASE_URL}/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit=${limit}&appid=${CONFIG.LOCATION_API_KEY}`;
    return fetchLocationJsonData(geocoding_url);
}

async function getLocationData_ByGeolocation() {
    try 
    {
        if(!navigator.geolocation) throw new Error("Geolocation is not supported by this browser.");
        
        const geoLocation = await new Promise((resolve, reject) => { /* Using geolocation API */
            navigator.geolocation.getCurrentPosition(
                position => /* Success Call Back */
                {
                    const geoLocation = 
                    {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    };
                    console.log("Geolocation:", geoLocation);
                    resolve(geoLocation)
                }, 
                error => reject(new Error(error.message)) /* Error Call Back */
            )
        });
        return geoLocation;
    }
    catch (error)
    {
        console.log("Geolocation error: ", error.message);
        throw error;
    }
}

async function getWeatherData(lat, lon, unit = 'metric', lang = 'en', include = "current") 
{
    if(!valid_units_arr.includes(unit)) throw new Error(`Unit must be one of: ${valid_units_arr.join(", ")}`);
    if(!valid_langs_arr.includes(lang)) throw new Error(`Language must be one of: ${Object.values(valid_langs_obj).join(", ")}`);
    const weather_url = `${CONFIG.WEATHER_BASE_URL}${lat},${lon}?unitGroup=${unit}&lang=${lang}&include=${include}&key=${CONFIG.WEATHER_API_KEY}`;
    return await fetchWeatherJsonData(weather_url);
}
async function getWeatherData_CurrentTime(lat, lon, unit, lang) 
{
    const weather_data = await getWeatherData(lat, lon, unit, lang, "current");
    return weather_data.currentConditions;
}
async function getWeatherData_24Hours(lat, lon, unit, lang)
{
    /**example output: 20 - current weather index that the hourlyWeatherForTwoDays.datetime has then 20 + 25 would be the last index*/
    const hourIndexCurrent = new Date().getHours(); 
    const hourIndexTomarrow = hourIndexCurrent + 25;
    const weather_data = await getWeatherData(lat, lon, unit, lang, "hours");
    const hourlyWeatherForTwoDays = [...weather_data.days[0].hours, ...weather_data.days[1].hours];
    return hourlyWeatherForTwoDays.slice(hourIndexCurrent, hourIndexTomarrow);
}
async function getWeatherData_Next10Days(lat, lon, unit, lang)
{
    const weather_data = await getWeatherData(lat, lon, unit, lang, "days");
    return weather_data.days.slice(0, 10);
}

async function getWeatherForLocation_ByCitySearch(functionName, unit, lang, city_name, state_code, country_code, limit) 
{
    const { lat, lon } = await getLocationData_ByCitySearch(city_name, state_code, country_code, limit);
    return await functionName(lat, lon, unit, lang);
}
async function getWeatherForLocation_CurrentTime_ByCitySearch(unit, lang, city_name, state_code, country_code, limit) 
{
    return getWeatherForLocation_ByCitySearch(getWeatherData_CurrentTime, unit, lang, city_name, state_code, country_code, limit) 
}
async function getWeatherForLocation_Next15Days_ByCitySearch(unit, lang, city_name, state_code, country_code, limit) 
{
    return getWeatherForLocation_ByCitySearch(getWeatherData_Next10Days, unit, lang, city_name, state_code, country_code, limit) 
}
async function getWeatherForLocation_24Hours_ByCitySearch(unit, lang, city_name, state_code, country_code, limit) 
{
    return getWeatherForLocation_ByCitySearch(getWeatherData_24Hours, unit, lang, city_name, state_code, country_code, limit) 
}

async function getWeatherForLocation_ByGeolocation(functionType, unit, lang)  
{
    try 
    { 
        const { lat, lon } = await getLocationData_ByGeolocation(); 
        return functionType(lat, lon, unit, lang);
    } 
    catch (error) 
    { 
        console.error("Error getting location:", error.message); 
        throw error;
    }
}
async function getWeatherForLocation_CurrentTime_ByGeolocation(unit, lang)  
{
    return getWeatherForLocation_ByGeolocation(getWeatherData_CurrentTime, unit, lang);
}
async function getWeatherForLocation_24Hours_ByGeolocation(unit, lang)  
{
    return getWeatherForLocation_ByGeolocation(getWeatherData_24Hours, unit, lang);
}
async function getWeatherForLocation_Next10Days_ByGeolocation(unit, lang)  
{
    return getWeatherForLocation_ByGeolocation(getWeatherData_Next10Days, unit, lang);
}


/*
    let weather_obj = 
    {
        tempMin: 0,
        tempMax: 0,
        temp: 0
    }
*/

async function test() {
    try {
        const weather = await getWeatherForLocation_Next10Days_ByGeolocation('metric', 'en');
        console.log(JSON.stringify(weather, null, 2));
    } catch (err) {
        console.error(err);
    }
}
test();


/* 
--> testing ex.


async function test() {
    try {
        const weather = await getWeatherForLocation_CurrentTime_ByCitySearch("metric","en","Istanbul","34","TR",1);
        console.log(weather);
    } catch (err) {
        console.error(err);
    }
}
test();

let lat = 37.055176;
let lon= 35.282551;
getWeatherData(lat, lon, CONFIG.DEFAULT_UNIT, CONFIG.DEFAULT_LANG);
getWeatherForLocation_24Hours_ByGeolocation(CONFIG.DEFAULT_UNIT, CONFIG.DEFAULT_LANG);
*/