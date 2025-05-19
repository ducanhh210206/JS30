function laNamNhuan(nam){
    return (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);
}