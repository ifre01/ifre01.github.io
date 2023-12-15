// script.js

document.addEventListener("DOMContentLoaded", function () {
    var rsvpButton = document.getElementById("rsvp-button");
    var closePopupButton = document.getElementById("close-popup");
    var rsvpForm = document.getElementById("rsvp-form");

    function openPopup() {
        rsvpForm.style.display = "block";
        console.log("가윤 hello"); // 버튼을 눌렀을 때 "hello" 출력
    }

    function closePopup() {
        rsvpForm.style.display = "none";
    }

    rsvpButton.addEventListener("click", openPopup);
    closePopupButton.addEventListener("click", closePopup);
});
