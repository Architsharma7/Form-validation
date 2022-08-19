function getInputValue(){
var elements = document.getElementsByClassName("valid");
var regex = /^[a-zA-Z0-9]{4,10}$/;
for (let i = 0; i < elements.length; i++) {
    if (elements.item(i).value.length < 5){
        alert("minimum length should be 5");
    };
    if (elements.item(i).value[0] == '-' || elements.item(i).value[0] == '_' || elements.item(i).value[0] == '+'){
        alert("Cannot start with '-', '_', '+'");
    };
    if(regex.test(elements.item(i).value) == false){
        alert("No special characters allowed");
    };
  };
}

function Clear(){
    var elements = document.getElementsByClassName("valid");
    for (let i = 0; i < elements.length; i++) {
        elements.item(i).value = "";
    }
}