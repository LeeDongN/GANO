// 신규환자 등록 누를 시 나오는 창 //
function info_ToNewPatient() {
  document.getElementById('info_newPatient').style.display = 'grid'
  document.getElementById('info_Special').style.display = 'none'
  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
  });
}

function info_newPatient_userinput_open() {
  document.getElementById("info_newPatient_userinput").style.display = 'block';
  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
  });
  //사용자가 입력할 수 있는 modal에 사용자가 원하는 옵션을 나오게 하기 위함.
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  var id_length = id.length;
  for (k = 1; k < id_length; k++) {
    var split_id = id[k].split("_")[2];
    tmp_id = "info_newPatient_modal_" + split_id
    $('#' + tmp_id).parent().show()
  }

  //modal 외의 다른 곳을 클릭하면 닫히게
  $('#info_newPatient_userinput').click(function(e) {
    console.log(info_newPatient_modal_options)
    if (!$('#info_newPatient_userinput div.info_newPatient_modal2').has(e.target).length) {
      $("#info_newPatient_userinput").hide();
      //modal창에서 입력했던 값이 저장되는 파트
      info_newPatient_userinput_save()
      $('#info_basic-option-cart').children().remove();
    }
  })
}

///////////////////////////////////////////////////////////////////

function info_newPatient_userinput_close() {
  document.getElementById("info_newPatient_userinput").style.display = 'none';
  $('html, body').css({
    'overflow': 'auto',
    'height': '100%'
  });
}

