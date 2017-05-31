var i = 0;

function change() {
  var doc = document.getElementById("test");
  var color = ["red", "green", "magenta"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

setInterval(change, 1000);