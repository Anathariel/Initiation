let newDiv = document.createElement('div');
newDiv.style = "width: 200px; height: 200px; background-color: darkcyan; border-radius:3px; margin: 0 auto";
document.body.appendChild(newDiv);

let text = document.createElement('p');
text.style = "color: lightcyan; text-align: center; padding-top:45%;font-weight: bolder;";
text.innerHTML = "Hello World !";
newDiv.appendChild(text);

newDiv.addEventListener("click",function(){
    newDiv.style = "width: 200px; height: 200px; background-color: crimson; border-radius:3px; margin: 0 auto";
    text.style = "color: white; text-align: center; padding-top:45%;font-weight: bolder;";
    text.innerHTML = "Goodbye World !";
});
