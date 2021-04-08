const $box = document.getElementById('box');

const offset = { x: 0, y: 0 };
let isDown = false;

$box.addEventListener('mousedown', (event) =>{
  console.log('down');
  isDown = true;
  offset.x = $box.offsetLeft - event.clientX;
  offset.y = $box.offsetTop - event.clientY;
})

$box.addEventListener('mouseup',(event) =>{
  console.log('up');
  isDown =false;
})

document.body.addEventListener('mousemove',(event) =>{
  console.log('move');
  if(!isDown)return;

  console.log(event.clientX,event.clientY);
  var left = (event.clientX +offset.x);
  var top = (event.clientY + offset.y);
  $box.setAttribute('style', 'left :'+left + 'px;'+ 'top : '+top+'px;')
})