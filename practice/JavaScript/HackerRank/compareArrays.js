/**
 * Source: https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * 
 * Write a function to compare 2 arrays and see if 
 * all words in note array can be found in the magazine array.
 * No word can be used more than once.
 * 
 * O(1) space and O(n) time;
 * 
 * @param {*} magazine 
 * @param {*} note 
 */
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    let found = true;

    if (note.length == 0) {
        found = true;
    }

    if (magazine.length == 0) {
        found = false;
    }

    let wordsAvailable = {};

    if (found = true) {
        magazine.forEach(function (word) {
            if (wordsAvailable[word] == undefined) {
                wordsAvailable[word] = 1;
            } else {
                wordsAvailable[word] += 1;
            }
        });

        note.forEach(function (word) {
            if (wordsAvailable[word] == undefined || wordsAvailable[word] < 1) {
                found = false;
            } else {
                wordsAvailable[word] -= 1;
            }
        });
    }
    
    if (found == true) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}