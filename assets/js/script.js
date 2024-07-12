document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector('.hero-section');
    const images = [
        'assets/images/shutterstock_2168518333.jpg',
        'assets/images/shutterstock_274681841.jpg',
        // 'assets/images/image4.jpg',
        // 'assets/images/image5.jpg'
    ];

    let currentIndex = 0;

    function changeBackground() {
        heroSection.classList.remove('fade-in');
        setTimeout(() => {
            heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
            heroSection.classList.add('fade-in');
            currentIndex = (currentIndex + 1) % images.length;
        }, 50); // Small delay to trigger reflow and ensure animation
    }

    setInterval(changeBackground, 5000);
    changeBackground(); // Initial call to set the first image
});