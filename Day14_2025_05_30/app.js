let currentEditingRow = null;
function themSinhVien() {
    const maSV = document.getElementById("maSV").value.trim();
    const hoTen = document.getElementById("hoTen").value.trim();
    const email = document.getElementById("email").value.trim();
    const soDT = document.getElementById("soDT").value.trim();
    if (!maSV || !hoTen || !email || !soDT) {
        alert("Vui lòng nhập đầy đủ thông tin sinh viên!");
        return;
    }
    if (btn.innerText === "Lưu" && currentEditingRow) {
        currentEditingRow.cell[0].innerText = maSV;
        currentEditingRow.cell[1].innerText = hoTen;
        currentEditingRow.cell[2].innerText = email;
        currentEditingRow.cell[3].innerText = soDT;

        btn.innerText = "Thêm";
        currentEditingRow = null;
        resetForm();
    } else {
        const tbody = document.querySelector("#bangSinhVien tbody");
        const newRow = document.createElement("tr");

        newRowrow.innerHTML = `
            <td>${maSV}</td>
            <td>${hoTen}</td>
            <td>${email}</td>
            <td>${soDT}</td>
            <td><button onclick="suaSinhVien(this)">Sửa</td>
        `;

        tbody.appendChild(newRow);
        resetForm();
    }
}
function suaSinhVien(btn) {
    const row = btn.parentElement.parentElement;
    const cells = row.getElementByTagName("td");
    document.getElementById("maSV").value = cells[0].innerText;
    document.getElementById("hoTen").value = cells[1].innerText;
    document.getElementById("email").value = cells[2].innerText;
    document.getElementById("soDT").value = cells[3].innerText;

    currentEditingRow = row;

    document.querySelector(".form-container button").innnerText = "Lưu";
}
function resetForm() {
    document.getElementById("maSV").value = "";
    document.getElementById("hoTen").value = "";
    document.getElementById("email").value = "";
    document.getElementById("soDT").value = "";
}
