function setFontSize(size) {
  const textContainer = document.querySelector('.text-content');
  if (!textContainer) return;
  if (size === 'small') textContainer.style.fontSize = '14px';
  else if (size === 'normal') textContainer.style.fontSize = '16px';
  else if (size === 'large') textContainer.style.fontSize = '18px';
}
