/*
template-string.js
*/


/*
===== Sample 1 =====
*/

// ES5
function getMessage(){
    const year = new Date().getFullYear();
    return "The year is " + year;
}

getMessage();

// ES6
function getMessage(){
    const year = new Date().getFullYear();
    return `The year is ${year}`; // 2018
    // return `The year is ${year + 1}`; // 2019
    // return `The year is ${year + 2}`; // 2020

    // return `The year is ${new Date().getFullYear()}`; // 2018
}

getMessage();




/*
===== Sample 2 =====
*/
// PHP way:
// $data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

const device_id = 4;
const guid = 20;
const username = "mary";

// ES5 way:
const data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","}';

// ES6 way:
// Quote in back tags
// replace quotes and plus signs
const data = '{"device_id":"${device_id}","guid":"${guid}","username":"${username}","}';



/**
 * Exercise
 * -refactor
 */
function doubleMessage(number) {
    return "Your number doubled is " + (2 * number);
}

// After
function doubleMessage(number) {
    return `Your number doubled is ${2 * number}`;
}



/**
 * Exercise
 * -refactor
 */
function fullName(firstName, lastName) {
    return firstName + lastName;
}

// After
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`; // "Billy Jean"
  }