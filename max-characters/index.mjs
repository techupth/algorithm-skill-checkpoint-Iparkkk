let str1 = "pPPark";
let str2 = "cheeseCake";
let str3 = undefined;
let str4 = null;
let str5 = "aBcDEfghijKLmnopqRsTuvWxyZ";

export const getMaxCharacters = (str) => {
  console.log(str);
  if (!str) {
    if (str === "") str = "Blank string";
    return `The string is invalid, value is ${str}`;
  }
  //if want to count in SeNsItvE CaSe,
  //use | let newStr = str | instead
  let newStr = str.toLowerCase();
  //let newStr = str
  let result = "";
  let frequencyArray = [];
  let frequencyObject = {};
  let max = 1;

  for (let i = 0; i < newStr.length; i++) {
    if (!frequencyArray.includes(newStr[i])) {
      frequencyArray.push(newStr[i]);
      frequencyObject[newStr[i]] = 1;
    } else {
      frequencyObject[newStr[i]] += 1;
    }
  }

  for (let i in frequencyObject) {
    if (frequencyObject[i] >= max) {
      max = frequencyObject[i];
      result = `${i} : ${max}`;
    }
  }

  if (max == 1) {
    result = "Max frequency is 1 , No have  most The string";
  }
  return result;
};

//test result in ,Multiple possibility
console.log(getMaxCharacters(str1));
console.log(getMaxCharacters(str2));
console.log(getMaxCharacters(""));
console.log(getMaxCharacters(str3));
console.log(getMaxCharacters(str4));
console.log(getMaxCharacters(str5));
