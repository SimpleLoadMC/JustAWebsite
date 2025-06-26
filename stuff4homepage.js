document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;

    // Load saved theme or default to dark
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light');
        toggleBtn.textContent = 'Dark Mode';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light');
        if (body.classList.contains('light')) {
            toggleBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            toggleBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Initialize highlight.js
    hljs.highlightAll();
});
