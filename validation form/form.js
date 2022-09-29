let fn, nn, cc, pw;
function submits() {
    fn = forms.name.value;
    cc = forms.name2.value;
    pw = forms.name4.value;
    em = forms.name1.value;


    if (fn == "" || fn == null) {
        document.getElementById("a1").innerHTML = "Please Enter Name";
    } else {
        document.getElementById("a1").innerHTML = "";
    }
    nn = parseInt(forms.name3.value);
    let x = nn.toString();
    console.log("Type of x : " + typeof x);
    if (x.length < 10 || x.length >= 11) {
        document.getElementById("a4").innerHTML = "Number should be 10 digit";
        console.log("Running Successfully")
    } else {
        document.getElementById("a4").innerHTML = "";
    }
    let z = (forms.name2.value);
    console.log(z);
    if (z == "0") {
        // alert("enter country");
        document.getElementById("a3").innerHTML = "Select Country"
    } else {
        document.getElementById("a3").innerHTML = ""
    }
    if (pw == "" || pw == null) {
        document.getElementById("a5").innerHTML = "Enter Password"
    } else if (pw.length < 5) {
        document.getElementById("a5").innerHTML = "Password Must be 5 character"
    } else {
        document.getElementById("a5").innerHTML = ""
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(forms.name1.value)) {
        document.getElementById("a2").innerHTML = "";
    } else {
        document.getElementById("a2").innerHTML = "Please Enter Valid Email";

    }
    if (forms.chk1.checked == false) {
        document.getElementById("a6").innerHTML = "You must agree to the terms first."
    } else {
        document.getElementById("a6").innerHTML = ""
    }


}
