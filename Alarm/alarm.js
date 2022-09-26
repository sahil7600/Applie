let ch, cm, cs;
let hh, mm;
function gets() {
    hh = parseInt(aform.time1.value);
    mm = parseInt(aform.time2.value);
    console.log(hh);
    console.log(mm);
}
function checkalarm() {
    setInterval(setalarm, 1000);
    document.getElementById("answer").innerHTML = "Alarm is set for " + hh + ":" + mm;
}

function setalarm() {
    let time = new Date();
    ch = time.getHours();
    cm = time.getMinutes();
    cs = time.getSeconds();
    console.log("Second" + cs);
    if (ch == hh && cm == mm && cs == 1) {
        clearInterval(setalarm);
        timeout();
        console.log("Alarm Successfully Working !!!");
    }
}
    var a;
    function timeout() {
    a = new Audio("iphone.mp3");
    a.play();
    // if (ch == hh && cm == mm + 1) {
    //     a.pause();
    // }
}
    function stopalarm() {
    console.log("Inside Stop Alaram")
    a.pause();
}
var b;
function playy() {
    b = new Audio("dholida.mp3.mp3");
    b.play()
}
