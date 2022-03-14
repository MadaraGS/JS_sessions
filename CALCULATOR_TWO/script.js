let numberOne = '';
let numberTwo = '';
let operator = '';
let result = '';


$(document).ready(function(){
    $('button').on('click', function(e){
        let btn =  e.target.innerHTML;
        if (btn >= '0'  && btn <= '9'){
            handleNumber(btn)
        } else{
            operatorPress(btn)
        }
    });
});


function handleNumber(num){
    if(numberOne ===  ''){
        numberOne = num;
    }else{
        numberTwo =  num;
    }
     displayButton(num)   
}



function numberPress(num){
    

}

function operatorPress(oper) {
        if (operator === '') {
            operator = oper;
        } else {
            calculateFunction();
            operator = oper;
        }             
 }


function displayButton(btn){
    
    $(".current-operand").show();
    $(".previous-operand").show();
    $('.output').text(btn);

}

function calculateFunction(){
   switch(operator){
       case'+' : 
                result =  +numberOne + +numberTwo;
                displayButton(result);
         
                
         break;
            case'-' : 
                result =  +numberOne - +numberTwo;
                displayButton(result);
             break;
                case'*' : 
                result =  +numberOne * +numberTwo;
                displayButton(result);
                break;
                    case'÷' : 
                    result =  +numberOne /  +numberTwo;
                    displayButton(result);
                break;
   }

   updateVariables();
}

function updateVariables() {
    
    numberOne  = result;
    numberTwo = '';

   

  } 

function clearVariable(){

}
