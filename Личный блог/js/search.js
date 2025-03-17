const searchInput = document.getElementById('search');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.location.href = 'search.html';
    }
});