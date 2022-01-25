var global_roomID = {};

 //각 침대마다의 고유 아이디
var global_bedID = {};

//인계페이지로 넘어갈 때 지금까지 저장된 인계페이지 아이디
var info_ID_array = new Array;

//위의 변수와 현재 작성하려는 환자ID를 비교하기 위함
var stored_ID_array = new Array;
var temp_ID_array = new Array;

//List page에서 카드 클릭시, 그 카드에 해당하는 ID 반환함
//단, BedID가 아닌 환자 정보가 써져있는 ID
var global_ID = {};

//patient 카드 클릭시 그 카드의 값들을 저장해 놓은 변수
var global_modalData = {};
