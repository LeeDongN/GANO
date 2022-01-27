//각 환자의 기본 데이터 저장
function readFormData() {
  var formData = {};
  formData["p_id"] = $('#p_id').val();
  formData["p_date"] = $('#p_date').val();
  formData["p_dia"] = $('#p_dia').val();
  formData["p_doc"] = $('#p_doc').val();
  return formData;
}
//환자 추가 버튼을 누르면 나오는 팝업창에서, 입력버튼을 눌렀을 때
//Paitent list에 새로운 patient들이 등록된다.

$('#itemAdd').click(function() {
  var p_Data = readFormData();
  var bedID = $('#' + global_bedID).find("p").text();
  var contents = '';
  var i = 'patient_' + global_bedID.split('_')[3] + '_' + global_bedID.split('_')[4];
  var k = global_bedID.split('_')[3] + '_' + global_bedID.split('_')[4];
  contents += '<div id="' + i + '" style="margin-left:10px; margin-right:10px; margin-bottom:11px;">';
  contents += '<div class="color_1 w3-card-2" style="border-radius:10px;">';
  contents += '<div title="인계작성, 인계보기" class="patients_grid w3-hover-opacity w3-hover-shadow" onclick="PatientsModal_open(this)" role="button">';

  contents += '<p class="pl_item_header plus_color  text_bolder" style="font-size: 18px"><b>' + bedID + '</b></p>';

  contents += '<p class="w3-left-align pl_item_1">환자 이름</p>';
  contents += '<p id="id_' + k + '" class="w3-left-align pl_item_1-2">' + p_Data.p_id + '</p>';

  contents += '<p class="w3-left-align pl_item_2">입원 날짜</p>';
  contents += '<p id="date_' + k + '" class="w3-left-align pl_item_2-2">' + p_Data.p_date + '</p>';

  contents += '<p class="w3-left-align pl_item_3">내원 이유</p>';
  contents += '<p id="dia_' + k + '" class="w3-left-align pl_item_3-2">' + p_Data.p_dia + '</p>';

  contents += '<p class="w3-left-align pl_item_4">주치의</p>';
  contents += '<p id="doc_' + k + '" class="w3-left-align pl_item_4-2">' + p_Data.p_doc + '</p>';

  contents += '</div>';

  contents += '<div class="pl_item_5  ">'
  contents += '<span class="pl_edit">';
  contents += '<a title="환자이름, 내원이유, 주치의 수정" onclick="Edit_open(this)" class="w3-section w3-button w3-card-2 w3-hover-shadow pl_edit_color" style="border-radius:10px; width:40%; height:45%;"><p style="font-weight:normal;" class="text_bolder pl_mg">수정</p></a>';
  contents += '</span>'

  contents += '<span class="pl_del">';
  contents += '<a title="인계내용을 포함한 환자 데이터가 모두 삭제됩니다." onclick="onDelete(this)" class="w3-section w3-button w3-card-2 w3-hover-shadow pl_del_color" style="border-radius:10px; width:40%; height:45%;"><p style="font-weight:normal;" class="text_bolder pl_mg">퇴원</p></a>';
  contents += '</span>'
  contents += '</div>';
  contents += '</div>';
  contents += '</div>';
  $('#' + global_bedID).children().hide();
  $('#' + global_bedID).append(contents);
  // 추가기능
  resetForm();
});

//데이터를 추가한 뒤 '환자 추가 버튼 시 나오는 팝업창'의 값 삭제
function resetForm() {
  document.getElementById("p_id").value = "";
  document.getElementById("p_date").value = "";
  document.getElementById("p_dia").value = "";
  $("#p_dia option:eq(0)").attr('selected', true);
  document.getElementById("add_label_selectbox").textContent = "";
  document.getElementById("p_doc").value = "";
};

