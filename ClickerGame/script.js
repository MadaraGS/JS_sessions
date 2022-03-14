
let number = 0;

// let pictCookie = document.getElementById("picture")
// pictCookie.addEventListener("click", getCookie);
let show = document.getElementById("show")
let start =  document.getElementById("start")    
let result = document.getElementById("result")
  let imgCookie = document.createElement("IMG")
imgCookie.setAttribute("src","img/images.jfif");
 let startGame =  imgCookie.addEventListener("click", getCookie)


setTimeout(getCookie,1000);

function getCookie(){

     
        document.body.appendChild(imgCookie);

        // if(number = 0 ){
        //   show.textContent = number
        //   let count = number++;
        // }else if{

        // }
     
      
setInterval(function() {
  result.textContent = "You get cookie " + number;
  
}, 20000); //Every 1000ms = 1sec



  
}








 






  



   
