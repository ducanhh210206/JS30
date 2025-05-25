function changeBackground() {
    const select = document.getElementById("imageSelect");
    let imageURL = '';
    switch (select.value) {
        case "mountain":
            imageURL = "Mountain.jpg";
            break;
        case "sea":
            imageURL = "Sea.jpg";
            break;
        case "forest":
            imageURL = "Forest.jpg";
            break;
    }
    document.body.style.backgroundImage = `url(${imageURL})`;
}