document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('background-music');
    var muteButton = document.getElementById('muteButton');

    muteButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            muteButton.textContent = 'Mute';
        } else {
            music.pause();
            muteButton.textContent = 'Unmute';
        }
    });
});




document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy validation, replace with your backend validation logic
    if (validateCredentials(username, password)) {
        // Redirect to homepage or perform further actions
        window.location.href = 'homepage.html';
    } else {
        document.getElementById('error-msg').innerText = 'Invalid username or password.';
    }
});

function validateCredentials(username, password) {
    // Dummy validation, replace with your backend validation logic
    // For this example, we check if both fields are not empty
    return username.trim() !== '' && password.trim() !== '';
}

