// Add subtle animation on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Optional: Track clicks with Google Analytics later
            console.log('Button clicked!');
        });
    });
});