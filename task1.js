// 1. versi tanpa built-in-function
function palindrom(word) {
  let temp = '';
  let x = word.length - 1;
  let newWord = word.toLowerCase();
  while (x >= 0) {
    temp += newWord[x];
    x--;
  }
  if (temp == newWord) {
    console.log('Palindrom');
  } else {
    console.log('Bukan Palindrom');
  }
}

// palindrom('Malam');

// 2 vesri dengan built-in-function
function checkPalindrom(str) {
  cekStr = str.toLowerCase();
  let result = cekStr == cekStr.split('').reverse().join('');

  if (result == true) {
    return console.log('Palindrom');
  } else {
    console.log('Bukan Palindrom');
  }
}

checkPalindrom('Malam');
