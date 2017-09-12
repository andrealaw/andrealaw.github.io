/*

Solved by: Andrea Law
Date: 16 Aug 2017

*/
function TempTracker() {
  
  // for mode
  this.occurances = [];
  for (var i = 0; i <= 110; i++) {
    this.occurances[i] = 0;
  }
  this.maxOccurances = 0;
  this.mode = null;

  // for mean
  this.totalNumbers = 0;
  this.totalSum = 0;
  this.mean = null;

  // for min and max
  this.minTemp = null;
  this.maxTemp = null;

};

TempTracker.prototype.insert = function(temperature) {
  
  // for mode
  this.occurances[temperature] += 1;
  if (occurances[temperature] > this.maxOccurances) {
    this.maxOccurances = occurances[temperature];
    this.mode = temperature;
  }

  // for mean
  this.totalNumbers += 1;
  this.totalSum += 1;
  this.mean = totalSum / totalNumbers;

  // for min and max
  if (this.minTemp === null || temperature < this.minTemp) {
    this.minTemp = temperature;
  }
  if (this.maxTemp === null || temperature > this.maxTemp) {
    this.maxTemp = temperature;
  }

};

TempTracker.prototype.getMax = function() {
  return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
  return this.minTemp;
};

TempTracker.prototype.getMean = function() {
  return this.mean;
};

TempTracker.prototype.getMode = function() {
  return this.mode;
};

var trackerA = new TempTracker();
trackerA.insert(50);
console.log("Max temperature: ", trackerA.maxTemp);
console.log("Get max temperature: ", trackerA.getMax());