1
$('#gallery').tabX({
  type:'buttons',
  animation:'none',
  animations: ["fade","slide","fall","noir","rotatez","rotatey","rotatex","blur","away","blast"],
  boxClass:'default',
  activeCat:'all',
});


function myFunction() {
    document.getElementById("AboutMe").innerHTML = "I also like learning new things";
  }


function showSuccessMessage() {
    document.getElementById("Send").innerHTML = "Thank you! Your message has been sent";
}

function surpriseMe() {
    document.getElementById("surpriseMe").innerHTML = "I also know to drive a car";
  }

  function game() {
    document.getElementById("game").innerHTML = "The player has to jump over platfroms";
  }

  function sportsbetting() {
    document.getElementById("sportsbetting").innerHTML = "Bet safely";
  }




