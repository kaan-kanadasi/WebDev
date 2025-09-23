// DOM Elements
const settings_icon_btn = document.getElementById('settings-icon');
const body = document.body;
const side_bar_container = document.getElementById("side-bar-container");
const settings_overlay = document.getElementById("settings-overlay");
const settings_close_btn = document.getElementById('settings-close-btn');
const settings_main_container = document.getElementById('settings-main-container');

// Weather display elements
const currentLocation = document.getElementById('current-location');
const currentDate = document.getElementById('current-date');
const currentWeatherDegree = document.getElementById('current-weather-degree');
const currentWeatherIcon = document.getElementById('current-weather-icon');

// Settings functionality
settings_icon_btn.addEventListener("click", () => {
    settings_icon_btn.classList.toggle('checked');
    settings_overlay.classList.toggle('checked');
    settings_main_container.classList.toggle('checked');
});

settings_close_btn.addEventListener('click', () => {
    settings_icon_btn.classList.toggle('checked');
    settings_overlay.classList.toggle('checked');
    settings_main_container.classList.toggle('checked');
});