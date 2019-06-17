let today = new Date(); 
let hour = today.getHours(); 

function areWeOpen (){
  if (hour >= 9 && hour <= 16){
   openClosed.innerHTML = "We are open, be sure to visit us"
  }
  else {
   openClosed.innerHTML = "We are now closed"
  }
}
areWeOpen();