//modal창에서 입력했던 값이 저장되는 파트
function info_newPatient_userinput_save() {
  //modal창이 닫힐 때 option클릭이 되어있는 게 신규환자 등록 페이지에 적용되게
  var tmp_array_length = $('#info_newPatient_userinput div.userChoose').find('.info_basic-option-button3-after').length
  info_newPatient_modal_options = new Array(tmp_array_length);
  info_newPatient_modal_options = $('#info_newPatient_userinput div.userChoose').find('.info_basic-option-button3-after')
  //global 배열을 가져오는 변수
  var a = info_newPatient_modal_options;
  var a_length = info_newPatient_modal_options.length;
  var dia = dia_inputValue();
  var tmp = "";
  var tmp_id = newPatient_ID; //List에 있는 환자별로 보여지는 신규환자 입력창을 다르게 하기 위해 id 받음
  var modal_dia = info_newPatient_modal_dia;
  var modal_allergy = info_newPatient_modal_allergy;
  var modal_past = info_newPatient_modal_past
  var modal_pastDrug = info_newPatient_modal_pastDrug;
  var modal_surgery = info_newPatient_modal_surgery;

  //보여지는 창//
  //화살표 옆에 내원이유 쓰기 위함
  $("#info-basicInfo-dia2").html(dia);

  //필수적으로 넣어야 하는 사용자 인풋 칸(진단명)//////
  //진단명은 필수로 적어야 하기 때문에 무조건 tmp에 넣어 놓음///
  var modal_dia_length = modal_dia.length
  if (modal_dia_length > 1 ) {
    //첫번째 거는 그대로 복사해서ㅓ text만 바꾸기
    var tmp_dia = $('#info-contents-hidden1').children('div:eq(0)').clone()
    //두번째 거는 추가되는 파트에다가 텍스트 넣기
    var tmp_dia_plus = $(tmp_dia).children().children().children().next().clone()
    //첫번째 dia 인풋 말고 2번째부터는 새로운 칸에 넣어야 하므로 새로운 변수 만들어 줌
    var new_dia_array = "";
    //첫번째 dia의 input
    $(tmp_dia).children().children().children().next().text(modal_dia[0])
    //두번째 dia input들
    for (var k = 1; k < modal_dia_length; k ++) {
      var new_dia = $(tmp_dia_plus).clone().text(modal_dia[k])
      new_dia_array += $(new_dia).wrap('<div></div>').parent().html();
    }
    $(tmp_dia).children().children().last().append(new_dia_array)
    tmp += $(tmp_dia).wrap('<div></div>').parent().html();
  }else {
    $('#info-contents-hidden1').children('div:eq(0)').children().children().children().next().text(modal_dia[0])
    tmp += $('#info-contents-hidden1').children('div:eq(0)').html();
  }

////사용자 선택에 따라 넣을지 말지 결정할 수 있는 칸///
//알러지
var modal_length = modal_allergy.length
if (modal_length > 1 ) {
  //첫번째 거는 그대로 복사해서ㅓ text만 바꾸기
  var tmp_modal = $('#info-contents-hidden1').children('div:eq(2)').clone()
  //두번째 거는 추가되는 파트에다가 텍스트 넣기
  var tmp_plus = $(tmp_modal).children().children().children().next().clone()
  //첫번째 인풋 말고 2번째부터는 새로운 칸에 넣어야 하므로 새로운 변수 만들어 줌
  var new_array = "";
  //첫번째 input
  $(tmp_modal).children().children().children().next().text(modal_allergy[0])
  //두번째 input들
  for (var k = 1; k < modal_length; k ++) {
    var new_1 = $(tmp_plus).clone().text(modal_allergy[k])
    new_array += $(new_1).wrap('<div></div>').parent().html();
  }
  $(tmp_modal).children().append(new_array)
  tmp += $(tmp_modal).wrap('<div></div>').parent().html();
}else {
  var tmp_modal = $('#info-contents-hidden1').children('div:eq(2)').clone()
  var tmp_plus = $(tmp_modal).children().children().children().next().clone()
  $(tmp_modal).children().children().children().next().text(modal_allergy[0])
  tmp += $(tmp_modal).wrap('<div></div>').parent().html();
}

//수술력
var modal_length = modal_surgery.length
if (modal_length > 1 ) {
  //첫번째 거는 그대로 복사해서ㅓ text만 바꾸기
  var tmp_modal = $('#info-contents-hidden1').children('div:eq(3)').clone()
  //두번째 거는 추가되는 파트에다가 텍스트 넣기
  var tmp_plus = $(tmp_modal).children().children().children().next().clone()
  //첫번째 인풋 말고 2번째부터는 새로운 칸에 넣어야 하므로 새로운 변수 만들어 줌
  var new_array = "";
  //첫번째 input
  $(tmp_modal).children().children().children().next().text(modal_surgery[0])
  //두번째 input들
  for (var k = 1; k < modal_length; k ++) {
    var new_1 = $(tmp_plus).clone().text(modal_surgery[k])
    new_array += $(new_1).wrap('<div></div>').parent().html();
  }
  $(tmp_modal).children().append(new_array)
  tmp += $(tmp_modal).wrap('<div></div>').parent().html();
}else {
  var tmp_modal = $('#info-contents-hidden1').children('div:eq(3)').clone()
  var tmp_plus = $(tmp_modal).children().children().children().next().clone()
  $(tmp_modal).children().children().children().next().text(modal_surgery[0])
  tmp += $(tmp_modal).wrap('<div></div>').parent().html();
}

//과거력



  for (k = 0; k < a_length; k++) {
    var l = ""
    l = $(a[k]).attr('name');
    var split_id = 'info-basicInfo-' + l.split("_")[2];
    tmp += $("div[name='" + split_id + "']").wrap('<div></div>').parent().html();
  }
  var m = $('#' + tmp_id).children().children().next();
  $(m).children().children().children().children().detach();
  $(m).children().children().children().prepend(tmp);
  $(m).prop('style', 'display:grid');
}
///////////////////////////////////////////////////////////////
/////////환자 기본 정보 추가를 위한 옵션 선택 창 /////
function info_basicOption_open() {
  document.getElementById("Info_basic-option").style.display = 'block';
  // 모달팝업 중 html,body의 scroll을 hidden시킴
  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
  });
}

