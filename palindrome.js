/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (parseInt(x.toString().split("").reverse().join("")) === x) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isPalindrome(121);
