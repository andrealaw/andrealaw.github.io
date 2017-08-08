/**

Return the biggest increase in temperatures of N days given in an array.

Time complexity: O(n)
Space complexity: O(1)

Requirements:
Given an array of temperature in N days. 
Return the biggest increase in temperature between any two temperatures(not necessarily consecutive).
The two temperatures of the biggest increase can neither be the minimum nor the maximum temperature.
If the temperature remains constant or drops, the biggest increase becomes 0.

Approaches: brute force -> greedy approach

Solved by: Andrea Law
Date: 5 Aug 2017

*/

function getBiggestTemperatureIncrease(temperatures) {
	
	if (temperatures.length < 4) {
		throw new Error("Less than 4 temperatures are provided. We need at least 4 to proceed.");
	}

	var min = Math.min.apply(null, temperatures);
	var max = Math.max.apply(null, temperatures);

	// var diffStack = [];		// a stack for validating the diffTemps without min and max
	var biggestIncrease = 0;	// the biggest increase in temperature
	var tempIncrease 	= 0;	// temporary biggest increase before temperature stops increasing

	var startIndex;
	var endIndex;
	var currentIndex 	= 0;

	while (currentIndex < temperatures.length) {
		var currentTemp = temperatures[currentIndex];

		// if current temp is not min or max, continue
		if ((currentTemp === min || currentTemp === max) === false) {
			// set startIndex to find out the diffTemp
			if (startIndex === undefined) {
				startIndex = currentIndex;
			} else {
				// set endIndex to find out the diffTemp
				if (endIndex === undefined) {
					endIndex = currentIndex;
				} else if (startIndex !== undefined && endIndex !== undefined) {
					startIndex = endIndex;
					endIndex = currentIndex;
				}

				var diffTemp = currentTemp - temperatures[startIndex];
				
				// temperature has no change. Increase stops.
				// compare tempIncrease with biggestIncrease to update the biggestIncrease
				// clear tempIncrease for the next increase
				if (diffTemp <= 0) {
					if (tempIncrease > biggestIncrease) {
						biggestIncrease = tempIncrease;
					} 
					tempIncrease = 0;
				} else if (diffTemp > 0) {
					tempIncrease += diffTemp;
				}

				// For checking the diff values:
				// console.log("push diff at index: ", currentIndex);
				// diffStack.push();
			}
		}
		// move to the next temperature
		currentIndex++;
	}
	// console.log("stack :", diffStack);
	return Math.max(biggestIncrease, tempIncrease);
}

// test cases:
console.log(getBiggestTemperatureIncrease([10,20,30,40,50])); 		// 20
console.log(getBiggestTemperatureIncrease([50,40,10,30,45,33,32])); // 35
console.log(getBiggestTemperatureIncrease([0,0,0,0,0])); 			// 0
console.log(getBiggestTemperatureIncrease([10,10,10,10])); 			// 0
console.log(getBiggestTemperatureIncrease([])); 					// 0



