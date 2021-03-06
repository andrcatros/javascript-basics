const getNthElement = (index, array) => {
  let i =  index >= array.length ? index - array.length : index;
  return array[i];
};

const arrayToCSVString = array => array.join(',');

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
}

const addToArray2 = (element, array) => [...array, element];
const addToArray2Sol = (element, array) => array.concat([element]);

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => numbers.map(num => num.toString());
const numbersToStringsSol = (numbers) => numbers.map(number => String(number));

const uppercaseWordsInArray = strings => strings.map(string => string.toUpperCase());

const reverseWordsInArray = strings => strings.map(string => string.split('').reverse().join(''));

const onlyEven = numbers => numbers.filter(num => num % 2 === 0);

const removeNthElement2 = (index, array) => {
  const array2 = [...array];
  array2.splice(index, 1);
  return array2;
};

const removeNthElement2Sol = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = strings => {
  const regex = /a|e|i|o|u/i;
  return strings.filter(string => regex.test(string[0]))
};

const elementsStartingWithAVowelSol = (strings) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    return vowels.includes(firstLetter);
  });
};
  //["apple", "epple", "ipple", "opple", "upple"]

const removeSpacesSol = (string) => string.split(' ').join('');
const removeSpaces = string => string.split('').filter(elem => elem !== " ").join('');

const removeSpaces1 = (string) => {
  const split = string.split('')
  console.log(split)
  console.log(split.join(''))
}
const removeSpaces2 = (string) => {
  const split = string.split(' ')
  console.log(split)
  console.log(split.join(''))
}


removeSpaces1("ONE this string has spaces")
removeSpaces2("TWO this string has spaces")
//  [
//   'O', 'N', 'E', ' ', 't', 'h',
//   'i', 's', ' ', 's', 't', 'r',
//   'i', 'n', 'g', ' ', 'h', 'a',
//   's', ' ', 's', 'p', 'a', 'c',
//   'e', 's'
// ]
// ONE this string has spaces
// [ 'TWO', 'this', 'string', 'has', 'spaces' ]
// TWOthisstringhasspaces

const removeSpacesRegex = string => string.replace(/\s/g, "");

const sumNumbers = numbers => numbers.reduce((total, num) => total + num);

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

const sortByLastLetterSol = (strings) => {
  const reverseString = (item) => item.split('').reverse().join('');
  
  return strings.map(reverseString).sort().map(reverseString);
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
