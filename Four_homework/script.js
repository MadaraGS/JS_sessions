/*Hometask for next week: 
Implement the functions which expect the string value as the importing parameter
 and it can 
    1) Detect if the string is palindrome
    2)Print the  anagram
    3) Count, how many words there are in the string
    4)Print the maximal occurring character in the string */ 

//    1) Detect if the string is palindrome
    // function stringPalindrome(a){
    //     let arr = a.split("")
    //      let arrTwo = arr.reverse();
    //      let newString = arrTwo.join('');
    //      console.log(arrTwo);
    //         if(a === newString){
    //             console.log("string is a Palindrome")
    //         }else{
    //             console.log("Given string is not the Palindrome")
    //     }

    // }
    // stringPalindrome(prompt("Please eneter name to check is word is Palindrome"));

//  2)Print the  anagram

  function anagram(word){
    let wordNew = []; 
    console.log("Your word was  "   + word)
    let wordArr = word.split("");
    console.log(wordArr)
      
              for(let i = 0; i< wordArr.length; i++){
                      let temp  = wordArr[i]
                        tempTwo = wordArr[i+1];
                        temp = tempTwo;
                        tempTwo = temp;
                        wordNew.push()

                    
                        
              }  
                       console.log(wordNew.join(" ") )
            

      }
      
  
  


  anagram(prompt("Please eneter two stings to chechk is this words are anagram") )



  









//3) Count, how many words there are in the string

// function countString(string){
//     let count = 0; 
//     let words = string.split(" ")
//         for(let i = 0; i< words.length; i++){
//             if(words[i] != ""){
//                 count += 1;
//             }
//         }
//    alert("Your entered sentence  " + string + " has " + count +  " word in the sentence")
//         console.log(count)
// }
// countString(prompt("Please eneter sentence to check how many words are there"))

//4. Print the maximal occurring character in the string

// function maxRecurringChar(string){

// let str = string.toLowerCase();
// let newArry = {}
// let max_count = 0;
// let ans; 

//     for (let element of str) {
//         if ( !newArry[element]){
//                 newArry[element] = 1;
//         }else{
//              newArry[element]++;
//         }
//     }
//         console.log(newArry)
//     for( let element in newArry){
//          if(newArry[element] > max_count){
//              max_count =  newArry[element];
//              ans = element;
//         }
//      }

// console.log("Max count " + max_count)
// console.log("Char answerr " + ans)
// }

//maxRecurringChar(prompt("Please eneter sentence to check how many words are there"));