function add_checkup_box() {
  var contents1 = '';
  var contents2 = '';
  var contents3 = '';

  contents1 += '<input class="info-input info-input-space P_plus_border" type="text" placeholder="검사 항목">'
  contents2 += '<input class="info-input info-input-space P_plus_border" type="text" placeholder="검사 내용">'
  contents3 += '<input class="info-input P_plus_border" style="margin-top: 10px; "type="checkbox">'

  $('#checkup-title').append(contents1);
  $('#checkup-contents').append(contents2);
  $('#checkup-box').append(contents3);
};
