/* 
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = '';
    let len = 0;
    let buffer = '';
    for (let i = 0; i < s.length; i++) {
        buffer = '';
        for (len = 0; len < s.length-i && len <= i; len++) {
            if(s[i-len] != s[i+1+len]) break;
            buffer = s[i-len] +buffer + s[i-len];
        }
        max = max.length > buffer.length ? max : buffer;
        buffer = s[i];
        for (len = 0; len < s.length-i && len <= i; len++) {
            if(s[i-len] != s[i+len]) break;
            if(len > 0){
                buffer = s[i-len] + buffer + s[i-len];
            }
        }
        max = max.length > buffer.length ? max : buffer;
    }
    return max;
};
console.log(longestPalindrome('a'));