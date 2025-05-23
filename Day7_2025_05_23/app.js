document.querySelectorAll('.answers img').forEach(img => {
    img.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.src);
    });
});
document.querySelectorAll('.empty').forEach(cell => {
    cell.addEventListener('dragover', e => {
        e.preventDefault();
    });
    cell.addEventListener('drop', e => {
        e.preventDefault();
        const fruitSrc = e.dataTransfer.getData('fruit');
        cell.innerHTML = '<img src="${fruitSrc}" style="width: 100%; height:100%;">';
    });
});
