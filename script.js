// script.js
document.addEventListener("DOMContentLoaded", function () {
    // DOM이 로드된 후 실행되는 코드

    // RSVP 버튼 클릭 시 "감사합니다" 문구 표시 및 애니메이션 적용
    const rsvpButton = document.getElementById("rsvp-button");
    const rsvpForm = document.getElementById("rsvp-form");
    const thankYouContainer = document.getElementById("thank-you-container");

    if (rsvpButton && rsvpForm && thankYouContainer) {
        rsvpButton.addEventListener("click", function () {

            // "감사합니다" 문구 동적으로 생성
            const thankYouMessage = document.createElement("div");
            thankYouMessage.id = "thank-you-message";
            thankYouMessage.textContent = "Thank you for RSVPing!";

            // 문구를 컨테이너에 추가
            thankYouContainer.appendChild(thankYouMessage);

            // 애니메이션 적용
            anime({
                targets: thankYouMessage,
                opacity: 1,
                translateY: [-50, 0],
                duration: 1000,
                easing: "easeInOutQuad"
            });
        });
    }
});
