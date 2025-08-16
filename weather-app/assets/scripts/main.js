const btn = document.getElementById('settings-icon');
const body = document.getElementsByTagName('body');
const side_bar_container = document.getElementById("side-bar-container");
btn.addEventListener("focus", () => {
    btn.classList.toggle('checked');
    body.classList.toggle('checked-blur');
    side_bar_container.classList.toggle('checked-blur');
});
