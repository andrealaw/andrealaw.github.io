function isValid(str) {
    // create pairs for matching parentheses
    var openerPairs = {
        "(":")",
        "[":"]",
        "{":"}"
    }
    
    // create Sets for checking existence
    var openers = new Set(["(","[","{"]);
    var closers = new Set([")","]","}"]);
    
    // create stack to store the openning openers
    var openerStack = [];
    
    // loop though the string to find openers and closers
    for (var i = 0; i < str.length; i++) {
    	var char = str.charAt(i);
        
        if (openers.has(char)) {
        	openerStack.push(char);
        } else if (closers.has(char)) {
            // case: no more openers
            if (!openerStack.length) {
            	return false;
            } else {
            // case: cannot find the opener
             	lastOpener = openerStack.pop();
                
                if (openerPairs[lastOpener] !== char) {
                	return false;
                }
            }
        }
    }
    
    // return true for valid parentheses
    return true;
}

console.time("ES5-1");
// run your function through some test cases here
// remember: debugging is half the battle!
console.log(isValid("{ [ ( ] ) }")); 	// return false
console.timeEnd("ES5-1");
console.log(isValid("[[((())]]}")); 	// return false
console.log(isValid("()[]{}(())")); 	// return true
