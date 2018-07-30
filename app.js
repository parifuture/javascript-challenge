// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stringArray = s.split("");
    let result = findLongestSubstring(stringArray);
    // console.log("result.length",result.length);
    return result.length;
};

function findLongestSubstring(stringArray=[]) {
    let result = [], subStringArray = [];
    let start = 0, end = 0;
    stringArray.forEach(function(str) {
        console.log(str);
        end++;
        if(!result.includes(str)) {
            result.push(str);
        } else {
            // if(result.length > subStringArray.length)
            subStringArray.push([...result]);
            result = [];
            result.push(stringArray[end-1]);
            start = end-1;
            if(end >= stringArray.length) {
                subStringArray.push([stringArray[end-1]]);
            }
        }
    });
    return subStringArray;
}

lengthOfLongestSubstring('abcabcbb');