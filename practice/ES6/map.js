/*
map.js
*/


/*
===== Sample 1 =====
Use map to create a new array
*/

var numbers = [1,2,3,4,5];
var doubledNumbers = [];

// without map
for (var i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

// with map. Must put the "return" in the map function
var doubled = numbers.map(function(number){
    return number * 2;
});


/*
===== Sample 2 =====
Collect properties in an array of objects
*/
var cars = [
    { model: 'Buick', price: 'CHEAP'},
    { model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car){
    return car.price;
});



/**
 * ===== Exercise ===== 
 */
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});


/**
 * ===== Exercise =====
 */

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time; // [3.4,1.8,2.36]
});


/**
 * ===== Exercise =====
 */

function pluck(array, property) {
    return array.map(function(element){
        return element[property];
    });
}

var paints = [ { color: 'red'}, { color: 'green' }, { color: 'blue' }];

pluck(paints, "color");