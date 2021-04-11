// const $box = document.getElementById('box');

// const offset = { x: 0, y: 0 };
// let isDown = false;

// $box.addEventListener('mousedown', (event) =>{
//   console.log('down');
//   isDown = true;
//   offset.x = $box.offsetLeft - event.clientX;
//   offset.y = $box.offsetTop - event.clientY;
// })

// $box.addEventListener('mouseup',(event) =>{
//   console.log('up');
//   isDown =false;
// })

// document.body.addEventListener('mousemove',(event) =>{
//   console.log('move');
//   if(!isDown)return;

//   console.log(event.clientX,event.clientY);
//   var left = (event.clientX +offset.x);
//   var top = (event.clientY + offset.y);
//   $box.setAttribute('style', 'left :'+left + 'px;'+ 'top : '+top+'px;')
// })

var isMoving = -1;
var boxes, mousePos;

window.onload = function () {
    boxes = document.getElementsByClassName("box");
    mousePos = { x: 0, y: 0 };
    box.style.left = event.clientX + mousePos.x;
    box.style.top = event.clientY + mousePos.y;
  //   boxes[0].style.left = "200px";
  //   boxes[0].style.top = "100px";

	// boxes[1].style.left = "400px";
  //   boxes[1].style.top = "100px";

	for (let i = 0; i < boxes.length; i++) {
		const index = i;
		boxes[index].addEventListener("mousedown", function (e) {
			const left = boxes[index].style.left, top = boxes[index].style.top;
			mousePos.x = e.clientX - parseInt(left.substr(0, left.length - 2));
			mousePos.y = e.clientY - parseInt(top.substr(0, top.length - 2));

			isMoving = i;
		});

		boxes[index].addEventListener("mousemove", function (e) {
			if (isMoving == index) {
				boxes[index].style.left = `${e.clientX - mousePos.x}px`;
				boxes[index].style.top = `${e.clientY - mousePos.y}px`;
			}
		});

		boxes[index].addEventListener("mouseup", function () {
			isMoving = -1;
		});
	}
	for (const box of this.boxes) {
		
	}
}