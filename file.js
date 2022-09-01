var txtarea = document.getElementById("textarea1");

function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.dispay = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  document.getElementById("downloadDoc").addEventListener("click", function() {
    var text = txtarea.value;
    var name = document.getElementById("docname");
    if(name.value == "") {
      filename ="document.doc";
    }
    else {
      filename =name.value + ".doc";
    }
    download(filename, text);
  }, false);

function showdownload() {
  document.getElementById("name").style.display = "block";
  document.getElementById("saveDoc").style.display = "none";
}
function showsave() {
  document.getElementById("name").style.display = "block";
  document.getElementById("downloadDoc").style.display = "none";
}
function hidesave() {
  document.getElementById("downloadDoc").style.display = "block";
  document.getElementById("saveDoc").style.display = "block";
  document.getElementById("name").style.display = "none";
}