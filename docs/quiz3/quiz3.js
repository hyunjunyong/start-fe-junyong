var red = false;


function addred(){
    var boxlist=document.querySelectorAll('.box');
    var count=boxlist.length;
    if(red==false){
        for(i=0; i<count; i++){
            boxlist[i].classList.add('red');
            red=true;
        }
        
    }
    else if(red==true){
        
        for(i=0; i<count; i++){
            boxlist[i].className = boxlist[i].className.replace('red','');
            red=false;
        }
        
    }
}
function addB(){
    const add = document.createElement('div');
    add.className = 'box';

    document.body.appendChild(add);
}
function deleteB(){
    var $red = document.querySelectorAll('.box');

    $red[$red.length - 1].remove();
}
function addtext(){
    var $red = document.querySelectorAll('.box');
    var $txt = document.querySelector('.txt');
    if($red){
        for(var i =0; i<$red.length; i++){
            $red[i].innerHTML += $txt.value;
        }
    }
}
function resetB(){
    var $red = document.querySelectorAll('.box');

    for(var i = $red.length -1; i>=0; i--){
        $red[i].remove();
    }
}
function toggleB(){
    var $red = document.querySelectorAll('.box');
    if($red){
        for(var i=0; i<$red.length; i++){
            $red[i].classList.toggle('toggle');
        }
    }
}
function imageB(){
    var $red = document.querySelectorAll('.box');
    
    if($red.length == 0) addbox();{
        var add = document.createElement('img');
        add.className = 'box';
        add.style = 'display:block';
        add.src ="http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg";
        document.body.appendChild(add);
    }
}

document.querySelector('.add-red').addEventListener('click',addred);
document.querySelector('.add-btn').addEventListener('click',addB);
document.querySelector('.delete-btn').addEventListener('click',deleteB);
document.querySelector('.text-btn').addEventListener('click',addtext);
document.querySelector('.reset-btn').addEventListener('click',resetB);
document.querySelector('.image-btn').addEventListener('click',imageB);
document.querySelector('.toggle-btn').addEventListener('click', toggleB);
