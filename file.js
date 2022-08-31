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
    var filename = "document.doc";
    download(filename, text);
  }, false);