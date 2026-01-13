// Dark Mode Toggle Script
document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');

    if (!darkModeSwitch) return;

    // Check if dark mode preference is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply saved preference on page load
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    // Listen for toggle changes
    darkModeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
});
