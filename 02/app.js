//alert('alert');

//var hi = prompt("당신은 누구십니까?");
//console.log(hi);

//var isdelete = confirm('정말 삭제합니까?');

//var enc = encodeURIComponent('카카오');
//decodeURIComponent(enc);
//문자열들을 URI에 맞게 디코드함

//isNaN('1'); //숫자 여부

//parseInt('12');
//parseInt('09', 10); //항상 두번째 인자 주는 습관
//parseFloat('10.33');

/*function test(){
    console.log('test()');
}*/

//var id = setTimeout(test, 1000); //1초후 1번실행

//var id = setInterval(test, 1000); //1초마다 계속 실행

//setInterval보다 나은 방법
/* function test(){
    console.log('test()');
    setTimeout(test,1000);
} */

/* var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age); */

/* var name = 'global';
function test(){
    console.log(name);
    var name = 'local'
    console.log(name);
} */

/* test2();
function test2(){
    console.log('test');
} */

/* function sum(a, b) {
    return a + b;
  }
console.log(sum(1, 3)); */

/* var car = {
    year: '2014',
    starting: function(){
        console.log('starting..');
    },
};

car.starting(); */

// 익명 함수표현식
/* var car = function() {
    //코드
  };
  
  //중첩함수
  
  // 익명 즉시실행함수, 스코프 보호
  (function() {
    //코드
  })(); */
  /* (function() {
      console.log('a');
    })(); */
/* function sum(x,y){
    if(!y)y=1;
    console.log(x+y);
}
console.log(sum(1,3));
 */
/* function sum() {
    var size = 0;
    for (var i = 0; i < arguments.length; i++) {
      size += arguments[i];
    }
  
    console.log(size);
  }
  
  sum(1, 2, 3, 4, 5, 6, 7);
   */
/*   function area1(width, height) {
    console.log(width * height);
  }
  
  function area2(options) {
    console.log(options.width * options.height);
  }
  
  console.log(area2({ width: 300, height: 200 }));
 */
  //call by value
/* function byValue(count) {
    count = count + 2;
  }
  var count = 3;
  byValue(count);
  console.log(count); //3
  
  //call by reference
  function byReference(count) {
    count.push('2');
  }
  var count = ['1'];
  byReference(count);
  console.log(count); // ["1","2"] */

/*   function table(){
    var result = 0;
    for(var x = 1; x < 10; x++){
        for(var y = 1; y < 10; y++){
            result = x*y;
            console.log(x + "*" + y +"="+ result);
        }
    }
  }
  console.log(table()); */

/* var input = [];
var sum = 0;
var inp = 0;
function call(){
    
    /* for(var count =0; count <5; count++){
        input.push(parseInt(window.prompt("더할 숫자를 입력해주세요!")));
        sum += input[count];
    } */
    /* while(true){
        inp = parseInt(window.prompt("더할 숫자를 입력해주세요!"));
        sum += inp;
    } */
    /* for(var count =0; input[count]!=null; count++){
        input.push(parseInt(window.prompt("더할 숫자를 입력해주세요!")));
        sum += input[count];
    } */
    
//}
/* call();
alert("숫자의 총합은" + "=" + sum); */

var num=0;
var sum=0;
while((num = prompt("숫자를 입력하세요")) !== '') {
    sum += parseInt(num);
}
alert(`합은 ${sum}`);
  
