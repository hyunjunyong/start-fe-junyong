//id,title,image,cp
const popular = document.getElementById('tab1');
const recent = document.getElementById('tab2');
const view = document.getElementById('tab3');
const popularContent = popular.innerHTML;
// var button = document.getElementById('.btn btn-default');

$(function () {
    $.getJSON('popular.json', function (data) {
        $.each(data, function (i, data) {
            if (i < 10) {
                popular.innerHTML += "아이디 : " + data.id + ", 제목 : " + data.title +
                    ", cp : " + data.cp + ", 이미지 : " + "<img src ='" + data.img + "'>" + '<br/>';
            }
            
            else {      
            }
            // console.log(data.title);
        })
        $(function () {
            $("tab1").slice(0, 10).show(); // 최초 10개 선택
            $(".btn btn-default").click(function (e) { // Load More를 위한 클릭 이벤트e
                e.preventDefault();
                $("div:hidden").slice(0, 10).show(); // 숨김 설정된 다음 10개를 선택하여 표시
                if ($("div:hidden").length == 0) { // 숨겨진 DIV가 있는지 체크
                    alert("더 이상 항목이 없습니다"); // 더 이상 로드할 항목이 없는 경우 경고
                }
            });
        });
    });//popular.json 추출

    $.getJSON('recent.json', function (data) {
        $.each(data, function (i, data) {
            if (i < 10) {
                recent.innerHTML += "아이디 : " + data.id + ", 제목 : " + data.title +
                    ", 이미지 : " + ", cp : " + data.cp + "<img src ='" + data.img + "'>" + '<br/>';
            }
            else {
                
            }
            // console.log(data.title);
        })
    });//recent.json 추출

    $.getJSON('view.json', function (data) {
        $.each(data, function (i, data) {
            if (i < 10) {
                view.innerHTML += "아이디 : " + data.id + ", 제목 : " + data.title +
                    ", 이미지 : " + ", cp : " + data.cp + "<img src ='" + data.img + "'>" + '<br/>';
            }
            else {
                
            }
            // console.log(data.title);
        })
    });//view.json 추출

    
});

$("ul.nav nav-tabs li").each(function(){
    var tabMenu = $(this).find('a');
    var tabItem = $(this).nextAll('.tab-item');
    
    tabMenu.on('click',function(){
        var idx = tabMenu.index(this);
        tabItem.hide().eq(idx).show();
        tabMenu.removeClass('on').eq(idx).addClass('on');
    });
    tabMenu.eq(0).click();
})
$("document").ready(function () { //다큐먼트가 준비된다면
    //attr 현재속성

    $(".tabcontent").hide(); //모든 탭컨텐츠를 숨긴다.
    $(".tabcontent").eq(0).show(); //첫번째eq(0) 탭컨텐츠를 보여준다.

    // $('ul.nav nav-tabs li').click(function() {
    //     var activeTab = $(this).attr('data-tab');
    //     $('ul.nav nav-tabs li').removeClass('active');
    //     $('.tabcontent').removeClass('active');
    //     $(this).addClass('active');
    //     $('#' + activeTab).addClass('active').fadeIn();
    // })
    $('ul.nav nav-tabs li').click(function () { //위의 텝메뉴를 클릭하면
        $('ul.nav nav-tabs li').removeClass('active') //모든 텝메뉴에서 엑티프 클레스를 없앤다
        $(this).addClass('active') //클릭한 텝메뉴에 엑티브 클래스를 추가한다.
        $('.tabcontent').hide(); //텝메뉴를 눌렀을때 나오는 내용들을 숨긴다.
        // debugger;
        var tabid = $(this).attr('data-tab'); //클릭한 대상의 data값을 얻는다.
        $('#' + tabid).fadeIn(); //얻은 data 값을 아이디로 하는 대상(텝메뉴의 내용)을 페이드 인,보이게 한다
    })
});