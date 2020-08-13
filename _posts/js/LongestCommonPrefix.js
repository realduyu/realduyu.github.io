/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pre = strs[0] ? strs[0] : '';
    for (let i = 1; i < strs.length; i++) {
        const element = strs[i];
        for (let j = 0; j < pre.length; j++) {
            if(pre[j] != element[j]) {
                pre = pre.substring(0,j);
            }
        }
    }
    return pre;
};
function longestCommonPrefix2(strs){
    const firstStr = strs[0] || '';
    let result = '';
    for (let i = 0; i < firstStr.length; i++) {
      let l = firstStr[i];
      if (strs.some(s => s[i] !== l)) {
        return result;
      } else {
        result += l;
      }
    }
    return result;
}
var longestCommonPrefix3 = function(strs) {
    const firstStr = strs[0] || '';
    let pre = '';
    let isPre = false;
    for (let i = 0; i < firstStr.length; i++) {
        const element = firstStr[i];
        isPre = true;
        for (let j = 0; j < strs.length; j++) {
            if(element != strs[j][i]) {
                isPre = false;
                break;
            }
        }
        if(isPre) pre += element;
        else break;
    }
    return pre;
};

let strs = ['asad','asadd','asafgsd'];
let pre = longestCommonPrefix3(strs);
console.log(pre);
