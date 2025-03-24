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

// 메시지 표시 (테이블 형식)
function displayMessages() {
    const messageTable = document.getElementById("message-table");
    if (!messageTable) return; // 테이블이 없으면 종료

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    // 테이블 초기화 (헤더 제외)
    messageTable.innerHTML = `
        <tr>
            <th>이름</th>
            <th>메시지</th>
            <th>삭제</th>
        </tr>
    `;

    messages.forEach((msg, index) => {
        const row = messageTable.insertRow(-1); // 새 행 추가
        row.insertCell(0).textContent = msg.name; // 이름
        row.insertCell(1).textContent = msg.message; // 메시지
        
        // 삭제 버튼 추가
        const deleteCell = row.insertCell(2);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "삭제";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => deleteMessage(index);
        deleteCell.appendChild(deleteBtn);
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