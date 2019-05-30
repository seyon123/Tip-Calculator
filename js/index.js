//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billTotal").value;
  var tipAmount = document.getElementById("tipPercentage").value;
  var numOfPeople = document.getElementById("numPeople").value;

  if (tipAmount === "other") {
    tipAmount = document.getElementById("tipNum").value/100;
  }

  //validate input
  if (billAmt === "" || tipAmount == 0) {
    alert("Please make sure ALL values are entered");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmt * tipAmount) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //always have two decimal point number
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
//Clear the form
function clearForm() {
  document.getElementById("form").reset();
  document.getElementById("numPeople").value = "";
}

//function that shows or hides the "other" textbox
function show(value) {
  if (value == "other") {
    tipNum.style.display='inline-block';
    percentage.style.display='inline-block';
  } 
  else{
    tipNum.style.display='none';
    percentage.style.display='none';
  }
}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tipNum").style.display = "none";
document.getElementById("percentage").style.display = "none";
//document.getElementById("text").style.display = "none";

//click calculate button to call calculate function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};

//click clear button to call clear function
document.getElementById("clear").onclick = function() {
  clearForm();
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  document.getElementById("tipNum").style.display = "none";
  document.getElementById("percentage").style.display = "none";

};

