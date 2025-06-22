function setFontSize(size) {
  const root = document.documentElement;
  if (size === 'normal') root.style.fontSize = '16px';
  else if (size === 'large') root.style.fontSize = '18px';
  else if (size === 'xlarge') root.style.fontSize = '20px';
}
