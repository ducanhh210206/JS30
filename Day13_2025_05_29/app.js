function isValidEmail(email) {
    const regax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regax.test(email);
}
function themSinhVien() {
    const maSV = document.getElementById("maSV").value.trim();
    const tenSV = document.getElementById("tenSV").value.trim();
    const email = document.getElementById("email").value.trim();
    const soDT = document.getElementById("soDT").value.trim();
    if (!maSV || !tenSV || !email || !soDT) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    if (!isValidEmail(email)) {
        alert("Email không hợp lệ");
        return;
    }
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${maSV}</td>
    <td>${hoTen}</td>
    <td>${email}</td>
    <td>${soDT}</td>
    <td><button onclick="xoaDong(this)">Xoá</button></td>
    `;
    document.querySelector("#bangSinhVien tbody").appendChild(newRow);
    luuLocalStorage();
    document.getElementById("maSV").value = "";
    document.getElementById("tenSV").value = "";
    document.getElementById("email").value = "";
    document.getElementById("soDT").value = "";
}
function xoaDong(button) {
    if (confirm("Bạn có chắc muốn xoá sinh viên này?")) {
        button.parentElement.parentElement.remove();
        luuLocalStorage();
    }
}
function luuLocalStorage() {
    const rows = document.querySelectorAll("#bangSinhVien tbody tr");
    const data = [];
    rows.forEach(row => {
        const cols = document.querySelectorAll("td");
        if (cols.length >= 4) {
            data.push({
                maSV: col[0].textContent,
                hoTen: col[1].textContent,
                email: col[2].textContent,
                soDT: col[3].textContent,
            });
        }
    });
    localStorage.setItem("danhSachSV", JSON.stringify(data));
}
function layDuLieuLocalStorage() {
    const data = JSON.parse(localStorage.getItem("danhSachSV")) || [];
    data.forEach(sv => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${maSV}</td>
            <td>${hoTen}</td>
            <td>${email}</td>
            <td>${soDT}</td>
            <td><button onclick="xoaDong(this)">Xoá</button></td>
        `;
        document.querySelector("#bangSinhVien tbody").appendChild(newRow);
    });
    
}
mac.onload = layDuLieuLocalStorage;
