// 1. 전역 변수 설정
let currentIndex = 0;
let startX = 0;
let endX = 0;
/*
currentIndex: 현재 슬라이드의 인덱스(위치)
startX: 터치 시작 위치 (모바일 스와이프)
endX: 터치 종료 위치
*/

const totalSlides = document.querySelectorAll('.slide').length;

function updatePageNumber() {
    document.getElementById('page-number').textContent = `${currentIndex + 1}/${totalSlides}`;
}

// 2. showSlide(index) 함수
// 💡 이 함수는 버튼 클릭, 스와이프 시 공통적으로 사용됨!
// → 즉, 버튼을 누르든, 손가락을 스와이프하든 결국 이 함수가 호출되어 슬라이드 이동 🚀
function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0; // 마지막 다음 → 처음으로 이동
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // 처음 이전 → 마지막으로 이동
    } else {
        currentIndex = index; // 정상적인 경우 index 업데이트
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePageNumber();  // 페이지 번호 갱신
}

// 페이지 번호 초기화
updatePageNumber();

/*
역할
- document.querySelector('.slides') → 슬라이드 전체를 가져옴
- document.querySelectorAll('.slide').length → 슬라이드 개수 가져옴
- index 값이 범위를 벗어나면 루프되도록 설정
- 마지막 슬라이드에서 다음을 누르면 처음으로 이동
- 첫 번째 슬라이드에서 이전을 누르면 마지막으로 이동
- slides.style.transform = translateX(-N%) → 슬라이드 이동
*/

// 3️. 모바일 터치 이벤트 (스와이프 기능)
// (1) handleTouchStart(event) - 터치 시작
function handleTouchStart(event) {
    // ✅ 여기에 이 조건을 넣어주세요!
    if (event.target.tagName === 'VIDEO') return;
    startX = event.touches[0].clientX;
}
/*
역할
- event.touches[0].clientX → 터치한 X 좌표 저장
- 손가락을 처음으로 댔을 때의 위치(startX)를 기억
*/

// (2) handleTouchMove(event) - 터치 중
function handleTouchMove(event) {
    if (event.target.tagName === 'VIDEO') return;
    endX = event.touches[0].clientX;
}
/*
역할
- 터치 중인 손가락의 X 좌표(endX)를 저장
- 사용자가 어느 방향으로 움직이는지 확인하는 역할
*/

// (3) handleTouchEnd() - 터치 종료
function handleTouchEnd() {
    if (event.target.tagName === 'VIDEO') return;
    if (startX > endX + 30) { // 30px 이동하면 반응 
        showSlide(currentIndex + 1); // 오른쪽으로 스와이프 → 다음 슬라이드
    } else if (startX < endX - 50) {
        showSlide(currentIndex - 1); // 왼쪽으로 스와이프 → 이전 슬라이드
    }
}
/*
역할
- 터치가 끝난 후, 손가락이 얼마나 이동했는지 비교
- startX > endX + 50 → 오른쪽으로 스와이프(→) → 다음 슬라이드
- startX < endX - 50 → 왼쪽으로 스와이프(←) → 이전 슬라이드
- 이동 거리가 30px 이상이면 슬라이드 이동
*/

document.querySelector('.slides').addEventListener('touchstart', handleTouchStart);
document.querySelector('.slides').addEventListener('touchmove', handleTouchMove);
document.querySelector('.slides').addEventListener('touchend', handleTouchEnd);

/*
역할
.slides 요소에서 터치 이벤트 감지

각 이벤트가 발생할 때 해당 함수 실행
touchstart → handleTouchStart()
touchmove → handleTouchMove()
touchend → handleTouchEnd()
*/

/*
코드 흐름 정리
1️⃣ 버튼 클릭 (onclick="showSlide(...)")
→ showSlide() 실행 → 슬라이드 이동

2️⃣ 터치 시작 (touchstart)
→ startX에 현재 터치 위치 저장

3️⃣ 터치 이동 (touchmove)
→ endX에 이동한 위치 저장

4️⃣ 터치 종료 (touchend)

startX > endX + 50 → 오른쪽으로 스와이프 → 다음 슬라이드
startX < endX - 50 → 왼쪽으로 스와이프 → 이전 슬라이드
5️⃣ 슬라이드 이동 (showSlide())
→ transform: translateX(-100%) 등의 값을 적용하여 화면 이동
*/