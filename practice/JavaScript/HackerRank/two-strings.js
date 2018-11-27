/**
 * Source: https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
 * 
 * Write a function to see if a subset of one string
 * is a subset of another string
 * 
 * @param {*} s1 
 * @param {*} s2 
 * 
 * O(1) space and O(n) time
 */
// Complete the twoStrings function below.
function twoStrings(s1, s2) {

    let dict1 = {};
    for (let i = 0; i < s1.length; i++){
        let char = s1[i];
        if (dict1[char] == undefined) {
            dict1[char] = 1;
        } else {
            dict1[char] += 1;
        }
    }

    for (let i = 0; i < s2.length; i++){
        let char = s2[i];
        if (dict1[char] != undefined) {
            return "YES";
        }
    }

    return "NO";
}