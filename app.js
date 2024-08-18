let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowerset = "abcdefghijklmnopqrstuvwxyz";

let numberset = "1234567890";

let symbolset = "~!@#$%^&*()_+/";

// selectors

let passBox = document.getElementById("pass-box");
let totalChar = document.getElementById("total-char");
let upperInput = document.getElementById("upper-case");
let lowerInput = document.getElementById("lower-case");
let numberInput = document.getElementById("numbers");
let symbolInput = document.getElementById("symbols");
// let btn = document.getElementById("btn");
// console.log(btn);

let getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

let generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperset);
   //  console.log("upperset");
  }

  if (lowerInput.checked) {
    password += getRandomData(lowerset);
   //  console.log("lowerset");
  }

  if (numberInput.checked) {
    password += getRandomData(numberset);
  }

  if (symbolInput.checked) {
    password += getRandomData(symbolset);
    if(password.length < totalChar.value){
      return generatePassword(password)
    }
  }
  passBox.innerText = truncatString(password, totalChar.value);
};

generatePassword();

document.getElementById("btn").addEventListener(
   "click",
    function () {
  generatePassword();

});

function truncatString(str, num){
   if(str.length > num){
      let subStr = str.substring(0 ,num);
      return subStr;
   }else{
      return str;
   }
}