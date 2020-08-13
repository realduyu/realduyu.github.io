/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let characters = ['()','{}','[]'];
    let str = s;
    for (let i = 0; i < characters.length; i++) {
        let index = s.indexOf(characters[i]);
        if(index > -1){
            s = s.substring(0,index)+s.substring(index+2);
        }
    }
    if(s == '') return true;
    else if(str == s) return false;
    else return isValid(s);
};
var isValid2 = function(s) {
    let characters = ['()','{}','[]'];
    let str = s;
    do{
        str = s;
        for (let i = 0; i < characters.length; i++) {
            let index = s.indexOf(characters[i]);
            if(index > -1){
                s = s.substring(0,index)+s.substring(index+2);
            }
        }
        if(s == '') return true;
        else if(str == s) return false;
    }while(s!='')
};
var isValid3 = function(s){
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if (s[i] === brackets[stack[stack.length - 1]]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return !stack.length;
}

let is = isValid3('{{{}}}()');
console.log(is);