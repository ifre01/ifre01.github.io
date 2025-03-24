let isAdmin = false; // 관리자 모드 여부

document.addEventListener("DOMContentLoaded", () => {
    displayMessages();
});

// 축하 메시지 추가
function addMessage() {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !message) {
        alert("이름과 메시지를 입력해주세요!");
        return;
    }

    const newMessage = `${name} | ${message}`;
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(newMessage);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages();
    
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

// 메시지 표시
function displayMessages() {
    const messageList = document.getElementById("message-list");
    if (!messageList) return; // 해당 요소가 없으면 함수 종료
    
    messageList.innerHTML = "";
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.forEach((msg, index) => {
        const div = document.createElement("div");
        div.classList.add("message");
        div.innerHTML = `
            ${msg} 
            <button class="delete-btn" onclick="deleteMessage(${index})">삭제</button>
        `;
        messageList.appendChild(div);
    });

    toggleAdminView();
}

// 관리자 모드 토글 (삭제 버튼 활성화)
function toggleAdmin() {
    const password = prompt("관리자 비밀번호를 입력하세요:");
    if (password === "1234") {  // ✅ 비밀번호 설정 가능
        isAdmin = !isAdmin;
        toggleAdminView();
    } else {
        alert("비밀번호가 틀렸습니다!");
    }
}

// 관리자 모드에서만 삭제 버튼 표시
function toggleAdminView() {
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.style.display = isAdmin ? "inline-block" : "none";
    });
}

// 메시지 삭제 (관리자만 가능)
function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages();
}