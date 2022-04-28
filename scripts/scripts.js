let icon = document.getElementById("exit-icon");
let alertBar = document.getElementById("alert-bar");
icon.addEventListener('click', function handleClick() {
    alertBar.classList.add('hidden');
});