const main = document.querySelector("#main");
const writein = document.querySelector("#write");
const patientModal = document.querySelector("#PatientsModal")

function begin_write(k) {
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
/////////환자 기본 정보 추가를 위한 옵션 선택 창 /////
function info_basicOption_close() {
  document.getElementById("Info_basic-option").style.display = 'none';
}


function info_cart() {
  var cart_length =$('#info_basic-option-cart').find('div.info_basic-option-button3').length;
  var id = new Array();
  //id배열에 cart에 추가되어 있는 id들을 넣는 함수//
  for (k = 0; k < (cart_length + 1); k++) {
    id.splice(0, 0, $('#info_basic-option-cart').find('div.info_basic-option-button3:eq('+ k +')').prop('id'));
  };
  return [id, cart_length]
}

$('#info_basicOption_past').click(function() {
  var copy = $('#info_basicOption_past').parent().clone();
  copy.children().prop('id', 'info_basicOption_past_carted' )
  copy.children().attr('role', '');
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  //id배열에 클릭한 값의 id가 존재한다면 추가하지 않고 삭제//
  if(id.includes('info_basicOption_past_carted')) {
    $('#info_basicOption_past_carted').parent().remove();
    $('#info_basicOption_past').attr('style','');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_past').attr('style', 'background-color:#D9D7F1; color:rgb(238, 78, 52);');
  }
});


$('#info_basicOption_surgery').click(function() {
  var copy = $('#info_basicOption_surgery').parent().clone();
  copy.children().prop('id', 'info_basicOption_surgery_carted');
  copy.children().attr('role', '');
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  //id배열에 클릭한 값의 id가 존재한다면 추가하지 않고 삭제//
  if(id.includes('info_basicOption_surgery_carted')) {
    $('#info_basicOption_surgery_carted').parent().remove();
    $('#info_basicOption_surgery').attr('style','');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_surgery').attr('style', 'background-color:#D9D7F1; color:rgb(238, 78, 52);');
  }
});


$('#info_basicOption_allergy').click(function() {
  var copy = $('#info_basicOption_allergy').parent().clone();
  copy.children().prop('id', 'info_basicOption_allergy_carted');
  copy.children().attr('role', '');
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  //id배열에 클릭한 값의 id가 존재한다면 추가하지 않고 삭제//
  if(id.includes('info_basicOption_allergy_carted')) {
    $('#info_basicOption_allergy_carted').parent().remove();
    $('#info_basicOption_allergy').attr('style','');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_allergy').attr('style', 'background-color:#D9D7F1; color:rgb(238, 78, 52);');
  }
});

//카트에 담겨져있는 컨텐츠 리셋//
$('#info_basic-option-cartReset').click(function() {
  $('#info_basic-option-cart').children().remove();
  $('#info_basicOption_past').attr('style', 'background-color:#FAEEE0; color:rgb(93, 23, 21);');
  $('#info_basicOption_allergy').attr('style', 'background-color:#FAEEE0; color:rgb(93, 23, 21);');
  $('#info_basicOption_surgery').attr('style', 'background-color:#FAEEE0; color:rgb(93, 23, 21);');
})


//카트에 담겨져있는 것 입력//
$('#info_basic-option-input').click(function() {
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  var id_length = id.length;
  var tmp = "";

  for (k = 1; k < id_length; k++) {
    var l = ""
    l = id[k];
    var split_id = '#info-basicInfo-' + l.split("_")[2];
    tmp += $(split_id).clone().html();
  }
  $('#info-contents-hidden1').children().remove();
  $('#info-contents-hidden1').append(tmp);
  $('#info-contents-hidden').parent().parent().prop('style', 'display:grid');
  info_basicOption_close();
})
/*
if (id.includes('info_basicOption_past_carted')) {
  $('#info-contents-hidden1').append($('#info-basicInfo-past'));
} else if (id.includes('info_basicOption_surgery_carted')) {
  $('#info-contents-hidden1').append($('#info-basicInfo-surgery'));
} else if (id.includes('info_basicOption_allergy_carted')) {
  $('#info-contents-hidden1').append($('#info-basicInfo-allergy'));
}
$('#info-contents-hidden1').parent().parent().parent().attr('style', 'display:grid;');*/

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

var care1 = 1;
var care2 = 1;

function add_checkup_box3() {
  contents = '';
  var i = 'str1_' + care1++;
  var l = 'info-contents-checkup3_' + care2++;
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
