/*
forEach.js
with two samples
*/


/*
===== Sample 1 =====
Use forEach
*/

var colors = ['red', 'green', 'blue'];
// ES5
for (var i = 0; i < colors.length; i++){
    console.log(colours[i]);
}
// ES6
colors.forEach(function(color){
    console.log(color);
});



/*
===== Sample 2 =====
Call a function in the forEach helper
*/
var numbers = [1,2,3,4,5];

var sum = 0;

function adder(number){
    sum += number;
}

// Loop over the array, incrementing the sum variable
// Do not use adder() as it returns the result from the previous call as the input
numbers.forEach(adder);

// print the sum variable
sum;




/* 
===== Exercise ===== 
Calculate the area of each image and store the results in the areas array
*/
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
var areas = [];

function sum(obj){
    areas.push(obj["height"] * obj["width"]);
}

images.forEach(sum);

areas;