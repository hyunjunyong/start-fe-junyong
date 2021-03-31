var link = document.querySelector('#link');
link.addEventListener('clcik',function(){
console.log(1);
//event.stopPropagation();

});

/* var list = document.querySelector('#list');
console.log(list.children);

var app = document.getElementById('list');

app.addEventListener('click',function(event){
    if(event.target.nodeName == 'LI'){
        console.log(2);
        event.stopPropagation();
    }
}); */
/* document.body.addEventListener('click',function(){
    console.log('body');
});  */
// for(var i=0; i<list.childrenlength; i++){
//     console.log(list.children[i]);
//     list.children[i].addEventListener('click',function(){
//         console.log(1);
//     });
// }
/* var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(argument,this,event,event.type,event.currentTarget);
}
*/

/* console.log(window.outerWidth); */

/*console.log(window.name);

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

/* const span = document.createElement('span');
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span); */

/* var debug = document.getElementById('debug');
debug.remove(); */

/* const list = document.getElementById('list');
list.removeChild(list.children(0)); */

// js코드)  dom을 생성하는 메소드는?
// .createElement()
 
// 이 문제에 플래그를 지정
// js코드)  dom을 제거하는 메소드는?
// .remove()
// .removeChild() 
// 이 문제에 플래그를 지정
// js코드)  dom에 이벤트를 추가하는 메소드는?
// addEventListener()
// removeEventListener()
