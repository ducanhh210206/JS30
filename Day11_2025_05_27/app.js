chrome.storage.sync.get("newTitle", (data) => {
    if (data.newTitle) {
        const elements = document.querySelectorAll("h3,h2,h1,a,span");
        elements.forEach(el => {
            if (el.textContent.includes("Sinh viên UDU top 1 server Hoàng Quốc Việt")) {
                el.textContent = data.newTitle;
            }
        });
    }
});