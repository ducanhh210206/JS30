function demSoChiaHet(n) {
    let dem = 0;
    for ( let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            dem++;
        }
    }
    return dem
}