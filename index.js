// var canBeEqual = function (s1, s2) {
//   function changeLetterAt(word, id, letter) {
//     let newWord = "";
//     for (let i = 0; i < word.length; ++i) {
//       if (i != id) {
//         newWord += word[i];
//       } else {
//         newWord += letter;
//       }
//     }

//     return newWord;
//   }
//   let j = 2;
//   for (let i = 0; i < s1.length - 2; ++i) {
//     let newS1 = changeLetterAt(s1, i, s2[i]);
//     let newS11 = changeLetterAt(newS1, j, s2[j]);
//     console.log(newS11);
//     s1 = newS11;
//     if (newS11 === s2) {
//       return true;
//     }
//     i++;
//     j++;
//   }
//   return false;
// };

var numIdenticalPairs = function (nums) {
  let counterIdenticalPairs = 0;

  for (let ind = 0; ind < nums.length; ++ind) {
    for (let j = ind; j < nums.length; ++j) {
      if (nums[ind] === nums[j] && ind < j) {
        counterIdenticalPairs++;
      }
    }
  }
  return counterIdenticalPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
