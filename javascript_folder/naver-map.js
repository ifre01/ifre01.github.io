document.getElementById("naverMapLink").addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 막기

    var naverMapAppUrl = "nmap://search?query=웨스턴베니비스 신도림";
    var naverMapWebUrl = "https://map.naver.com/v5/search/웨스턴베니비스%20신도림";

    // 앱 실행 시도
    window.location.href = naverMapAppUrl;

    // 일정 시간 후 웹 링크로 이동 (앱이 없으면 웹으로)
    setTimeout(function () {
        window.location.href = naverMapWebUrl;
    }, 500);
});
