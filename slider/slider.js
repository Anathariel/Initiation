let rightArrow = document.getElementById('right-arrow');
let listSlide = document.getElementById('list-slide');
let mLeft = 0;

rightArrow.addEventListener('click',function(){
    mLeft -= 500;
    listSlide.style.marginLeft = mLeft + 'px';
});