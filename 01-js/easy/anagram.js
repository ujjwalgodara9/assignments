/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
      
      var arr = new Array(26).fill(0);

      for (var i = 0; i < str1.length; i++) {
        arr[str1.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;

      }

      for (var i = 0; i < str2.length; i++) {
        arr[str1.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;

      }

      for (var i = 0; i < 26; i++) {
          if (arr[i] != 0) {
              return false;
          }
      }

      return true;
}

module.exports = isAnagram;
