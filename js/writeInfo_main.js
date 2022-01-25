const main = document.querySelector("#main");
const writein = document.querySelector("#write");
const patientModal = document.querySelector("#PatientsModal");
//기존 것 백업
var default_info_NewPatient = $('#info_write_Newpatient').clone();
var default_info_Special = $('#info_Special').clone();
var newPatient_ID = ""
var split_global_ID = ""

//인계 작성을 누를 시 작동
function begin_write(k) {
  info_ID_array_length = $('#info_write_Newpatient').nextAll('.info-contents-write-NewPatient-frame').length;
  info_ID_array = $('#info_write_Newpatient').nextAll('.info-contents-write-NewPatient-frame')

  //환자에 적혀있던 내원이유를 가져오는 함수
  var dia = dia_inputValue()
  //인계작성을 누를 때마다 기존에 있던 작성페이지를 모두 숨기는 함
  for (k = 0; k < info_ID_array_length; k++) {
    var a = $(info_ID_array[k]).prop('id')
    $('#' + a).prop('style', 'display:none;')
    temp_ID_array.push(a);
  }
  //중복된 배열 제거
  $.each(temp_ID_array, function(k, val) {
    if ($.inArray(val, stored_ID_array) == -1) {
      stored_ID_array.push(val)
    }
  })

  split_global_ID = global_ID.substring(8);
  console.log(split_global_ID)
  newPatient_ID = 'info_write_Newpatient_' + split_global_ID
  new1 = '#info-contents-hidden_' + split_global_ID
  var special_ID = 'info_Special' + split_global_ID
  var temp_NewPatient = default_info_NewPatient
  var temp_Special = default_info_Special
  console.log(split_global_ID)
  //환자에 맞게 모든 id 변경
  $(temp_NewPatient).prop('style', 'display:grid;');
  $(temp_NewPatient).prop('id', newPatient_ID);
  $(temp_NewPatient).find('#info-contents-hidden').prop('id', new1)
  $(temp_NewPatient).find('#info-contents-hidden1').prop('id','#info-contents-hidden1_' + split_global_ID)
  console.log(split_global_ID)
   // 작성되어 있는 인계가 없다면 새롭게 생성하고, 있다면 있는 것을 보여줌
  if (stored_ID_array.indexOf(newPatient_ID) != -1){
    //저장된 인계 보여주기
    $('#' + newPatient_ID).prop('style', 'display:grid')
    //이름 바꾸기
    document.getElementById("info-name").innerHTML = global_modalData.id.innerText;
    document.getElementById("info-header-name").innerHTML = global_modalData.id.innerText;
    document.getElementById("info-header-name2").innerHTML = global_modalData.id.innerText
    //내원이유 변경
    $("#info-basicInfo-dia2").html(dia);
    console.log(dia)
  }else {
    //새로운 인계 저장(id 포함)
    info_basicOption_open();
    var k = temp_NewPatient.clone();
    $('#info_newPatient').append(k);
    $(temp_Special).prop('id', special_ID);

    document.getElementById("info-name").innerHTML = global_modalData.id.innerText;
    document.getElementById("info-header-name").innerHTML = global_modalData.id.innerText;
    document.getElementById("info-header-name2").innerHTML = global_modalData.id.innerText
  }

    document.getElementById("PatientsModal").style.display = "none"; main.style.WebkitAnimation = "fadeOut 0.5s"; main.style.animation = "fadeOut 0.5s"; setTimeout(() => {
      writein.style.WebkitAnimation = "fadeIn 0.5s";
      writein.style.animation = "fadeIn 0.5s";
      setTimeout(() => {
        main.style.display = "none";
        writein.style.display = "block"
      }, 200)
    }, 200);
    $('html, body').css({'overflow': 'auto', 'height': '100%'});
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
