//btn btn-outline-primary active 선택된 버튼에만 active class add 및 필터링
$(".btn-group.FEstudy > .btn.btn-outline-primary").click(function () {
  $(".btn-group.FEstudy > .btn.btn-outline-primary.active").removeClass(
    "active"
  );
  $(this).toggleClass("active");
});

//모두 button 클릭시 필터링
$(function () {
  $(".FEall").click(function () {
    $(".table.table.study-table > thead > tr > th").show();
    $(".table.table.study-table > tbody > tr > td").show();
    $(".table.table.study-table > tbody > tr > th").show();
  });
});

//도움 링크 button 클릭시 필터링
$(function () {
  $(".FEhelp").click(function () {
    $(".table.table.study-table > thead > tr > th").show();
    $(".table.table.study-table > tbody > tr > td").show();
    $(".table.table.study-table > tbody > tr > th").show();
    $(".table.table.study-table > tbody > tr > td")
      .not("table.table.study-table > tbody > tr > td.study-help")
      .hide();
    $("table.table.study-table > tbody > tr > th").hide();
    $(".table.table.study-table > thead > tr > th")
      .not(".table.table.study-table > thead > tr > th.study-help")
      .hide();
  });
});

//git button 클릭시 필터링
$(function () {
  $(".FEgit").click(function () {
    $(".table.table.study-table > thead > tr > th").show();
    $(".table.table.study-table > tbody > tr > td").show();
    $(".table.table.study-table > tbody > tr > th").show();
    $(".table.table.study-table > tbody > tr > td")
      .not("table.table.study-table > tbody > tr > td.study-git")
      .hide();
    $(".table.table.study-table > tbody > tr > th").hide();
    $(".table.table.study-table > thead > tr > th")
      .not(".table.table.study-table > thead > tr > th.study-git")
      .hide();
  });
});

//최신순 button 클릭시 필터링

$(".FErecent").click(function () {
  $(".table.table.study-table > thead > tr > th").show();
  $(".table.table.study-table > tbody > tr > td").show();
  $("table.table.study-table > tbody > tr > th").show();

  var order = $(this).val();

  var sorted = $("tbody.study > tr").sort(function (a, b) {
    var a = new Date($(a).find("td:last-child").text().split("-").join(" "));
    var b = new Date($(b).find("td:last-child").text().split("-").join(" "));
    return order == "desc" ? b - a : a - b;
  });
  $("tbody.study").html(sorted);

  $("tbody.study > tr").each(function (i) {
    $(this).find("td:first-child").text(i);
  });
});

//quiz btn btn-outline-primary active 선택된 버튼에만 active class add 및 필터링
$(".btn-group.FEQuiz > .btn.btn-outline-primary").click(function () {
  $(".btn-group.FEQuiz > .btn.btn-outline-primary.active").removeClass(
    "active"
  );
  $(this).toggleClass("active");
});

//quiz Table all 버튼 클릭시 필터링
$(function () {
  $(".QUIZall").click(function () {
    $(".table.table.quiz-table > thead > tr > th").show();
    $(".table.table.quiz-table > tbody > tr > td").show();
    $(".table.table.quiz-table > tbody > tr > th").show();
  });
});

//quiz table git 버튼 클릭시 필터링
$(function () {
  $(".QUIZgit").click(function () {
    $(".table.table.quiz-table > thead > tr > th").show();
    $(".table.table.quiz-table > tbody > tr > td").show();
    $(".table.table.quiz-table > tbody > tr > th").show();

    $(".table.table.quiz-table > tbody > tr > td")
      .not("table.table.quiz-table > tbody > tr > td.quiz-git")
      .hide();
    $(".table.table.quiz-table > tbody > tr > th").hide();
    $(".table.table.quiz-table > thead > tr > th")
      .not(".table.table.quiz-table > thead > tr > th.quiz-git")
      .hide();
  });
});
//const loader = document.querySelector(".spinner-border");

$(".spinner-border").show();
//table에 class.json 추가
$(function () {
  var study = $(".study");

  fetch("class.json")
    .then((res) => res.json())
    .then((res) => {
      for (var i = 0; i < res.length; i++) {
        var add_data = "";
        add_data += "<tr>";

        add_data += '<th scope="row" class = "study-week">';
        add_data += i + 1;
        add_data += '<td class ="study-title">' + res[i].title + "</td>";

        add_data += '<td class ="study-content">';
        add_data +=
          '<a href = "' +
          res[i]["docUrl"] +
          '" class="badge bg-secondary doc">' +
          "문서" +
          "</a>";
        /*a herf의 docUrl 값 추가*/

        add_data += "</td>";
        add_data += '<td class = "study-help">';

        if (res[i]["links"].length > 0) {
          for (var x = 0; x < res[i]["links"].length; x++) {
            add_data +=
              '<a href = "' +
              res[i]["links"][x] +
              '" class ="badge bg-secondary">';
            add_data += x + 1;
            add_data += "</a>";
          }
        } //도움링크: class.json에서 links.length>0 이상인 속성들만 표시
        //links 값 추가

        add_data += "</td>";
        add_data += '<td class ="study-date">' + res[i].date + "</td>";

        add_data += '<td class ="study-git">';
        add_data += '<a href = "' + res[i]["gitUrl"] + '">' + "git" + "</a>";
        add_data += "</td>";

        //gitUrl 값 추가

        add_data += "</tr >";

        study.append(add_data);
        $(".spinner-border").hide();
      }
    });
});

$(function () {
  var quiz = $(".quiz");
  fetch("quiz.json")
    .then((res) => res.json())
    .then((res) => {
      for (var i = 0; i < res.length; i++) {
        var add_data = "";
        add_data += "<tr>";
        add_data += "<td>" + res[i].title + "</td>";
        add_data += "<td>";
        add_data +=
          '<a href = "' +
          res[i]["docUrl"] +
          '" class = "badge bg-secondary doc">' +
          "문서" +
          "</a>";

        add_data += "</td>";
        add_data += "<td>";
        add_data +=
          '<a href = "' + res[i]["previewUrl"] + '">' + "보기" + "</a>";

        add_data += "</td>";
        add_data += '<td class = "quiz-git">';
        add_data += '<a href = "' + res[i]["gitUrl"] + '">' + "git" + "</a>";

        add_data += "</td>";
        add_data += "</tr>";

        quiz.append(add_data);
      }
    });
});
