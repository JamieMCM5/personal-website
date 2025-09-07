const emailButton = document.getElementById('emailCopier');

emailButton.onmouseover = function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltiptext';
    tooltip.innerText = emailButton.getAttribute('data-tooltip');
    document.body.appendChild(tooltip);

    const whatdoesthisdo = emailButton.getBoundingClientRect();
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${whatdoesthisdo.left + window.scrollX}px`;
    tooltip.style.top = `${whatdoesthisdo.top + window.scrollY - tooltip.offsetHeight}px`;
}

emailButton.onmouseleave = function() {
    const tooltip = document.querySelector('.tooltiptext');
    if (tooltip) {
        tooltip.remove();
    }
}