// string palindrome

// madam -> madam ==> true
// hello -> olleh => false

// function isPalindrome(string) {
//     const reversedString = string.split('').reverse().join('');

//     return string === reversedString;
// }

// console.log('isPalindrome', isPalindrome('madam'));

// function isPalindrome(string) {
//     let left = 0;
//     let right = string.length - 1;

//     while (left < right) {
//         if (string[left] !== string[right]) return false;

//         left++;
//         right--;

//         return true;
//     }
// }

// console.log('isPalindrome', isPalindrome('mm'));

// cleaing up a palindrome

// function isCleanPalindrome(string) {
//     const cleanedString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//     // left = 0
//     // right == cleanedString.length - 1

//     let left = 0;
//     let right = cleanedString.length - 1;

//     // execution i.e loop

//     while (left < right) {
//         // compare the values of left and right index

//         if (cleanedString[left] !== cleanedString[right]) return false;

//         left++;
//         right--;

//         return true;
//     }
// }

// console.log('Clean Palindrome', isCleanPalindrome('A man, a plan, a canal: Panama'));
// console.log('Clean Palindrome', isCleanPalindrome('A man, race'));

// replacing a empty value in palinndrome

//ab?ba
