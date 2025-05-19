function tongSoLe(n){
    let tong = 0;
    for (let i = 1; i < n; i++){
        if (i % 2 !== 0) {
            tong += i
        }
    }
    return tong
}