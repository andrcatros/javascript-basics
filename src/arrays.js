const getNthElement = (index, array) => {
  let i =  index > array.length ? index - array.length : index
  console.log(index, array,i)
  return array[i];
  };

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
 array.push(element);
};

const addToArray2 = (element, array) => {
 return [...array, element];
};


const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array
};

const numbersToStrings = numbers => {
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
//
};

const onlyEven = numbers => {
  return numbers.filter(num => num % 2 === 0)
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
