document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        speed: 1000, 
        cubeEffect: {
            shadow: false, 
            slideShadows: false, 
        },
        on: {
            init: function () {
        
                this.slides[0].style.marginTop = '0';
            }
        }
    });


    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetIndex = link.getAttribute('data-index');
            swiper.slideTo(targetIndex);
        });
    });
});