function info_basicOption_close() {
  document.getElementById("Info_basic-option").style.display = 'none';
  //scroll hidden 해제
  $('html, body').css({
    'overflow': 'auto',
    'height': '100%'
  });
};

//cart에 있는 것을 array에 담음
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
    $('div[name="info_basicOption_past"]').attr('class', 'info_basic-option-button3');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_past').attr('class', 'info_basic-option-button3-after');
    $('div[name="info_basicOption_past"]').attr('class', 'info_basic-option-button3-after');
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
    $('div[name="info_basicOption_surgery"]').attr('class', 'info_basic-option-button3');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_surgery').attr('class', 'info_basic-option-button3-after');
    $('div[name="info_basicOption_surgery"]').attr('class', 'info_basic-option-button3-after');
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
    $('div[name="info_basicOption_allergy"]').attr('class', 'info_basic-option-button3');
  } else {
    $('#info_basic-option-cart').append(copy);
    $('#info_basicOption_allergy').attr('class', 'info_basic-option-button3-after');
    $('div[name="info_basicOption_allergy"]').attr('class', 'info_basic-option-button3-after');
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
  info_basicOption_close();
  $('#info_basicOption_allergy').attr('class', 'info_basic-option-button3');
  $('#info_basicOption_surgery').attr('class', 'info_basic-option-button3');
  $('#info_basicOption_past').attr('class', 'info_basic-option-button3');
  info_newPatient_userinput_open();
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


//NewPatient 모달창에서 사용자가 입력할 때 동적으로 생성되는 것들
//진단명
$(document).on('keydown', "div[name=Newpatient_dia]", function(e) {
  var name = $('div[name=Newpatient_dia]').length
  //한개밖에 존재하지 않으면 텍스트가 없는 상태에서 엔터나 백스페이스를 누르더라도 삭제 안 함
  var index = $(this).parent().parent().parent().parent().index();
  if (name === 1) {
    if (e.which === 13) {
      if ($(this).text() == "") {} else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="진단명" name="Newpatient_dia" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_dia').append(contents)
        $('div[name=Newpatient_dia]')[index + 1].focus();
        contents = ""
      }
    }
  } else {
    //아무런 텍스트가 없을 때 벡스페이스를 누르면 삭제
    if (e.keyCode === 8) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
      }
    }
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
        //$(this).parent().parent().parent().parent().remove()
      } else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="진단명" name="Newpatient_dia" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_dia').append(contents)
        $('div[name=Newpatient_dia]')[index + 1].focus();
        contents = ""
      }
    }
  }
});

//수술력
$(document).on('keydown', "div[name=Newpatient_surgery]", function(e) {
  var name = $('div[name=Newpatient_surgery]').length
  var index = $(this).parent().parent().parent().parent().index();
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {} else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="수술력" name="Newpatient_surgery" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_surgery').append(contents)
        $('div[name=Newpatient_surgery]')[index + 1].focus();
        contents = ""
      }
    }
  } else {
    //아무런 텍스트가 없을 때 벡스페이스를 누르면 삭제
    if (e.keyCode === 8) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
      }
    }
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
        //$(this).parent().parent().parent().parent().remove()
      } else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="수술력" name="Newpatient_surgery" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_surgery').append(contents)
        $('div[name=Newpatient_surgery]')[index + 1].focus();
        contents = ""
      }
    }
  }
});
//알러지
$(document).on('keydown', "div[name=Newpatient_allergy]", function(e) {
  var name = $('div[name=Newpatient_allergy]').length
  var index = $(this).parent().parent().parent().parent().index();
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {} else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="알러지" name="Newpatient_allergy" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_allergy').append(contents)
        $('div[name=Newpatient_allergy]')[index + 1].focus();
        contents = ""
      }
    }
  } else {
    //아무런 텍스트가 없을 때 벡스페이스를 누르면 삭제
    if (e.keyCode === 8) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
      }
    }
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
        //$(this).parent().parent().parent().parent().remove()
      } else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="알러지" name="Newpatient_allergy" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_allergy').append(contents)
        $('div[name=Newpatient_allergy]')[index + 1].focus();
        contents = ""
      }
    }
  }
});