//환자 정보 삭제
function onDelete(e) {
  var remove_info = e.parentNode.parentNode.parentNode.parentNode.id;
  var remove_bed = e.parentNode.parentNode.parentNode.parentNode.parentNode.id;
  var writeInfo_delete_ID = "info_write_Newpatient_" + remove_info.split('_')[1] + "_" + remove_info.split('_')[2];

  //인계 내용도 같이 삭제
  $('#' + writeInfo_delete_ID).remove();
  //stored_ID_array에서 해당하는 ID를 삭제하여, 퇴원 후 다음 환자의 인계를 가능하게 함.
  stored_ID_array = stored_ID_array.filter((element) => element !== writeInfo_delete_ID);
  if (confirm('퇴원을 진행하겠습니다. 오늘도 환자들을 도와주셔서 감사합니다.')) {
    $('#' + remove_info).remove();
    $('#' + remove_bed).children().show();
  }
};
//Edit 기능
//써져있는 환자 데이터를 가져옴
function changed_ids(a) {
  var b = {};
  b["id"] = a.parentNode.parentNode.previousSibling.childNodes[2];
  b["date"] = a.parentNode.parentNode.previousSibling.childNodes[4];
  b["dia"] = a.parentNode.parentNode.previousSibling.childNodes[6];
  b["doc"] = a.parentNode.parentNode.previousSibling.childNodes[8];
  return b;
};
//changed_ids에서 불러온 데이터를 수정하기 위해 input값을 읽음
function readthisData() {
  var thisData = {};
  thisData["id"] = $('#E-p_id').val();
  thisData["date"] = $('#E-p_date').val();
  thisData["dia"] = $('#E-p_dia').val();
  thisData["doc"] = $('#E-p_doc').val();
  return thisData;
};

function edit_view_data(a) {
  var b = {};
  b["id"] = a.parentNode.parentNode.previousSibling.childNodes[2].textContent;
  b["date"] = a.parentNode.parentNode.previousSibling.childNodes[4].textContent;
  b["dia"] = a.parentNode.parentNode.previousSibling.childNodes[6].textContent;
  b["doc"] = a.parentNode.parentNode.previousSibling.childNodes[8].textContent;
  return b;
};

var l = {};

function Edit_open(a) {
  l = a;
  var view_data = edit_view_data(l);
  document.getElementById("E-p_id").value = view_data.id;
  document.getElementById("E-p_date").value = view_data.date;
  document.getElementById("E-p_dia").value = view_data.dia;
  document.getElementById("E-p_label_selectbox").textContent = view_data.dia;
  document.getElementById("E-p_doc").value = view_data.doc;
  document.getElementById("Edit").style.display = 'block';
  $('html, body').css({
    'overflow': 'hidden'
  });
};

$('#Editon').click(function() {
  var changed = changed_ids(l);
  var changer = readthisData();
  changed["id"].innerHTML = changer.id;
  changed["date"].innerHTML = changer.date;
  changed["dia"].innerHTML = changer.dia;
  changed["doc"].innerHTML = changer.doc;
  Edit_close();
  resetForm2();
});
//초기화
function resetForm2() {
  document.getElementById("E-p_id").value = "";
  document.getElementById("E-p_date").value = "";
  document.getElementById("E-p_dia").value = "";
  document.getElementById("E-p_doc").value = "";
};
//-----------------------------------------------------------------
//Patient Modal 팝업창
function readModal(a) {
  var modalData = {};
  modalData["id"] = a.childNodes[2];
  modalData["date"] = a.childNodes[4];
  modalData["dia"] = a.childNodes[6];
  modalData["doc"] = a.childNodes[8];
  return modalData;
};


function PatientsModal_open(k) {
  var modalData = readModal(k);
  global_modalData = modalData;
  global_ID = $(k).parent().parent().prop('id');
  document.getElementById("mp_id").innerHTML = modalData.id.innerText;
  document.getElementById('mp_dia').innerHTML = ". 진단명 : " + modalData.dia.innerText;
  document.getElementById('mp_date').innerHTML = ". 입원날짜 : " + modalData.date.innerText;
  document.getElementById('mp_doc').innerHTML = ". 주치의 : " + modalData.doc.innerText;
  document.getElementById('PatientsModal').style.display = 'block';
  $('html, body').css({
    'overflow': 'hidden'
  });
  resetForm3();
  $(document).mouseup(function(e) {
    var LayerPopup = $("#PatientsModal");
    if (LayerPopup.has(e.target).length === 0) {
      document.getElementById("PatientsModal").style.display = 'none';
    }
    $('html, body').css({
      'overflow': 'auto'
    })
  });
};

function resetForm3() {
  document.getElementById("mp_id").value = "";
  document.getElementById("mp_date").value = "";
  document.getElementById("mp_dia").value = "";
  document.getElementById("mp_doc").value = "";
};
