const CONFIG = 
{
    LOCATION_API_KEY: "27742cdbc5018245c73fc948b357e609", 
    LOCATION_BASE_URL: "https://api.openweathermap.org", 
    WEATHER_API_KEY: "Y5BP2JECZCF8FNLJTD2AN9QWZ", 
    WEATHER_BASE_URL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",    
    DEFAULT_UNIT: "metric",
    DEFAULT_LANG: "en",
    LIMIT_LOCATION_OBJ: 1
};

const valid_langs_obj = 
{
  ar: "Arabic",
  bg: "Bulgarian",
  cs: "Czech",
  da: "Danish",
  nl: "Dutch",
  en: "English",
  fi: "Finnish",
  fr: "French",
  de: "German",
  el: "Greek",
  he: "Hebrew",
  hu: "Hungarian",
  it: "Italian",
  ja: "Japanese",
  fa: "Persian (Farsi)",
  pl: "Polish",
  es: "Spanish",
  sv: "Swedish",
  tr: "Turkish",
  uk: "Ukrainian",
  vi: "Vietnamese",
  sr: "Serbian"
};

const valid_langs_arr = Object.keys(valid_langs_obj);
const valid_units_arr = ['metric', 'imperial'];

const ICON_BASE = '../../weather-icons-master/design/fill/animation';

const emoji_map = {
    'clear-day': 'clear-day',
    'clear-night': 'clear-night',
    'partly-cloudy-day': 'partly-cloudy-day',
    'partly-cloudy-night': 'partly-cloudy-night',
    'cloudy': 'cloudy',
    'rain': 'rain',
    'snow': 'snow',
    'fog': 'fog',
    'wind': 'wind',
    'thunder-rain': 'thunder-rain',
    'thunder-showers-day': 'thunder-showers-day',
    'thunder-showers-night': 'thunder-showers-night',
    'showers-day': 'showers-day',
    'showers-night': 'showers-night',
    'snow-showers-day': 'snow-showers-day',
    'snow-showers-night': 'snow-showers-night'
};

const dailyDisplayArray = 
[
  { day: "Today", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""},
  { day: "", tempMin: 0, tempMax: 0, icon: ""}
];

const hourlyData = [
  { time: "Now", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 },
  { time: "", temp: 0, icon: "", precipitation: 0 }
];