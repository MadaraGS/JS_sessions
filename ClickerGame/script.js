
let number = 0;
let btn = document.getElementById("btn")
btn.addEventListener("click", getCookie);
let show = document.getElementById("show")
let start =  document.getElementById("start")    
let result = document.getElementById("result")



setTimeout(() => {
  //btn.addEventListener("click", getCookie);
  
}, 1000)

setInterval(function() {
   result.textContent = "You get cokie " + number;
}, 20000); //Every 1000ms = 1sec


function getCookie(){
      number++;
      show.textContent = number;
  
}








 






  



   
