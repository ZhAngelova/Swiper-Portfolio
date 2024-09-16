document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        speed: 1000, // Transition speed in milliseconds (1000ms = 1 second)
        cubeEffect: {
            shadow: false, // Disables the shadow for the cube effect.
            slideShadows: false, // Disables the slide shadows.
        },
        on: {
            init: function () {
                // Ensure the first slide is active without any margin or padding issues.
                this.slides[0].style.marginTop = '0';
            }
        }
    });

    // Select all navigation links with the class 'nav-link'.
    const navLinks = document.querySelectorAll('.nav-link');
    // Iterate over each navigation link.
    navLinks.forEach(link => {
        // Add a click event listener to each link.
        link.addEventListener('click', (e) => {
            // Prevent the default anchor click behavior.
            e.preventDefault();
            // Get the target index from the 'data-index' attribute of the clicked link.
            const targetIndex = link.getAttribute('data-index');
            // Slide to the target index in the Swiper instance.
            swiper.slideTo(targetIndex);
        });
    });
});

