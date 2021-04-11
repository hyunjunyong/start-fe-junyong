const $box = document.getElementById('box');
let offset = {x:0, y:0};
let isDown = false;

$box.addEventListener('mousedown' , (event) =>{
    isDown = true;
    //console.log($box.offsetLeft);
});

$box.addEventListener('mouseup' , (event)=>{
    isDown = false;
});

$box.addEventListener('mousemove' , (event)=>{
    if(!isDown) return;
    console.log(event.clientX,event.clientY);
    $box.style.left = event.clientX + offset.x;
    $box.style.top = event.clientY + offset.y;
});