function kiemTraMatKhau(matkhau){
    return (matkhau.length >= 8 && /[A-Z]/.test(matkhau) && /[a-z]/.test(matkhau) && /[0-9]/.test(matkhau));
}