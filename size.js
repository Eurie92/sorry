function decreaseNoSize() {
    var noButton = document.getElementById("noButton");
    var yesButton = document.getElementById("yesButton");
    var currentWidth = parseInt(window.getComputedStyle(noButton).width);
    var currentHeight = parseInt(window.getComputedStyle(noButton).height);
    var newWidth = currentWidth - 10;
    var newHeight = currentHeight - 5;
    noButton.style.width = newWidth + "px";
    noButton.style.height = newHeight + "px";

    var yesCurrentWidth = parseInt(window.getComputedStyle(yesButton).width);
    var yesCurrentHeight = parseInt(window.getComputedStyle(yesButton).height);
    var yesNewWidth = yesCurrentWidth + 10;
    var yesNewHeight = yesCurrentHeight + 5;
    yesButton.style.width = yesNewWidth + "px";
    yesButton.style.height = yesNewHeight + "px";
}

function increaseYesSize() {
    var noButton = document.getElementById("noButton");
    var yesButton = document.getElementById("yesButton");
    var currentWidth = parseInt(window.getComputedStyle(yesButton).width);
    var currentHeight = parseInt(window.getComputedStyle(yesButton).height);
    var newWidth = currentWidth + 10;
    var newHeight = currentHeight + 5;
    yesButton.style.width = newWidth + "px";
    yesButton.style.height = newHeight + "px";

    var noCurrentWidth = parseInt(window.getComputedStyle(noButton).width);
    var noCurrentHeight = parseInt(window.getComputedStyle(noButton).height);
    var noNewWidth = noCurrentWidth - 10;
    var noNewHeight = noCurrentHeight - 5;
    noButton.style.width = noNewWidth + "px";
    noButton.style.height = noNewHeight + "px";
}
