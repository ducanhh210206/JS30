function bangCuuChuong(n) {
    for (let i = 1; i <= 9; i++) {
        console.log("Bảng Củu Chương ${i}:");
        for (let j = 1; j <= 10; j++) {
            console.log("${i} x ${j} = ${i*j}");
        }
        console.log("-------------")
    }
}