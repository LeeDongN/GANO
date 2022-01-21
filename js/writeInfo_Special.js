function info_ToSpecial() {
  document.getElementById('info_newPatient').style.display = 'none'
  document.getElementById('info_Special').style.display = 'grid'
}

function info_test_solve(a) {
  var k = $(a).parent('div').next().children('div:eq(0)');
  var css = new Array();
  css = k.prop('style').cssText;
  console.log(k.prev());

  if (css[9]=='n') {
    k.prev().prop('style', 'margin:0px; color:gray; text-decoration:line-through')
    k.parent().prev().children().prop('class', 'info-Special-wide-title2-solved w3-hover-shadow')
    k.prop('style', 'display:flex; margin:15px 0px 0px 15px;');
  } else {
    k.prev().prop('style', 'margin:0px;')
    k.parent().prev().children().prop('class', 'info-Special-wide-title2 w3-hover-shadow')
    k.hide();
  }
}
