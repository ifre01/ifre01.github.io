document.getElementById("kakaoMapLink").addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 막기

    var kakaoMapAppUrl = "kakaomap://search?q=웨스턴베니비스 신도림";
    var kakaoMapWebUrl = "https://map.kakao.com/link/map/웨스턴베니비스 신도림";

    // 앱 실행 시도
    window.location.href = kakaoMapAppUrl;

    // 일정 시간 후 웹 링크로 이동 (앱이 없으면 웹으로)
    setTimeout(function () {
        window.location.href = kakaoMapWebUrl;
    }, 500);
});
