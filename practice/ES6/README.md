# Summary
- Reference: [https://www.udemy.com/javascript-es6-tutorial/]

## Intro
- ES6 vs Javascript
- ES1 to 7 are standards for JavaScript
- ES5 is widely supported by browsers and therefore is safe to use
- ES6 is not widely supported by browsers
- We use Babel to convert ES6 to ES5 for browsers to use

## forEach.js - The 'forEach' helper
- It is used to replace "for loop"
- We should avoid using "for loop" because many logics on a single line of code can create challenges for other developers to read and understand
- forEach helper passes the element in an array to the Iterator function
- Reason for using forEach:
  1. Reduce the amount of code
  2. Reduce the logic written

## map.js - The 'map' helper
- Use frequently in client-side frameworks like Angular and React
- Commonly used for printing a list of items on the screens, e.g. blog posts, comments

## filter.js - The 'filter' helper
- Common use cases: 
  1. Filter out a search on a search page, e.g. size and colour of shoes, 
  2. Filter out categories of items selling on a supermarket's online store
  3. Filter out comments for a specific post
  4. Find the rejected values and print them

## find.js - The 'find' helper
- Replace the iterator functions
- Do not need to use a "break" to stop the loop
- Find and stop at the first matched item
- Use this to look for a particular object

## every.js - The 'every' helper
- Return true if **all** items in an array meets the condition
- Else return false
- Save time on creating boolean variables and write a for loop to loop through the arrays

## some.js - The 'some' helper
- Return true if **any** items in an array meets the condition
- Else return false
- Save time on creating boolean variables and write a for loop to loop through the arrays

## reduce.js - The 'reduce' helper
- Use it to accumulate some values
- Can be rewritten to count matched pairs, e.g. parenthesis
- Can combine with othe helper functions to remove duplicated values
- Can return an object/ a value / an array

## const-let.js - replace the use of var
-use const and let instead of var for declaring variables
-use const for variables with constant values
-use let for variables with changing values
-values of const cannot be changed once set
-they are used to make the purpose of the variables clear to developers

## template-string.js
-refactor strings with variables using back tags
-e.g. `My name is ${firstName} ${lastName}`;
-the purpose is to make it simple to understand

## arrow-functions.js
-refactor the functions with 
-(1)the function keyword removed and 
-(2)a fat arrow => added to it before the curly braces

## enhanced-object-literals.js
-compact the code with ES6
-remove ": function" in the value of a key in an object
-remove ": valueName" if both the key and its value in an object share the same name

## default-function-arguments.js
-for writing less code
-use to reassign values to the arguments when their values are undefined
-note that "undefined" is not equal to "null"

## rest-and-spread-operator.js
-the rest operator is used for refering to all argument inputs, and give them a name as an array
-e.g. function someName(...items){}
-the spread operator is for combining arrays and elements into a single array in the statements
-e.g. ['apple', ...fruitsToBuy];