//과거 질병 -->복용약 enter, backspace 이벤트
$(document).on('keydown', "div[name=Newpatient_pastDrug]", function(e) {
  var name = $('div[name=Newpatient_pastDrug]').length
  var index = ($('div[name=Newpatient_pastDrug]').length - 1);
  //한개밖에 존재하지 않을 때는 엔터 눌러도 삭제 안 함
  if (name === 1) {
    if (e.which === 13) {
      if ($(this).text() == "") {} else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_flex" style="width:396px; margin-left:442px;">'
        contents += '<div style="display:flex; width:812px;">'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $(this).parent().parent().parent().parent().parent().append(contents)
        $('div[name=Newpatient_pastDrug]')[index + 1].focus();
        contents = ""
      }
    }
  } else {
    //past에 값이 존재한다면 삭제하지 않음
    if ($(this).parent().parent().prev().prop('class') == "info_newPatient_editable") {
      if (e.which === 13) {
        if ($(this).text() == "") {} else {
          var contents = ""
          e.preventDefault();
          contents += '<div class="info_newPatient_editable_flex" style="width:396px; margin-left:442px;">'
          contents += '<div style="display:flex; width:812px;">'
          contents += '<div style="cursor:text" class="info_newPatient_editable">'
          contents += '<div style="display:flex">'
          contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
          contents += '</div>'
          contents += '</div>'
          contents += '</div>'
          contents += '</div>'
          $(this).parent().parent().parent().parent().parent().append(contents)
          $('div[name=Newpatient_pastDrug]')[index + 1].focus();
          contents = ""
        }
      }
    } else {
      //아무런 텍스트가 없을 때 벡스페이스를 누르면 삭제
      if (e.keyCode === 8) {
        if ($(this).text() == "") {
          $(this).parent().parent().parent().parent().remove()
        }
      }
      //아무런 텍스트가 없을 때 엔터를 누르면 삭제
      if (e.which === 13) {
        if ($(this).text() == "") {
          $(this).parent().parent().parent().parent().remove()
          //$(this).parent().parent().parent().parent().remove()
        } else {
          var contents = ""
          e.preventDefault();
          contents += '<div class="info_newPatient_editable_flex" style="width:396px; margin-left:442px;">'
          contents += '<div style="display:flex; width:812px;">'
          contents += '<div style="cursor:text" class="info_newPatient_editable">'
          contents += '<div style="display:flex">'
          contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
          contents += '</div>'
          contents += '</div>'
          contents += '</div>'
          contents += '</div>'
          $(this).parent().parent().parent().parent().parent().append(contents)
          $('div[name=Newpatient_pastDrug]')[index + 1].focus();
          contents = ""
        }
      }
    }
  }
});

