const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 900,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        320: {
            direction: 'vertical',
            slidesPerView: 3,
            mousewheel: true,
            loop: true,
            spaceBetween: 110
        },
        891: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 70
        }
    }
});


const buttonModal = document.querySelector('.main-display__button');
const modalWindow = document.querySelector('.modal');

buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';

})

modalWindow.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal')) {
        modalWindow.classList.remove('active');
        document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    }
})