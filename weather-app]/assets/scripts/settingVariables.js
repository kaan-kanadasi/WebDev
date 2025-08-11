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