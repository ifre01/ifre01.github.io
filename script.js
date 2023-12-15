// script.js

document.addEventListener("DOMContentLoaded", function () {
    var rsvpButton = document.getElementById("rsvp-button");
    var closePopupButton = document.getElementById("close-popup");
    var rsvpForm = document.getElementById("rsvp-form");

    function openPopup() {
        rsvpForm.style.display = "block";
    }

    function closePopup() {
        rsvpForm.style.display = "none";
    }

    rsvpButton.addEventListener("click", openPopup);
    closePopupButton.addEventListener("click", closePopup);
});
