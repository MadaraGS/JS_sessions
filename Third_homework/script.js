for(let i=1; i<=100; i++){
    
    if((i % 5 === 0) && (i % 3 === 0)){
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    } else{
        console.log(i);
    }

}

for(let i=1; i<=100; i++){
    
    if(i % 15 === 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    } else{
        console.log(i);
    }

}


let num1 = 3;
let num2 = 5;
let num3 = 15;

for(let i=1; i<=100; i++){

    i % num3 === 0 ? console.log( "FizzBuzz") : i % num1 === 0 ? console.log ("Fizz") :  i % num2 === 0 ? console.log("Buzz") : console.log(i)
}
