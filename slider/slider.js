let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let listSlide = document.getElementById('list-slide');
let slides = document.getElementsByClassName('slide')
let mLeft = 0;

rightArrow.addEventListener('click', function () {
    if (mLeft - 500 >= -2000) {
        mLeft -= 500;
        listSlide.style.marginLeft = mLeft + 'px';
    }
});

leftArrow.addEventListener('click', function () {
    if (mLeft + 500 <= 0) {
        mLeft += 500;
        listSlide.style.marginLeft = mLeft + 'px';
    }
});