let textinput=document.getElementById("text-input");
let checkinput=document.getElementById("check-btn");
function isAlpha(char){
  return /[A-Za-z0-9]/.test(char);
}
function myPalindrome(str){
  let a=str.toLowerCase().split("").filter(isAlpha).join("");
  let rev=a.split("").reverse().join("");
  if(textinput.value===""){
    alert('Please input a value');
  }
  else if(a===rev){
    result.innerHTML=textinput.value+" "+ 'is a palindrome';
  }
  else{
    result.innerHTML=textinput.value+" "+ 'is not a palindrome';
  }
}

checkinput.addEventListener("click",function(){
  
  let inputText=textinput.value;
  myPalindrome(inputText);
});
