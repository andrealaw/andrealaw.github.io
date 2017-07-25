/*

Exact Change
Written by: Andrea Law for a freecodecamp challenge


Requirement: 

Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and 
cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order.


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

function checkCashRegister(price, cash, cid) {
  var change = [];
  var diff = cash - price;
  var remaining = cash - price;
  var changeVal = 0;
  // Here is your change, ma'am.
  
  // concat the arrays in cid and sum the numbers
  var sum = cid.reduce(function(a,b) {
    return a.concat(b).filter(function(val) {
      return typeof val === 'number' && val > 0;
    });
  }, []).reduce(function(a,b) {
    return a + b;
  }, 0);
  
  // create an object to sum
  var obj = {};
  cid.forEach(function(arr) {
    obj[arr[0]] = arr[1];
  });
  
  // round to 2 d.p.
  function round(value) {
    return Number(Math.round(value+'e2')+'e-2');
  }
  
  // add array to change
  function getChange(cur,val) {
    var num = 0.00;
    while (remaining/val >= 1 && obj[cur] !== 0) {
      obj[cur] -= val;
      remaining -= val;
      num += 1;
      changeVal += val;
      remaining = round(remaining); // to fix 0.01 becomes 0.0099
    }
    
    // add only when change in this value is required
    if (num > 0) {
      change.push([cur, val * num]);
    }
  }
  
    getChange("ONE HUNDRED",100.00);
    getChange("TWENTY",20.00);
    getChange("TEN",10.00);
    getChange("FIVE",5.00);
    getChange("ONE",1.00);
    getChange("QUARTER",0.25);
    getChange("DIME",0.10);
    getChange("NICKEL",0.05);
    getChange("PENNY",0.01);
    
    changeVal = round(changeVal);
  
    // not enough change.
    if (diff > sum || diff > changeVal) {
       return "Insufficient Funds";
    }
  
    // enough money. use all changes.
    if (diff == changeVal && sum == changeVal) {
       return "Closed";
    }
  
    // enough money. not use all changes.
    if (diff == changeVal && sum > changeVal) {
       return change;
    }
       
  // enough money. has changes left
  return change;

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// Test cases:

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return "Closed".

