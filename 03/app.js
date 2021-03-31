/* window.outerWidth

window.name

window.open('http://wwwdaum.net');

window.opener
window.close();

location.href= 'http://www.daum.net';

location.reload(); */

/* const element = document.getElementById('wrap');

const element = document.querySelector('.item');

const elements =  document.querySelectorAll('div'); */

/* const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";

document.body.appendChild(div); */

/* const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";

document.body.appendChild(div); */

/* document.querySelector('#debug').innerHTML = text; */

/* const el = document.getElementById('div1');
el.remove(); */

/* const list = document.getElementById('list'); 
list.removeChild(list.children[0]); */

/* //프로퍼티로 주기
window.load=function(){
    alert("load");
};

//DOM 레벨2
window.addEventListener('load', function(){
    alert("load");
}); */


/* var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
}); */

/* var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
    }
}); */

/* event.stopPropagation(); // 이벤트 전파 중지

event.preventDefault(); // 기본 행동 중지 */

