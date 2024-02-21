let str1 = "P,p Ar,rKkR ra,,,,,,Pp";
let str2 = "p,paa,rr kkr raap ,  p";
let str3 = "ABCDE";
let str4 = "zd156r2";
let str5 = "Do geese see God";
export const palindrome = (str) => {
  let result = false;
  let reverseArray;
  let newStr = str.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  str = str.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  reverseArray = newStr.split("");
  reverseArray.reverse();
  newStr = reverseArray.join("");
  if (str === newStr) {
    result = true;
  }

  return result;
};

console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));
console.log(palindrome(str4));
console.log(palindrome(str5));
