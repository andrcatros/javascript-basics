const getNthElement = (index, array) => {
  let i =  index >= array.length ? index - array.length : index;
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
  return array;
};

const numbersToStrings = numbers => {
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const array2 = [...array];
  array2.splice(index, 1);
  return array2;
};


const elementsStartingWithAVowel = strings => {
  const regex = /a|e|i|o|u/i;
  return strings.filter(string => regex.test(string[0]))
};

const removeSpaces = string => {
  return string.split('').filter(elem => elem !== " ").join('');
};

const removeSpaces2 = string => {
  return string.replace(/\s/g, "");
};

const sumNumbers = numbers => {
  return numbers.reduce((total, num) => total + num)
};

// numbers = [1, 3, 5, 6, 2, 8]
// on first loop, total is 1 and num is 3
// 1 + 3 = 4 so total becomes 4 and num moves to the next val in the array, which is 5
// 4 + 5 = 9, so total is now 9 and we loop around to the next val, 6
// total + num === 9 + 6 = 15
// on the next loop we add 15 + 2
// now total is 17 and num becomes 8, the last value.
// 17 + 8 = 25. 8 is the last element in the array so our accumulator, total in this case, is returned.

const sortByLastLetter = strings => {
  const backwards = reverseWordsInArray(strings).sort();
  return reverseWordsInArray(backwards)
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
