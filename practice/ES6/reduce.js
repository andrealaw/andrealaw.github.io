/*
reduce.js
*/


/*
===== Sample 1 =====
Let sum be the total of numbers, and set it to 0
Return the sum of numbers
*/
var numbers = [10, 20, 30];

numbers.reduce(function(sum, number){
    return sum + number;
}, 0); // 0 is used to set the initial value of sum. It can be any value, even negative values.


/*
===== Sample 2 =====
Return an array of strings from an array of objects
*/
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

// for the sum variable, we always name it "previous" or "acc" for accumulator
primaryColors.reduce(function(previous, color){
    previous.push(color); // an action
    return previous; // a variable
}, []);




/*
===== Sample 3 =====
Check if the string has balanced parenthesis
Return true only if previous === 0
*/
function balancedParens(string){
    return !string.split("").reduce(function(previous, char){
        if (previous < 0) { return previous; }
        if (char === "(") { return ++previous; }
        if (char === ")") { return --previous; }
        return previous;
    }, 0);
}

balancedParens("()"); // true
balancedParens(")("); // false
balancedParens("()))"); // false




/*
===== Exercise =====
*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip){
    return previous + trip.distance;
}, 0);



/*
===== Exercise =====
Count and update an object
Return an object
*/
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(acc, desk) {
      if (desk.type === 'sitting') { ++acc.sitting; }
      if (desk.type === 'standing') { ++acc.standing; }
      return acc;
  }, { sitting: 0, standing: 0 });



/*
===== Exercise =====
Remove duplicated values of an array
Return the array with no duplicated value
*/
function unique(array) {
    return array.reduce(function (newArray, e1) {
        var duplicated = newArray.find(function (e2) {
            return e1 === e2;
        });
        if (!duplicated) { newArray.push(e1); }
        return newArray;
    }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];

unique(numbers); // [1, 2, 3, 4]