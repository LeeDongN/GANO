$(function() {
    var selectTarget = $('.selectbox select');

    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });
    // focus 가 되었을 때와 focus 를 잃었을 때
    selectTarget.on({
        'focus' : function () {
            $(this).parent().addClass('focus');
        },
        'blur' : function () {
            $(this).parent().removeClass('focus');
        }
    });
});

$('#p_id').change(function() {
  $(".selectbox labe").css("color", 'black')
})


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

$('input[type=number][maxlength]').on('input', function(ev) {
  var $this = $(this);
  var maxlength = $this.attr('maxlength');
  var value = $this.val();
  if (value && value.length >= maxlength) {
    $this.val(value.substr(0, maxlength));
  }
});


// 환자 클릭시 보여지는 팝업 창
// When the user clicks anywhere outside of the modal, close it
function PatientsModal_close() {
  document.getElementById('PatientsModal').style.display = 'none';
}

var global_roomID = {};
var global_bedID = {}; //각 침대마다의 고유 아이디
//환자 추가 버튼 누를 시 나타나는 팝업 창
function P_plusModal_open(a) {
  document.getElementById("P_plusModal").style.display = 'block';
  global_bedID = $(a).parent().prop('id');
}

function P_plusModal_close() {
  document.getElementById("P_plusModal").style.display = 'none';
}

function P_plusModal_close2() {
  document.getElementById("P_plusModal").style.display = 'none';
  resetForm();
}


//병실 및 인원 설정
function roomOption_open() {
  document.getElementById("roomOption").style.display = 'block';
}

function roomOption_close() {
  document.getElementById("roomOption").style.display = 'none';
  document.getElementById("roomOption_room").value = "";
  document.getElementById("roomOption_person").value = "";
}

function roomAdd_header() {
  var room = document.getElementById("roomOption_room").value;
  for (i = 0; i < room - 1; i++) {
    var k = "roomClone_" + (i + 1);
    var contents = $('#roomClone_0').clone();
    contents.prop("id", k)
    contents.find('p').text((i + 2) + '번 병실');
    $('#list_roomChoise_frame2').append(contents);
  };
  $('#roomClone_0').prop("class", "patients_list_roomChoise_selected patients_list_roomChoise_items");
}

function emptyBedAdd() {
  var empty = document.getElementById("roomOption_person").value;
  for (i = 0; i < empty; i++) {
    var k = "List_Empty_bed_" + i;
    var contents = $('#List_Empty_bed_0').clone();
    contents.prop("id", k)
    contents.prop("class", "w3-third w3-margin-bottom List_Empty_bed_block")
    contents.find('p').text((i + 1) + '번 병상')
    $('#AddOption_0').append(contents);
  };
}

function roomAdd() {
  var room = document.getElementById("roomOption_room").value;
  var bed = document.getElementById("roomOption_person").value;
  for (i = 0; i < room; i++) {
    var k = "AddOption_" + (i+1);
    var contents = $('#AddOption_0').clone();
    contents.prop("id", k)
    //침대 id 부여(00_룸아이디_침대아이디)
    for (l = 0; l < bed; l++) {
      var bedID = "List_Empty_bed_" + i + "_" + l;
      contents.children(':eq('+ (l+1) +')').prop("id", bedID)
    };
    $('#ListPage').append(contents);
  };
  $('#AddOption_0').siblings().hide();
}

function roomOption_choose() {
  roomAdd_header();
  emptyBedAdd();
  document.getElementById("roomOption").style.display = 'none';
  document.getElementById("patients_list_start").style.display = 'none';
  document.getElementById("patients_list_roomChoise_frame").style.display = 'flex';
  roomAdd();
  document.getElementById("roomOption_room").value = "";
  document.getElementById("roomOption_person").value = "";
}

function roomChoise(a) {
  var id = $(a).prop("id");
  var id_split = id.split('_');
  var addOption_id = 'AddOption_'+id_split[1];
  $('#'+addOption_id).show();
  $('#'+addOption_id).siblings().hide();
  $(a).prop("class", "patients_list_roomChoise_items patients_list_roomChoise_selected");
  $(a).siblings().removeClass("patients_list_roomChoise_selected");
  $(a).siblings().addClass("patients_list_roomChoise_Unselected");
}

//Edit 화면 팝업창
function Edit_close() {
  document.getElementById("Edit").style.display = 'none';
  resetForm2();
}
