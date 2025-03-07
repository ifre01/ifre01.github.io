let lastScrollTop = 0; // 마지막 스크롤 위치

document.addEventListener("scroll", function () {
    const fullScreenWrapper = document.querySelector(".full-screen-wrapper");
    const rect = fullScreenWrapper.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    // 창문이 화면의 60% 위치에 도달하면 열리고, 다시 위로 스크롤하면 닫힘
    if (rect.top < window.innerHeight * 0.6 && scrollTop > lastScrollTop) {
        fullScreenWrapper.classList.add("open");
    } else if (rect.top > window.innerHeight * 0.6 && scrollTop < lastScrollTop) {
        fullScreenWrapper.classList.remove("open");
    }

    // 마지막 스크롤 위치 업데이트
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});