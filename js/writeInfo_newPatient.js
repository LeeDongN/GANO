// 신규환자 등록 누를 시 나오는 창 //
function info_ToNewPatient() {
  document.getElementById('info_newPatient').style.display = 'grid'
  document.getElementById('info_Special').style.display = 'none'
  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
  });
}

///////////////////////////////////////////////////////////////////
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
    tmp_id = "info_newPatient_modal_"+split_id
    $('#'+tmp_id).parent().show()
  }

  //modal 외의 다른 곳을 클릭하면 닫히게
  $(document).click(function(e) {
    if (!$(e.target).hasClass('info_newPatient_modal2')) {
      var LayerPopup = $(".info_newPatient_modal2");
      $(document).mouseup(function(e) {
        if (LayerPopup.has(e.target).length === 0) {
          document.getElementById("info_newPatient_userinput").style.display = 'none';
        }
      });
    }

  })

}

function info_newPatient_userinput_close() {
  document.getElementById("info_newPatient_userinput").style.display = 'none';
  $('html, body').css({
    'overflow': 'auto',
    'height': '100%'
  });
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
  var a = info_cart();
  var id = a[0];
  var cart_length = a[1];
  var id_length = id.length;
  var dia = dia_inputValue();
  var tmp = "";
  var tmp_id = newPatient_ID;
  $("#info-basicInfo-dia2").html(dia);
  tmp += $('#info-contents-hidden1').children('div:eq(0)').html();
  for (k = 1; k < id_length; k++) {
    var l = ""
    l = id[k];
    var split_id = '#info-basicInfo-' + l.split("_")[2];
    tmp += $(split_id).wrap('<div></div>').parent().html();
  }
  var a = $('#' + tmp_id).children().children().next();
  $(a).children().children().children().children().detach();
  $(a).children().children().children().prepend(tmp);
  $(a).prop('style', 'display:grid');
  info_basicOption_close();
  info_newPatient_userinput_open();
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

//NewPatient 모달창에서 사용자가 입력할 때 동적으로 생성되는 것들
//진단명
$(document).on('keydown',"div[name=Newpatient_dia]", function(e){
  var name = $('div[name=Newpatient_dia]').length
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
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
        contents = ""
      }
    }
  }else {
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
        contents = ""
      }
    }
  }
});

//수술력
$(document).on('keydown',"div[name=Newpatient_surgery]", function(e){
  var name = $('div[name=Newpatient_surgery]').length
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
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
        contents = ""
      }
    }
  }else {
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
        contents = ""
      }
    }
  }
});
//알러지
$(document).on('keydown',"div[name=Newpatient_allergy]", function(e){
  var name = $('div[name=Newpatient_allergy]').length
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
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
        contents = ""
      }
    }
  }else {
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
        contents = ""
      }
    }
  }
});

//과거 증상/질병
$(document).on('keydown',"div[name=Newpatient_past]", function(e){
  var name = $('div[name=Newpatient_past]').length
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
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
        contents += '<div placeholder="과거 증싱/질병" name="Newpatient_past" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
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
        contents = ""
      }
    }
  }else {
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
        contents += '<div placeholder="과거 증싱/질병" name="Newpatient_past" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
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
        contents = ""
      }
    }
  }
});

//과거 질병 -->복용약
$(document).on('keydown',"div[name=Newpatient_pastDrug]", function(e){
  var name = $('div[name=Newpatient_pastDrug]').length
  if (name === 1) {
    //아무런 텍스트가 없을 때 엔터를 누르면 삭제
    if (e.which === 13) {
      if ($(this).text() == "") {
      } else {
        var contents = ""
        e.preventDefault();
        contents += '<div class="info_newPatient_editable_frame">'
        contents += '<div class="info_newPatient_editable_flex" style="width:396px; margin-left:442px;">'
        contents += '<div style="display:flex; width:812px;">'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_past').append(contents)
        contents = ""
      }
    }
  }else {
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
        contents += '<div class="info_newPatient_editable_flex" style="width:396px; margin-left:442px;">'
        contents += '<div style="display:flex; width:812px;">'
        contents += '<div style="cursor:text" class="info_newPatient_editable">'
        contents += '<div style="display:flex">'
        contents += '<div placeholder="복용약" name="Newpatient_pastDrug" data-content-editable-leaf="true" contenteditable="true" class="editable2"></div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        contents += '</div>'
        $('#info_newPatient_modal_past').append(contents)
        contents = ""
      }
    }
  }
});

$(function() {
  $('#info_newPatient_userinput div.info_basic-option-button2').click(function(){
    var split_id = $(this).children().attr('name').split("_")[2]
    var tmp_id = "info_newPatient_modal_" + split_id
    if ($(this).children().prop('class') == 'info_basic-option-button3'){
      $(this).children().attr('class', 'info_basic-option-button3-after')
      $('#'+tmp_id).parent().show()
    }else {
      $(this).children().attr('class', 'info_basic-option-button3')
      $('#'+tmp_id).parent().hide()
    }
  })
})
