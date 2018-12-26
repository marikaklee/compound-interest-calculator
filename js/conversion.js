function showInput() {
      
      var principal = document.getElementById("principal").value;
      var rate = (document.getElementById("rate").value)/100;
      var years = document.getElementById("years").value; 

    
      var amt = principal * Math.pow((1 + (rate/12)), (12*years));
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      });

      document.getElementById("display").innerHTML = `The investment balance after ${years} years is ${formatter.format(amt)}.`;
    }