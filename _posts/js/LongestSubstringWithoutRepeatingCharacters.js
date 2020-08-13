/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0;
    let buffer = '';
    for (let i = 0; i < s.length; i++) {
        let index = buffer.indexOf(s[i]);
        if(index>=0){
            if(buffer.length > len) len = buffer.length;
            buffer = buffer.substring(index+1);
        }
        buffer += s[i];
    }
    return buffer.length > len ? buffer.length : len;
};

let str = 'dvdf';
let r = lengthOfLongestSubstring(str);
console.log(r);