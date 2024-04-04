document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button and audio element
    var button = document.getElementById("noButton");
    var sound = document.getElementById("clickSound");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Play the sound effect
        sound.currentTime = 0; // Reset audio to start if it's already playing
        sound.play();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the button and audio element
    var button = document.getElementById("yesButton");
    var sound = document.getElementById("clickSound2");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Play the sound effect
        sound.currentTime = 0; // Reset audio to start if it's already playing
        sound.play();
    });
});