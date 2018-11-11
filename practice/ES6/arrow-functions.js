/*
arrow-functions.js
*/


/*
===== Sample 1 =====
*/

// Before
const add = function(a, b){
    return a + b;
}

// ES6 - version 1
const add = (a, b) => {
    return a + b;
}

// ES6 - version 2
// good for short return statements
const add = (a, b) => a + b;

const newSum = add(1,2);




/*
===== Sample 2 =====
*/
// ES5
const double = function(number){
    return 2 * number;
}

double(8);

// ES6
// We can remove the brackets around the parameter if that is only one parameter
const double = number => 2 * number;

double(8);




/*
===== Sample 3 =====
Keep the bracket if there is no argument
*/
const hello = () => `Hi, how are you?`;

hello();



/*
===== Sample 4 =====
Refactor with the map helper to reduce the amount of code
*/
const numbers = [1,2,3];

numbers.map(number => number * 2);



/*
===== Sample 5 =====
*/

// Version 1 - use bind()
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
        return this.members.map(function(member){
            return `${member} is on team ${this.teamName}`;
        }).bind(this);
    }
};

// Version 2 - use a variable
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
        const self = this;
        return this.members.map(function(member){
            return `${member} is on team ${self.teamName}`;
        });
    }
};

// Version 3 - use fat arrow
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function(){
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};




/*
===== Exercise =====
const fibonacci = function(n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
===== Exercise =====
Fat arrow is not always the solution
*/
const profile = {
    name: 'Alex',
    getName: function(){ return this.name }
};