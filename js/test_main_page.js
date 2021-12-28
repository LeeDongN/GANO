function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// 환자 클릭시 보여지는 팝업 창
// When the user clicks anywhere outside of the modal, close it
function PatientsModal_close() {
  document.getElementById('PatientsModal').style.display='none';

}

//환자 추가 버튼 누를 시 나타나는 팝업 창
function P_plusModal_open() {
  document.getElementById("P_plusModal").style.display='block';
}

function P_plusModal_close() {
  document.getElementById("P_plusModal").style.display='none';
}
function P_plusModal_close2() {
  document.getElementById("P_plusModal").style.display='none';
  resetForm();
}


//Edit 화면 팝업창
function Edit_close() {
  document.getElementById("Edit").style.display='none';
  resetForm2();
}
