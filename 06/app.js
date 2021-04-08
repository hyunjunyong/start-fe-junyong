//var은 재할당이 불가능
/* let a ='aa';
const b = "bb";
console.log(a,b); */

/* //es5
var cp = 'ssully';
var url = 'https://1boon.kakao.com/'+cp;
//es6
const url = `https://1boon.cacao.com/${cp}`

  */

// var str ='aaaaaaaaaaaaaaaaaaa\ssdsdf';
// const s = `aaaa
// cccc
// ddd`;
// console.log(str,s);

// function sum(x,y){
//     return x+y;
// }

// console.log(sum(1));


/* const arr = [1,2,3];

const newArr = arr.map(item => item +1);//인자가 하나일때는 괄호 생략가능
console.log(newArr);

document
    .getElementById('box')
    .addEventListener('click',(event) => console.log(1)); */

/* function sum(x,y,z){
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum(...numbers)); */

// function func(...param){
//     console.log(param);
// }

// func(1,2,3);

//es5
/* var team = obj.team;
var area = obj.area;

var col1 = cols[0];
var col2 = cols[1];

//es6
const { team, area } = obj;
const [col1, col2] = cols;
const [, cols2] = cols;

// es5
function getArea(options) {
  return options.width * options.height;
}

// es6
function getArea({ width, height }) {
  return width * height;
} */

