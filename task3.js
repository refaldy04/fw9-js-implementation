// 1. Pake built-in-function
function divideAndSort(int) {
  let result = '';
  let items = int.toString().split('0');
  items.map((item) => {
    result = result + item.split('').sort().join('');
  });
  return console.log(parseInt(result));
}

divideAndSort(884734507740354);

// 2. tidak pake built-in-function
// function divideAndSort2(int) {
//   let result = '';
//   let fixResult = '';
//   let finalResult = '';
//   let item = int.toString() + 0;
//   let char = 0;

//   while (char <= item.length - 1) {
//     if (item[char] == 0) {
//       let i = 1;
//       while (i < result.length) {
//         let j = result.length;
//         while (j > i) {
//           switch (result[i] < result[j]) {
//             case true:
//               fixResult += result[i];
//               break;
//           }
//           j--;
//         }
//         i++;
//       }
//       finalResult += fixResult;
//       result = '';
//       fixResult = '';
//     } else {
//       result += item[char];
//     }
//     char++;
//   }
//   return console.log(parseInt(finalResult));
// }

// divideAndSort2(79208790834);
