/* console.log(window.outerWidth);

console.log(window.name);

window.open('http://www.daum.net');

window.opener

window.close(); */

//window.location
//window.alert(1)
/* const element = document.querySelector('.box');
console.log(box);
var debug = document.getElementById('debug'); */

/* var div = document.createElement('div');
console.log(div);
div.style.border = '1px solid #000';
div.innerHTML = 'Hello!';

document.body.appendChile(div); */

const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);