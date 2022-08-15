function Validate(){
    var regex = /[^a-zA-Z0-9]/;
    var field = document.querySelectorAll(".valid");
    //Validate TextBox value against the Regex.
    var isValid = regex.test(document.getElementsByClassName("valid").value);
    var pipeline = document.valform.pipeline.value;
    var bucket = document.valform.bucket.value;
    var file = document.valform.file.value;
    var credentials = document.valform.credentials.value;
    var run = document.valform.run.value;
        if (!isValid) {
            alert("Contains Special Characters.");
        }
        if (field.values.length <= 5){
            alert("Minimum length error");
            console.log("hello");
        }
        if (pipeline[0] || bucket[0] || file[0] || credentials[0] || run[0] == "-"){
            alert("contains '_,+,-'");
        } 
    };



function Clear(){
    document.querySelectorAll(".valid").innerHTML = "";
}
