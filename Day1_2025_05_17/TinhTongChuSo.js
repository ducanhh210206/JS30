function tongChuSo(n){
    let tong = 0;
    let chuso = n.toString().split("");
    for(let i = 0; i < chuso.length; i++){
        tong += Number(chuso[i]);
    }
    return tong
}