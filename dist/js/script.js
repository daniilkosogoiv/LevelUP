function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const reviews__wrap = document.querySelector('.reviews__wrap');
const scroller = reviews__wrap.querySelector('.scroller');
const nextBtn = reviews__wrap.querySelector('.btn.next');
const prevBtn = reviews__wrap.querySelector('.btn.prev');
const itemWidth = reviews__wrap.querySelector('.item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))

        scroller.scrollBy({
        left: itemWidth,
        top: 0,
        behavior: 'smooth'
    });
    else

        scroller.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)

        scroller.scrollBy({
        left: -itemWidth,
        top: 0,
        behavior: 'smooth'
    });
    else

        scroller.scrollTo({
        left: scroller.scrollWidth,
        top: 0,
        behavior: 'smooth'
    });
}


//
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};