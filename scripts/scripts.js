let icon = document.getElementById("exit-icon");
let alertBar = document.getElementById("alert-bar");
icon.addEventListener('click', function() {
    alertBar.classList.add('hidden');
});

let messageForm = document.getElementById("message-form");
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let user = document.getElementById("user").value;
    let message = document.getElementById("message").value;
    if (user == '' || message == '') {
        alert('Error: Empty Input');
    } else {
        alert('Message Sent!');
    }

});

