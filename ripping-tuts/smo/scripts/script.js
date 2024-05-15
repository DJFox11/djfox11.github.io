// Add target="_blank" to all external links
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
        }
    });
});
