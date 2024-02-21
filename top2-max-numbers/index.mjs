let arr1 = [10, 40, 20, 2, 9, 19];
let arr2 = [-10, -40, -20, -2, -9, -19];
let arr3 = [10, 40, 20, 2, 40, 9, 19];
let arr4 = [1];
let arr5 = [];
let arr6 = undefined;
let arr7 = null;
let arr8 = NaN;
export const getTop2MaxNumbers = (numbers) => {
  const isArray = Array.isArray(numbers);
  if (isArray == false) return `the value is not an array : ${numbers}`;
  let firstMax;
  let secondMax;
  let keepValue;
  const length = numbers.length;

  if (length < 2) return "element in array should have 2 and more";

  for (let [i, value] of numbers.entries()) {
    if (i == 0) {
      firstMax = numbers[i];
      secondMax = numbers[i + 1];

      if (secondMax > firstMax) {
        keepValue = firstMax;
        firstMax = secondMax;
        secondMax = keepValue;
      }
    }

    if (value > secondMax && value < firstMax) {
      secondMax = value;
    }
    if (value > firstMax) {
      keepValue = firstMax;
      firstMax = value;
      secondMax = keepValue;
    }
  }
  for (let i = 0; i < length; i++) {
    numbers.pop();
  }
  numbers.push(firstMax);
  numbers.push(secondMax);
  return numbers;
};

console.log(getTop2MaxNumbers(arr1));
console.log(getTop2MaxNumbers(arr2));
console.log(getTop2MaxNumbers(arr3));
console.log(getTop2MaxNumbers(arr4));
console.log(getTop2MaxNumbers(arr5));
console.log(getTop2MaxNumbers(arr6));
console.log(getTop2MaxNumbers(arr7));
console.log(getTop2MaxNumbers(arr8));
