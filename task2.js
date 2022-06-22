// 1. versi tanpa built-in-function
function reversWords(sentence) {
  let edit = sentence + ' ';
  let words = '';
  let fullWord = '';
  let char = 0;
  let x = edit.length - 1;

  while (char <= x) {
    if (edit[char] == ' ') {
      fullWord = words + ' ' + fullWord;
      words = '';
    } else {
      words += edit[char];
    }
    char++;
  }

  return console.log(fullWord);
}

reversWords('Saya Belajar Javascript');

// 2. versi dengan built-in-fuction
function reversSentence(str) {
  let result = str.split(' ').reverse().join(' ');
  return console.log(result);
}

reversSentence('Saya Belajar Bootstrap');
