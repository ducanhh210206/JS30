function laSoNguyenTo(n){
    if (n < 2) return false;
    for (let i = 1; i <= Math.sqrt(n); i++){
        if (n % i === 0);
            return false;
    }
    return true
}