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
  document.getElementById('PatientsModal').style.display='none';
}

var global_bedID = {};
//환자 추가 버튼 누를 시 나타나는 팝업 창
function P_plusModal_open(a) {
  document.getElementById("P_plusModal").style.display='block';
  global_bedID = $(a).parent().prop('id');
}

function P_plusModal_close() {
  document.getElementById("P_plusModal").style.display='none';
}
function P_plusModal_close2() {
  document.getElementById("P_plusModal").style.display='none';
  resetForm();
}


//병실 및 인원 설정
function roomOption_open() {
  document.getElementById("roomOption").style.display='block';
}

function roomOption_close() {
  document.getElementById("roomOption").style.display='none';
  document.getElementById("roomOption_room").value = "";
  document.getElementById("roomOption_person").value = "";
}

function roomAdd() {
  var room = document.getElementById("roomOption_room").value;
  for (i=0; i<room-1; i++){
    var k = "roomClone_" + (i+1);
    var contents = $('#roomClone_0').clone();
    contents.prop("id", k)
    contents.find('p').text((i+2) + '번 병실');
    contents.find('div:eq(0)').attr('style', 'background-color:#F7E7D6; opacity:0.5');
    $('#list_roomChoise_frame2').append(contents);
  };
}

function emptyBedAdd() {
  var empty = document.getElementById("roomOption_person").value;
  for (i=0; i<empty; i++){
    var k = "List_Empty_bed_" + i;
    var contents = $('#List_Empty_bed_0').clone();
    contents.prop("id", k)
    contents.prop("class", "w3-third w3-margin-bottom List_Empty_bed_block")
    contents.find('p').text((i+1) + '번 병상')
    $('#AddOption').append(contents);
  };
}

function roomOption_choose() {
  roomAdd();
  emptyBedAdd();
  document.getElementById("roomOption").style.display='none';
  document.getElementById("patients_list_start").style.display = 'none';
  document.getElementById("patients_list_roomChoise_frame").style.display='flex';
  document.getElementById("roomOption_room").value = "";
  document.getElementById("roomOption_person").value = "";
}

//Edit 화면 팝업창
function Edit_close() {
  document.getElementById("Edit").style.display='none';
  resetForm2();
}
