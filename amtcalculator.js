//Calculate Tip
function calculateAmt() {
var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;


 if(billAmt===0 && numOfPeople==0 )
 {
      alert("Please enter vaild details");
    return;
 }

 var  total=billAmt/numOfPeople;
 
 document.getElementById("Amt").innerHTML = total;








};