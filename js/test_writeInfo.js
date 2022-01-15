const main = document.querySelector("#main");
const writein = document.querySelector("#write");
const patientModal = document.querySelector("#PatientsModal");

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
};
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
/////////환자 기본 정보 추가를 위한 옵션 선택 창 /////
function info_basicOption_open() {
  document.getElementById("Info_basic-option").style.display = 'block';
}
function info_basicOption_close() {
  document.getElementById("Info_basic-option").style.display = 'none';
};


function info_cart() {
  var cart_length = $('#info_basic-option-cart').find('div.info_basic-option-button3-carted').length;
  var id = new Array();
  //id배열에 cart에 추가되어 있는 id들을 넣는 함수//
  for (k = 0; k < (cart_length + 1); k++) {
    id.splice(0, 0, $('#info_basic-option-cart').find('div.info_basic-option-button3-carted:eq(' + k + ')').prop('id'));
  };
  return [id, cart_length]
};

$('#info_basicOption_past').click(function() {
  var copy = $('#info_basicOption_past').parent().clone();
  copy.children().prop('id', 'info_basicOption_past_carted')
  copy.children().attr('role', '');
  copy.children().attr('class', 'info_basic-option-button3-carted')
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  //id배열에 클릭한 값의 id가 존재한다면 추가하지 않고 삭제//
  if (id.includes('info_basicOption_past_carted')) {
    $('#info_basicOption_past_carted').parent().remove();
    $('#info_basicOption_past').attr('class', 'info_basic-option-button3');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_past').attr('class', 'info_basic-option-button3-after');
  }
});


$('#info_basicOption_surgery').click(function() {
  var copy = $('#info_basicOption_surgery').parent().clone();
  copy.children().prop('id', 'info_basicOption_surgery_carted');
  copy.children().attr('role', '');
  copy.children().attr('class', 'info_basic-option-button3-carted')
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  //id배열에 클릭한 값의 id가 존재한다면 추가하지 않고 삭제//
  if (id.includes('info_basicOption_surgery_carted')) {
    $('#info_basicOption_surgery_carted').parent().remove();
    $('#info_basicOption_surgery').attr('class', 'info_basic-option-button3');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_surgery').attr('class', 'info_basic-option-button3-after');
  }
});


$('#info_basicOption_allergy').click(function() {
  var copy = $('#info_basicOption_allergy').parent().clone();
  copy.children().prop('id', 'info_basicOption_allergy_carted');
  copy.children().attr('role', '');
  copy.children().attr('class', 'info_basic-option-button3-carted')
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  //id배열에 클릭한 값의 id가 존재한다면 추가하지 않고 삭제//
  if (id.includes('info_basicOption_allergy_carted')) {
    $('#info_basicOption_allergy_carted').parent().remove();
    $('#info_basicOption_allergy').attr('class', 'info_basic-option-button3');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_allergy').attr('class', 'info_basic-option-button3-after');
  }
});

//카트에 담겨져있는 컨텐츠 리셋//
$('#info_basic-option-cartReset').click(function() {
  $('#info_basic-option-cart').children().remove();
  $('#info_basicOption_past').attr('style', 'background-color:#FAEEE0; color:rgb(93, 23, 21);');
  $('#info_basicOption_allergy').attr('style', 'background-color:#FAEEE0; color:rgb(93, 23, 21);');
  $('#info_basicOption_surgery').attr('style', 'background-color:#FAEEE0; color:rgb(93, 23, 21);');
});

//내원 이유에 대한 input value 가져오기//
function dia_inputValue() {
  var dia = global_modalData.dia.innerText;
  return dia;
};

//카트에 담겨져있는 것 입력//
$('#info_basic-option-input').click(function() {
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  var id_length = id.length;
  var dia = dia_inputValue();
  var tmp = "";
  $("#info-basicInfo-dia2").html(dia);
  tmp += $('#info-contents-hidden1').children('div:eq(0)').html();
  for (k = 1; k < id_length; k++) {
    var l = ""
    l = id[k];
    var split_id = '#info-basicInfo-' + l.split("_")[2];
    tmp += $(split_id).wrap('<div></div>').parent().html();
  }

  $('#info-contents-hidden1').children().detach();
  $('#info-contents-hidden1').prepend(tmp);
  $('#info-contents-hidden').parent().parent().prop('style', 'display:grid');
  info_basicOption_close();


//환자 기본정보 기록 옵션을 바꿀 수 있는 것 ///



///////마우스 호버 시 +버튼 나오는 거 ////////
//remove를 해줬기 때문에 아이디에 다시 이벤트를 걸어줘야 함.//
  $("#info-basicInfo-dia-mouse").mouseover(function() {
    $('#info-basicInfo-dia-plus').fadeIn(100);
  });
  $("#info-basicInfo-dia-mouse").mouseleave(function() {
    $('#info-basicInfo-dia-plus').fadeOut(100);
  });

  $("#info-basicInfo-past1").mouseover(function() {
    $('#info-basicInfo-past-plus').fadeIn(100);
  });
  $("#info-basicInfo-past1").mouseleave(function() {
    $('#info-basicInfo-past-plus').fadeOut(100);
  });

  $("#info-basicInfo-past2").mouseover(function() {
    $('#info-basicInfo-pastdrug-plus').fadeIn(100);
  });
  $("#info-basicInfo-past2").mouseleave(function() {
    $('#info-basicInfo-pastdrug-plus').fadeOut(100);
  });

  $("#info-basicInfo-allergy").mouseover(function() {
    $('#info-basicInfo-allergy-plus').fadeIn(100);
  });
  $("#info-basicInfo-allergy").mouseleave(function() {
    $('#info-basicInfo-allergy-plus').fadeOut(100);
  });

  $("#info-basicInfo-surgery").mouseover(function() {
    $('#info-basicInfo-surgery-plus').fadeIn(100);
  });
  $("#info-basicInfo-surgery").mouseleave(function() {
    $('#info-basicInfo-surgery-plus').fadeOut(100);
  });

  $("#info-contents-hidden1").mouseover(function() {
    $('#info-basicInfo-edit').fadeIn(100);
  });
  $("#info-contents-hidden1").mouseleave(function() {
    $('#info-basicInfo-edit').fadeOut(100);
  });
});

//////////////환자 기본 정보 적을 때////////////////////
function info_add_dia() {
  var contents = $('#info-basicInfo-dia-mouse').children('input:eq(0)').clone();

  $('#info-basicInfo-dia-add').append(contents);
}

function info_add_allergy() {
  var contents = $('#info-basicInfo-allergy2').children('input:eq(0)').clone();
  $('#info-basicInfo-allergy2').parent().append(contents);
}

function info_add_surgery() {
  var contents = $('#info-basicInfo-surgery2').children('input:eq(0)').clone();
  $('#info-basicInfo-surgery2').parent().append(contents);
}

function info_add_past1() {
  var contents = $('#info-basicInfo-past1').children('input:eq(0)').clone().wrap('<div></div>').parent().html();
  contents += $('#info-basicInfo-past2').children('input:eq(0)').clone().wrap('<div></div>').parent().html();
  $('#info-basicInfo-past1').parent().append(contents);
}

function info_add_past2() {
  var contents = $('#info-basicInfo-past2').children('input:eq(0)').clone().wrap('<div class="Info-basicInfo-addPast1"></div>').wrap('<div class="Info-basicInfo-addPast2"></div>').parent().parent();
  $('#info-basicInfo-past1').parent().append(contents);
}
//////////////////////////////////////////////////
///////////////////////////////////////////////////////////
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
