/*

Map the Debris
Written by: Andrea Law for a freecodecamp challenge


Requirement: 

Return a new array that transforms the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  // function to get a (the orbit's semi-major axis)
  function getAxis(avgAlt) {
    return 6367.4447 + avgAlt;
  }
  
  for (var i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(getAxis(arr[i].avgAlt), 3)/GM));
    delete arr[i].avgAlt;
  }
  
  return arr;
}

// Test cases

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);// should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
