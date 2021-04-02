var $select = null;

function printBoards() {
  var $board = document.getElementById('board');
  var boardCount = 16;
  var isWhite = false;
  var className = '';
  var boardLineCount = 4;
  var str = '';

  for (var i = 0; i < boardCount; i++) {
    className = isWhite ? 'black' : 'white';

    str += '<span class="' + className + '"></span>';

    isWhite = !isWhite;

    if (i % boardLineCount === boardLineCount - 1) {
      isWhite = !isWhite;
    }
  }
  $board.innerHTML = str;
}

function select(event) {
  //$select 중복안되니깐 다른 블록 클릭하면 기존 클릭했던걸 삭제하게 만듬
  if ($select) {
    //추가된 select 클래스를 공백으로 설정
    $select.className = $select.className.replace(' select', '');
  }
  var el = event.currentTarget;
  el.className += ' select';
  //select 클래스가 추가된 el 을 $select에 저장
  $select = el;
}

function addEvent() {
  var $boards = document.querySelectorAll('span');
  var boardsLength = $boards.length;
  for (var i = 0; i < boardsLength; i++) {
    $boards[i].addEventListener('click', select);
  }
}

printBoards();
addEvent();