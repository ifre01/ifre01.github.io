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

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.push({ name, message });
    localStorage.setItem("messages", JSON.stringify(messages));

    console.log("✅ 메시지 저장됨:", messages);

    displayMessages();

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

// 메시지 표시 (테이블 업데이트)
function displayMessages() {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    let messageContainer = document.getElementById("message-container");

    // 테이블이 없으면 새로 생성
    let table = document.getElementById("message-table");
    if (!table) {
        table = document.createElement("table");
        table.id = "message-table";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>이름</th>
                    <th>메시지</th>
                    ${isAdmin ? "<th>삭제</th>" : ""} <!-- 관리자일 경우 삭제 버튼 열 추가 -->
                </tr>
            </thead>
            <tbody></tbody>
        `;
        messageContainer.appendChild(table);
    }

    let tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; // 기존 내용 초기화

    messages.forEach((msg, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = msg.name;
        row.insertCell(1).textContent = msg.message;

        if (isAdmin) { // 관리자일 경우만 삭제 버튼 추가
            const deleteCell = row.insertCell(2);
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "삭제";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.onclick = () => deleteMessage(index);
            deleteCell.appendChild(deleteBtn);
        }
    });

    console.log("📌 현재 저장된 메시지 목록:", messages);
}

// 관리자 모드 토글 (삭제 버튼 활성화)
function toggleAdmin() {
    const password = prompt("관리자 비밀번호를 입력하세요:");
    if (password === "1234") {  // ✅ 비밀번호 설정 가능
        isAdmin = !isAdmin;
        displayMessages(); // 관리자 모드 변경 후 메시지 재출력
    } else {
        alert("비밀번호가 틀렸습니다!");
    }
}

// 메시지 삭제 (관리자만 가능)
function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages();
}
