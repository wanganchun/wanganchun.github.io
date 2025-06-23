function setFontSize(size) {
    const validSizes = ['small', 'normal', 'large'];
    if (!validSizes.includes(size)) return;

    const textContainers = document.querySelectorAll('.resizable-text');
    textContainers.forEach(container => {
        container.classList.remove(...validSizes);
        container.classList.add(size);
    });
}
