document.addEventListener('mousemove', function(e){
let body = document.querySelector('.heart');
let heart = document.createElement('span');
heart.classList.add("valentine");
let x = e.offsetX;
let y = e.offsetY;
heart.style.left = x + 'px';
heart.style.top = y + 'px';


let size = Math.random() * 20;
heart.style.width = 10 + size + 'px';
heart.style.height = 10 + size + 'px';
let transformValue = Math.random()*360;
heart.style.transform = 'rotate('+transformValue+ 'deg)';

body.appendChild(heart);
setTimeout(function(){
    heart.remove();

}, 1000);



})