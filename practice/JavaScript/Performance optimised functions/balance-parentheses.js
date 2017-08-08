/*

Return true if a string has balanced parentheses.Else, return false.

Assumptions:
Parentheses include ( ) [ ] { }

Time complexity:	O(n)
Space complexity:	O(n)

Edge cases:
- empty string

*/
function isValid(str) {
	
	// we store the openning parentheses in a stack
	var openersStack = [];

	// then identify openers and closers with Set
	var openers = new Set(['(','[','{']);
	var closers = new Set([')',']','}']);

	// we use an object to match closers with their openers
	var openersToClosers = {
		'(': ')',
		'[': ']',
		'{': '}'
	};

	// we loop through the string to identify openers and closers
	for (var i = 0; i < str.length; i++) {
		var char = str.charAt(i);
		if (openers.has(char)) {
			openersStack.push(char);
		} else if (closers.has(char)) {
			if (!openersStack.length) {
				return false;
			} else {
				var lastOpener = openersStack.pop();

				if (openersToClosers[lastOpener] !== char) {
					return false;
				}
			}
		}
	}
	return openersStack.length === 0;
}

// test cases:
console.log(isValid("()[]{}")); // true
console.log(isValid("(()])")); // false
console.log(isValid("")); // true