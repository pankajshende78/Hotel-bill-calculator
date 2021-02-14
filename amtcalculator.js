
function calculateAmt() {
var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;


if(numOfPeople==0 ){
     
     numOfPeople=1;
  }

 if(billAmt==0)
 {
  
  alert("Please enter vaild details");
  return false;
 }

 var  total=billAmt/numOfPeople;
 
 document.getElementById("Amt").innerHTML = total;








};