function generateImages(src, alt, containerId) {
  const container = document.getElementById(containerId);
  for (let i = 0; i < 6; i++) {
    const img = document.createElement('img');
    img.className = 'drink-image';
    img.src = src;
    img.alt = alt;
    container.appendChild(img);
  }
}
