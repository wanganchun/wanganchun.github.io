function setFontSize(size) {
    const validSizes = ['small', 'normal', 'large'];
    if (!validSizes.includes(size)) return;

    // 只針對有 .resizable-text 的元素切換字體大小
    const textContainers = document.querySelectorAll('.resizable-text');
    textContainers.forEach(container => {
        container.classList.remove(...validSizes);
        container.classList.add(size);
    });
}

// 頁面載入時判斷是否在第一層資料夾（例如 URL path 是否只有一層）
// 如果是第一層，則不顯示字體大小控制器（假設控制器有 id="font-size-controller"）
document.addEventListener('DOMContentLoaded', () => {
    const pathSegments = window.location.pathname.split('/').filter(seg => seg.length > 0);
    // pathSegments[0] 是第一層資料夾或檔名
    // 假設第一層頁面是根目錄或只有一層資料夾
    if (pathSegments.length <= 1) {
        const controller = document.getElementById('font-size-controller');
        if (controller) controller.style.display = 'none'; // 隱藏控制器
    }
});
