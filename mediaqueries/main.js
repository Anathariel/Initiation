let btBurger = document.getElementById('burger');
let mainMenu = document.getElementById('main-menu');
let closebtns = document.getElementById('close');

btBurger.addEventListener('click',function(){
    mainMenu.classList.toggle('active');
    
});

closebtns.addEventListener('click',function (){
  mainMenu.classList.toggle('active');
})
