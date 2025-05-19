function GiaiThua(n) {
    let ketqua = 1;
    for (let i =2; i <= n; i++) {
        ketqua *= i;
    }
    return ketqua;
}