document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carrusel-track');
    const items = Array.from(track.children);
    const itemWidth = items[0].getBoundingClientRect().width;
    let index = 0;

    function moveCarousel() {
        index++;
        if (index === items.length) {
            index = 0;
        }
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    setInterval(moveCarousel, 3000);  // Cambia cada 3 segundos
});