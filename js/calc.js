// init
function init () {
    var bill = document.getElementById("billAmt").value= "";
    var service = document.getElementById("qlyServ").value ="";
    var noPple = document.getElementById("numPple").value="";
};

// Result Body
function resultBody() {
    calTipBody.classList.add("hide");
    calTipHead.classList.add("hide");
    calTipEnd.classList.remove("hide");
};

var eachP = document.getElementById("tipEach");
var eachTip = document.getElementById("nTip");
var newAmt = document.getElementById("nBill");
var calTipBody = document.getElementById("calBody");
var calTipHead = document.getElementById("tipHead");
var calTipEnd = document.getElementById("tipCalEnd");
// buttons
var calculateBtn = document.getElementById("calBill");
var rtnBtn = document.getElementById("initBtn");


// calculate button
calculateBtn.addEventListener("click", () => {
    var bill = parseInt(document.getElementById("billAmt").value);
    var service = document.getElementById("qlyServ").value;
    var noPple = parseInt(document.getElementById("numPple").value);
    var T = (bill*service)/noPple;
    eachTip.innerHTML='$ '+ T.toFixed(2);
   newAmt.innerHTML ='$ '+ parseInt(T*noPple + bill);
   if (bill==="" || noPple==="" || service===""  ||noPple<1) {
       alert("Please ! enter the values apropriately.")
   } else if(noPple ===1) {
       noPple=1;
       resultBody();
       eachP.classList.add("hide");
   } else {
        resultBody();
        eachP.classList.remove("hide");
   }
   
});

// return button
rtnBtn.addEventListener("click", () => {
    calTipBody.classList.remove("hide");
    calTipHead.classList.remove("hide");
    calTipEnd.classList.add("hide");
    init();
});




