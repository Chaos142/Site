function generate(inputBox, isGetIt) {
  unitNum = document.getElementById(inputBox).value;
  var outputLink = "";
  let formattedNumber = unitNum.toString().padStart(2, "0"); // Ensure two-digit format

  var url;

  switch (isGetIt) {
    case 1:
      url = `https://my.hrw.com/wl2/wl10/student/osp/av3/data/unit${formattedNumber}/pdf/av10l3rb_u${formattedNumber}_dy.pdf`;
      break;
    case 2:
      url = `https://my.hrw.com/wl2/wl10/student/osp/av3/data/unit${formattedNumber}/pdf/av10l3cn_u${formattedNumber}.pdf`;
      break;
    case 3:
      url = `https://my.hrw.com/wl2/wl10/student/osp/av3/data/unit${formattedNumber}/pdf/av10l3rb_u${formattedNumber}_pg.pdf`;
      break;
  }

  document.getElementById("output").innerText = url;
  document.getElementById("output").href = url;
}

function clearInput(input, output) {
  document.getElementById(input).value = "";
  document.getElementById(output).innerText = "";
}
