function downloadImage() {
  const link = document.createElement('a');
  link.href = './picsss/Screenshot 2025-06-21 001521.png';
  link.download = 'MAX_FITNESS_SCREENSHOT.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
