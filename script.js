
flagb = 0; flagi = 0; flagu = 0; flags = 0; flagf = 0;

function f0() { 

    //function to make the text bold using DOM method 
    if(flagf==0) {
        document.querySelector(".dd-content").style.display = "block";
        flagf = 1;
    }
     else {
         document.querySelector(".dd-content").style.display = "none";
         flagf = 0;
     }
} 

function f1() { 

    //function to make the text bold using DOM method 
    if(flagb==0) {
        document.getElementById("textarea1").style.fontWeight = "bold";
        document.getElementById("bold").style.backgroundColor = "pink";
        flagb = 1;
    }
     else {
         document.getElementById("textarea1").style.fontWeight = "normal";
         document.getElementById("bold").style.backgroundColor = "white";
         flagb = 0;
     }
} 

  

function f2() { 

    //function to make the text italic using DOM method 
    if(flagi==0) {
        document.getElementById("textarea1").style.fontStyle = "italic";
        document.getElementById("italic").style.backgroundColor = "pink";
        flagi = 1;
    }
     else {
         document.getElementById("textarea1").style.fontStyle = "normal";
         document.getElementById("italic").style.backgroundColor = "white";
         flagi = 0;
     }
} 

  

function f3() { 

    //function to make the text alignment left using DOM method 

    document.getElementById("textarea1").style.textAlign = "left"; 
} 

  

function f4() { 

    //function to make the text alignment center using DOM method 

    document.getElementById("textarea1").style.textAlign = "center"; 
} 

  

function f5() { 

    //function to make the text alignment right using DOM method 

    document.getElementById("textarea1").style.textAlign = "right"; 
} 

function f50() { 

    //function to make the text alignment right using DOM method 

    document.getElementById("textarea1").style.textAlign = "justify"; 
} 

  

function f6() { 

    //function to make the text in Uppercase using DOM method 

    document.getElementById("textarea1").style.textTransform = "uppercase"; 
} 

  

function f7() { 

    //function to make the text in Lowercase using DOM method 

    document.getElementById("textarea1").style.textTransform = "lowercase"; 
} 

  

function f8() { 

    //function to make the text capitalize using DOM method 

    document.getElementById("textarea1").style.textTransform = "capitalize"; 
} 

  

function f9() { 

    //function to make the text underlined  
     if(flagu==0) {
        document.getElementById("textarea1").style.textDecoration = "underline";
        document.getElementById("under").style.backgroundColor = "pink";
        document.getElementById("strike").style.backgroundColor = "white";
        flagu = 1;
    }
     else {
         document.getElementById("textarea1").style.textDecoration = "none";
         document.getElementById("under").style.backgroundColor = "white";
         flagu = 0;
     }
    

}
function f10() { 

    //function to make the text underlined  
     if(flags==0) {
        document.getElementById("textarea1").style.textDecoration = "line-through";
        document.getElementById("strike").style.backgroundColor = "pink";
        document.getElementById("under").style.backgroundColor = "white";
        flags = 1;
    }
     else {
         document.getElementById("textarea1").style.textDecoration = "none";
         document.getElementById("strike").style.backgroundColor = "white";
         flags = 0;
     }
    
}

function f11(id, increaseFactor) { 
    //function to make the text underlined  
    let txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

function f12(id, increaseFactor) { 
    //function to make the text underlined  
    let txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('line-height');
    currentSize = parseFloat(style);
    txt.style.lineHeight = (currentSize + increaseFactor) + 'px';
}
/*
function bold() {
    var txtarea = document.getElementById("textarea1");
    let txt = txtarea.value;
    var start = txtarea.selectionStart;
    var finish = txtarea.selectionEnd;
    var sel = txtarea.value.substring(start, finish);
    let bolden = '<b>' + sel + '</b>';
    //document.execCommand("bold");
    txtarea.value = txt.slice(0, start) + bolden + txt.slice(finish);
    //txtarea.innerHTML = txtarea.sel;
    alert("control is pressed");
}*/
/*
document.designMode = "on";
function myFunction(event) {
    if(event.shiftKey) {
        event.preventDefault();
        var txtarea = document.getElementById("textarea1");
        var start = txtarea.selectionStart;
        var finish = txtarea.selectionEnd;
        var sel = txtarea.value.substring(start, finish);
        
        document.execCommand("copy");
        alert("control is pressed");
    }
}
*/