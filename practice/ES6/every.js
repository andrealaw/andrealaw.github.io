/*
every.js
*/


/*
===== Sample 1 =====
Returns true if every computer has ram > 16
*/
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];
computers.every(function(computer){
    return computer.ram > 16;
});


/*
===== Sample 2 =====
*/
var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

names.every(function(name){
    return name.length > 4; // false
});



/*
===== Sample 3 =====
Use every to valid form inputs
*/
function Field(value){
    this.value = value;
}

Field.prototype.validate = function(){
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("06/11/2018");

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field){
    return fields.validate();
});

if (formIsValid){
    // allow user to submit
} else {
    // show an error message
}



/*
===== Exercise =====
Check if all users submitted their forms
*/

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function (user) {
    return user.hasSubmitted;
});