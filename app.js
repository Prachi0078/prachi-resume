// Simple JavaScript to print resume when pressing 'P'
document.addEventListener('keydown', function(e) {
if (e.key.toLowerCase() === 'p') {
window.print();
}
});

// Simple alert when clicking on heart
document.querySelector('footer span').addEventListener('click', () => {
  alert('Made with ❤️ by Prachi!');
});