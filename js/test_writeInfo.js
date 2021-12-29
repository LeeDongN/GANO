const main = document.querySelector("#main");
const writein = document.querySelector("#write");
const patientModal = document.querySelector("#PatientsModal")

function begin_write() {
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
  document.getElementById("New_Info").style.display='none';
}
///////////////////////////////////////////////////////////////////
//case1: 시술/수술 클릭 시 열림
function New_1_open() {
  document.getElementById("New_1").style.display = 'block';
  document.getElementById("New_Info").style.display='none';
};
function New_1_close() {
  document.getElementById("New_1").style.display='none';
  document.getElementById("New_Info").style.display = 'block';
}
//case2 질병 악화 누를 시 열림
function New_2_open() {
  document.getElementById("New_2").style.display = 'block';
  document.getElementById("New_Info").style.display='none';
};
function New_2_close() {
  document.getElementById("New_2").style.display='none';
  document.getElementById("New_Info").style.display = 'block';
}
//case3 검사 누를 시 열림
function New_3_open() {
  document.getElementById("New_3").style.display = 'block';
  document.getElementById("New_Info").style.display='none';
};
function New_3_close() {
  document.getElementById("New_3").style.display='none';
  document.getElementById("New_Info").style.display = 'block';
}

//////////////////////////////////////////////////////////////
// 시술/수술에서 수술 버튼을 눌렀을 때 나오는 창
function surgery_open() {
  document.getElementById("surgery").style.display = 'block';
};
function surgery_close() {
  document.getElementById("surgery").style.display='none';
}
//검사정보 버튼을 눌렀을 때 나오는 창
function checkup_open() {
  document.getElementById("checkup").style.display = 'block';
};
function checkup_close() {
  document.getElementById("checkup").style.display='none';
}
// 증상 관리, 치료 상황을 눌렀을 때 나오는 창
function care_open() {
  document.getElementById("care").style.display = 'block';
};
function care_close() {
  document.getElementById("care").style.display='none';
}
///////////////////////////////////////////////////////////////
// prn 오더 눌럿을 때 나오는 창
///////////////////////////////////////////////////////////////
// Vital을 눌렀을 때 나오는 창
function vital_open() {
  document.getElementById("vital").style.display = 'block';
};
function vital_close() {
  document.getElementById("vital").style.display='none';
}
// 특이사항을 눌렀을 때 나오는 창
function unusal_open() {
  document.getElementById("unusal").style.display = 'block';
};
function unusal_close() {
  document.getElementById("unusal").style.display='none';
}
///////////////////////////////////////////////////////////////
