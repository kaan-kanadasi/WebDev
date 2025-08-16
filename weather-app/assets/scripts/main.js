const settings_icon_btn = document.getElementById('settings-icon');
const body = document.body;
const side_bar_container = document.getElementById("side-bar-container");
const settings_overlay = document.getElementById("settings-overlay");
const settings_close_btn = document.getElementById('settings-close-btn');

settings_icon_btn.addEventListener("click", () => {
    settings_icon_btn.classList.toggle('checked');
    settings_overlay.classList.toggle('checked');
});

settings_close_btn.addEventListener('click', () => {
    settings_icon_btn.classList.toggle('checked');
    settings_overlay.classList.toggle('checked');
});