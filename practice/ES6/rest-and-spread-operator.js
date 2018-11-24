/*
rest-and-spread-operator.js
*/

/*
===== Sample 1 =====
*/
function addNumbers(numbers){
    return numbers.reduce((sum, number) => sum + number, 0);
}

addNumbers([1,2,3,4,5]);

// What if we don't want to pass an array into the argument?
// We can use the rest operator
function addNumbers(...numbers){ // capture all the arguments and put them into a single array
    return numbers.reduce((sum, number) => sum + number, 0);
}

addNumbers(1,2,3,4,5,6,7);




/*
===== Sample 2 =====
Use spread operator to flattening out inner arrays + add a new element to the new array
(= dumping everything inside to the array outside)
*/
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

defaultColors.concat(userFavoriteColors); // ['red', 'green', 'orange', 'yellow'];

// Create a new array with the spread operator " ...someVariable"
[ ...defaultColors, ...userFavoriteColors ]; // ['red', 'green', 'orange', 'yellow'];

[ ...defaultColors, userFavoriteColors ]; // ['red', 'green', ['orange', 'yellow'];

// ['blue', 'fire red', 'fall orange', 'red', 'green', 'orange', 'yellow'];
[ 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];




/*
===== Sample 3 =====
Check if an item is in the array.
If not, return a new array with the missing item added to it
*/
function validateShoppingList(...items){
    if (items.indexOf('milk') < 0){
        return ['milk', ...items];
    }

    return items;
}

validateShoppingList('oranges', 'bread', 'eggs');