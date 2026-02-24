/*Build a Missing Letter Detector
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named fearNotLetter.
The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
The function should find the missing letter in the passed letter range and return it.
If all letters are present in the range, the function should return undefined.*/

function fearNotLetter(str){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphPosition=alphabet.indexOf(str[0]);
  for(let index =0; index <str.length; index++){
    
    if(alphabet[alphPosition]!=str[index]){
      return alphabet[alphPosition];
    }
    alphPosition++;
  }
}