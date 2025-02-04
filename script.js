// 결혼식 날짜를 설정합니다. 형식: 년, 월(0-11), 일
const weddingDate = new Date(2025, 7, 5, 13, 20, 0);  // 예: 2025년 7월 5일 오후 1시 20분

function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `결혼식까지 <br>
        ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다!`;

    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = '결혼을 축하합니다!';
    }
}

// 초기 실행
updateCountdown();

// 1초마다 업데이트
const timer = setInterval(updateCountdown, 1000);
