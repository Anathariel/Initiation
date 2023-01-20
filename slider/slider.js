let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let listSlide = document.getElementById('list-slide');
let mLeft = 0;

rightArrow.addEventListener('click',function(){
    mLeft -= 500;
    listSlide.style.marginLeft = mLeft + 'px';
});

leftArrow.addEventListener('click',function(){
    mLeft += 500;
    listSlide.style.marginLeft = mLeft + 'px';
});