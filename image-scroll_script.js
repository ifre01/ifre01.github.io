// 모달 요소들 가져오기
var modal = document.getElementById("imageModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

// 이미지 클릭 시 모달 열기
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// 닫기 버튼 클릭 시 모달 닫기
span.onclick = function() {
  modal.style.display = "none";
}

// 모달 바깥 클릭 시 닫기
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
