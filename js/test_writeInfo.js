const main = document.querySelector("#main");
const writein = document.querySelector("#write");
const patientModal = document.querySelector("#PatientsModal")

function begin_write(k) {
  console.log(global_modalData.id.innerText);
  document.getElementById("info-name").innerHTML = global_modalData.id.innerText;
  document.getElementById("info-header-name").innerHTML = global_modalData.id.innerText;
  document.getElementById("PatientsModal").style.display = "none";
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    writein.style.WebkitAnimation = "fadeIn 0.5s";
    writein.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      writein.style.display = "block"
    }, 200)
  }, 200);
  global_modalData = {};
};

function ToList() {
  writein.style.WebkitAnimation = "fadeOut 0.5s";
  writein.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    main.style.WebkitAnimation = "fadeIn 0.5s";
    main.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      writein.style.display = "none";
      main.style.display = "block";
    }, 200)
  }, 200);
};

//신규환자 팝업창
function New_Info_open() {
  document.getElementById("New_Info").style.display = 'block';
};

function New_Info_close() {
  document.getElementById("New_Info").style.display = 'none';
}
///////////////////////////////////////////////////////////////////
//case1: 시술/수술 클릭 시 열림
function New_1_open() {
  document.getElementById("New_1").style.display = 'block';
  document.getElementById("New_Info").style.display = 'none';
};

function New_1_close() {
  document.getElementById("New_1").style.display = 'none';
  document.getElementById("New_Info").style.display = 'block';
}
//case2 질병 악화 누를 시 열림
function New_2_open() {
  document.getElementById("New_2").style.display = 'block';
  document.getElementById("New_Info").style.display = 'none';
};

function New_2_close() {
  document.getElementById("New_2").style.display = 'none';
  document.getElementById("New_Info").style.display = 'block';
}
//case3 검사 누를 시 열림
function New_3_open() {
  document.getElementById("New_3").style.display = 'block';
  document.getElementById("New_Info").style.display = 'none';
};

function New_3_close() {
  document.getElementById("New_3").style.display = 'none';
  document.getElementById("New_Info").style.display = 'block';
}

//////////////////////////////////////////////////////////////
// 시술/수술에서 수술 버튼을 눌렀을 때 나오는 창
function surgery_open() {
  document.getElementById("surgery").style.display = 'block';
};

function surgery_close() {
  document.getElementById("surgery").style.display = 'none';
}
//검사정보 버튼을 눌렀을 때 나오는 창
function checkup_open() {
  document.getElementById("checkup").style.display = 'block';
};

function checkup_close() {
  document.getElementById("checkup").style.display = 'none';
}
// 증상 관리, 치료 상황을 눌렀을 때 나오는 창
function care_open() {
  document.getElementById("care").style.display = 'block';
};

function care_close() {
  document.getElementById("care").style.display = 'none';
}
///////////////////////////////////////////////////////////////
// prn 오더 눌럿을 때 나오는 창
///////////////////////////////////////////////////////////////
// Vital을 눌렀을 때 나오는 창
function vital_open() {
  document.getElementById("vital").style.display = 'block';
};

function vital_close() {
  document.getElementById("vital").style.display = 'none';
}
// 특이사항을 눌렀을 때 나오는 창
function unusal_open() {
  document.getElementById("unusal").style.display = 'block';
};

function unusal_close() {
  document.getElementById("unusal").style.display = 'none';
}
///////////////////////////////////////////////////////////////
$("#info-contents-hidden1").mouseover(function() {
  $("#info-contents-write-add1").fadeIn(100);
  document.getElementById("info-contents-write-add2").style.display = 'none';
  document.getElementById("info-contents-write-add3").style.display = 'none';
});

$("#info-contents-hidden2").mouseover(function() {
  $("#info-contents-write-add2").fadeIn(100);
  document.getElementById("info-contents-write-add1").style.display = 'none';
  document.getElementById("info-contents-write-add3").style.display = 'none';
});

$("#info-contents-hidden3").mouseover(function() {
  $("#info-contents-write-add3").fadeIn(100);
  document.getElementById("info-contents-write-add1").style.display = 'none';
  document.getElementById("info-contents-write-add2").style.display = 'none';
});

$("#info-sidebar-repeat").mouseover(function() {
  document.getElementById("info-sidebar-repeat-hover").style.display = 'flex';
});
$("#info-sidebar-repeat").mouseout(function() {
  document.getElementById("info-sidebar-repeat-hover").style.display = 'none';
});
$("#info-sidebar-special").mouseover(function() {
  document.getElementById("info-sidebar-special-hover").style.display = 'flex';
});
$("#info-sidebar-special").mouseout(function() {
  document.getElementById("info-sidebar-special-hover").style.display = 'none';
});
var sym = 1;

function add_checkup_box1() {
  contents = '';
  var l = 'info-contents-checkup1_' + sym++;
  var contents = $('#info-contents-checkup1_0').clone();
  contents.attr('id', l)
  $('#info-contents-hidden1').append(contents);
};

var checkup = 1;
var checkup2 = 1;

function add_checkup_box2() {
  contents = '';
  var i = 'str2_' + checkup++;
  var l = 'info-contents-checkup2_' + checkup2++;
  var contents = $('#info-contents-checkup2_0').clone();
  contents.find('label').attr('for', i)
  contents.find('input:eq(0)').attr('id', i)
  contents.attr('id', l)
  $('#info-contents-hidden2').append(contents);
};

var cure1 = 1;
var cure2 = 1;

function add_checkup_box3() {
  contents = '';
  var i = 'str1_' + cure1++;
  var l = 'info-contents-checkup3_' + cure2++;
  var contents = $('#info-contents-checkup3_0').clone();
  contents.find('label').attr('for', i)
  contents.find('input:eq(0)').attr('id', i)
  contents.attr('id', l)
  $('#info-contents-hidden3').append(contents);
};

var angle_r = 0;
$('#repeat-icon').click(function() {

  if (angle_r == 0) {
    $('#repeat-icon').css('transform', 'rotate(90deg)');
    angle_r++;
    document.getElementById("repeatHidden").style.display = 'block'
  } else if (angle_r == 1) {
    $('#repeat-icon').css('transform', 'rotate(0deg)');
    angle_r--;
    document.getElementById("repeatHidden").style.display = 'none'
  }
});

var angle_s = 0;
$('#special-icon').click(function() {
  if (angle_s == 0) {
    $('#special-icon').css('transform', 'rotate(90deg)');
    angle_s++;
    document.getElementById("specialHidden").style.display = 'block'
  } else if (angle_s == 1) {
    $('#special-icon').css('transform', 'rotate(0deg)');
    angle_s--;
    document.getElementById("specialHidden").style.display = 'none'
  }
});
