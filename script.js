// script.js
document.addEventListener("DOMContentLoaded", function () {
    // DOM이 로드된 후 실행되는 코드

    // RSVP 버튼 클릭 시 RSVP 양식 보이기
    const rsvpButton = document.getElementById("rsvp-button");
    const rsvpForm = document.getElementById("rsvp-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    if (rsvpButton && rsvpForm && thankYouMessage) {
        rsvpButton.addEventListener("click", function () {
            // RSVP 양식 보이기
            rsvpForm.style.display = "block";
        });

        // RSVP 폼 제출 시 처리
        rsvpForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // 감사 메시지 표시
            rsvpForm.style.display = "none";
            thankYouMessage.style.display = "block";
        });
    }
});
