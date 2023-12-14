// script.js
document.addEventListener("DOMContentLoaded", function () {
    // DOM이 로드된 후 실행되는 코드

    // RSVP 버튼 클릭 시 애니메이션 및 효과 적용
    const rsvpButton = document.getElementById("rsvp-button");
    const rsvpForm = document.getElementById("rsvp-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    if (rsvpButton && rsvpForm && thankYouMessage) {
        rsvpButton.addEventListener("click", function () {
            // 애니메이션 적용
            anime({
                targets: rsvpForm,
                opacity: 1,
                translateY: [-50, 0],
                duration: 1000,
                easing: "easeInOutQuad"
            });
        });

        // RSVP 폼 제출 시 처리
        rsvpForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // 애니메이션 적용
            anime({
                targets: rsvpForm,
                opacity: 0,
                translateY: [0, -50],
                duration: 1000,
                easing: "easeInOutQuad",
                complete: function () {
                    // 감사 메시지 표시
                    rsvpForm.style.display = "none";
                    thankYouMessage.style.display = "block";
                }
            });
        });
    }
});