$(document).on('keydown', "div[name=Newpatient_past]", function(e) {
  var name = $('div[name=Newpatient_past]').length
  var index = $(this).parent().parent().parent().parent().parent().index();
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {} else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="display:flex; width:812px;">'
        contents += '<div style="cursor:text; padding-right:10px; margin-right:10px;" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="과거 증상/질병" name="Newpatient_past" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_past').append(contents)
        $('div[name=Newpatient_past]')[index + 1].focus();
        contents = ""
      }
    }
  } else {
    //아무런 텍스트가 없을 때 벡스페이스를 누르면 삭제
    if (e.keyCode === 8) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
      }
    }
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
        $(this).parent().parent().parent().parent().remove()
        //$(this).parent().parent().parent().parent().remove()
      } else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex">'
        contents += '<div class="icon">'
        contents += '<div class="icon2">'
        contents += '<span class="material-icons icon3" style="font-size:13px; color:gray;">noise_control_off</span>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="display:flex; width:812px;">'
        contents += '<div style="cursor:text; padding-right:10px; margin-right:10px;" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="과거 증상/질병" name="Newpatient_past" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_past').append(contents)
        $('div[name=Newpatient_past]')[index + 1].focus();
        contents = ""
      }
    }
  }
});
//////////////////////////////////////////////////////////
///과거 증상/질병 enter, backspace  이벤트
$(document).on('blur DOMSubtreeModified', "div[name=Newpatient_past]", function() {
  var value = $(this).text();
  index = $(this).parent().parent().parent().parent().parent().index();
  if ($(this).text() == "") {
    info_newPatient_modal_past.splice(index, 1)
    console.log(info_newPatient_modal_past)
  } else {
    info_newPatient_modal_past.splice(index, 1, value)
    console.log(info_newPatient_modal_past)
  }
})

$(document).on('blur DOMSubtreeModified', "div[name=Newpatient_dia]", function() {
  var value = $(this).text();
  var index = $(this).parent().parent().parent().parent().index();
  if ($(this).text() == "") {
    info_newPatient_modal_dia.splice(index, 1)
    console.log(info_newPatient_modal_dia)
  } else {
    info_newPatient_modal_dia.splice(index, 1, value)
    console.log(info_newPatient_modal_dia)
  }
})

$(document).on('blur DOMSubtreeModified', "div[name=Newpatient_allergy]", function() {
  var value = $(this).text();
  var index = $(this).parent().parent().parent().parent().index();
  if ($(this).text() == "") {
    info_newPatient_modal_allergy.splice(index, 1)
    console.log(info_newPatient_modal_allergy)
  } else {
    info_newPatient_modal_allergy.splice(index, 1, value)
    console.log(info_newPatient_modal_allergy)
  }
})

$(document).on('blur DOMSubtreeModified', "div[name=Newpatient_pastDrug]", function() {
  var value = $(this).text();
  var index = $('div[name=Newpatient_pastDrug]').length - 1
  if ($(this).text() == "") {
    info_newPatient_modal_pastDrug.splice(index, 1)
    console.log(info_newPatient_modal_pastDrug)
  } else {
    info_newPatient_modal_pastDrug.splice(index, 1, value)
    console.log(info_newPatient_modal_pastDrug)
  }
})

$(document).on('blur DOMSubtreeModified', "div[name=Newpatient_surgery]", function() {
  var value = $(this).text();
  var index = $(this).parent().parent().parent().parent().index();
  if ($(this).text() == "") {
    info_newPatient_modal_surgery.splice(index, 1)
    console.log(info_newPatient_modal_surgery)
  } else {
    info_newPatient_modal_surgery.splice(index, 1, value)
    console.log(info_newPatient_modal_surgery)
  }
})


//modal 창에서 basicoption을 고를 수 있게
$(function() {
  $('#info_newPatient_userinput div.info_basic-option-button2').click(function() {
    var split_id = $(this).children().attr('name').split("_")[2]
    var tmp_id = "info_newPatient_modal_" + split_id
    if ($(this).children().prop('class') == 'info_basic-option-button3') {
      $(this).children().attr('class', 'info_basic-option-button3-after')
      $('#' + tmp_id).parent().show()
    } else {
      $(this).children().attr('class', 'info_basic-option-button3')
      $('#' + tmp_id).parent().hide()
    }
    var tmp_array_length = $('#info_newPatient_userinput div.userChoose').find('.info_basic-option-button3-after').length
    info_newPatient_modal_options = new Array(tmp_array_length);
    info_newPatient_modal_options = $('#info_newPatient_userinput div.userChoose').find('.info_basic-option-button3-after')
    console.log(info_newPatient_modal_options)
  })
})
