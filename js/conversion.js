function format(num) {
  var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
  return formatter.format(num);
}

function calculateCompoundInterest() {
      var principal = document.getElementById("principal").value;
      var rate = (document.getElementById("rate").value)/100;
      var years = document.getElementById("years").value; 
    
      var amt = principal * Math.pow((1 + (rate/12)), (12*years));

      document.getElementById("display").innerHTML = `The investment balance after ${years} years is ${format(amt)}.`;
}

function calculateSimpleInterest() {      
      var principal = document.getElementById("principal").value;
      var rate = (document.getElementById("rate").value)/100;
      var years = document.getElementById("years").value; 
    
      var amt = principal * (1 + (rate*years));

      document.getElementById("display").innerHTML = `The investment balance after ${years} years is ${format(amt)}.`;
}

function calculateCapRate() {
      var expenses = document.getElementById("expenses").value;
      var vacancy = document.getElementById("vacancy").value;
      var grossIncome = document.getElementById("grossIncome").value; 
      var propertyValue = document.getElementById("propertyValue").value; 
      
      var expensesRate = (expenses/grossIncome)*100;
      var netIncome = (100-expensesRate)/100*(100-vacancy)/100*grossIncome;
      var capRate = netIncome/propertyValue*100;

      document.getElementById("display").innerHTML = `The net income is ${format(netIncome)} and the cap rate is ${capRate}%`;
}

function calculateTaxableIncome() {
  var netOperatingIncome = document.getElementById("netOperatingIncome").value;
  var mortgageInterest = document.getElementById("mortgageInterest").value;
  var depreciationProperty = document.getElementById("depreciationProperty").value;
  var depreciationCapital = document.getElementById("depreciationCapital").value;
  var amortization = document.getElementById("amortization").value;
  var interest = document.getElementById("interest").value;

  var amt = netOperatingIncome - mortgageInterest - depreciationProperty - depreciationCapital - amortization + interest;
  document.getElementById("display").innerHTML = `The taxable income is ${format(amt)}`;

}
