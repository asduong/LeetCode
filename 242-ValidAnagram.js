/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  let sObj = {};
  let tObj = {};
  for (let i = 0; i < s.length; i++) {
    if (sObj[s[i]]) {
      sObj[s[i]] += 1;
    } else {
      sObj[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (tObj[t[i]]) {
      tObj[t[i]] += 1;
    } else {
      tObj[t[i]] = 1;
    }
  }
  if (JSON.stringify(s) === JSON.stringify(t)) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram("hello", "elloh"));
