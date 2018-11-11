/*
default-function-arguments.js
*/

/*
===== Sample 1 =====
*/
function makeAjaxRequest(url, method){
    if (!method){   // check if method is undefined
        method = 'GET';
    }

    // logic to make the request

}

function makeAjaxRequest(url, method = 'GET'){
    return method;
}
makeAjaxRequest('google.com', null); // method will not get reassigned. Nothing will be returned
makeAjaxRequest('google.com', undefined); // method will assign to 'GET'
makeAjaxRequest('google.com', 'POST');


/*
===== Sample 2 =====
*/
function User(id){
    this.id = id;
}

function generateId(){
    return Math.random() * 9999999;
}

function createAdminUser(user){
    user.admin = true;

    return user;
}

createAdminUser(new User(generateId()));

// After refactoring (as people don't want to put parameters when creating users)
function createAdminUser(user = new User(generateId())){
    user.admin = true;

    return user;
}


/*
===== Exercise =====
Refactor:
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}
*/
function sum(a = 0, b = 0) { // a and b are reassigned when they are undefined
    return a + b;
}



/*
===== Exercise =====
Refactor:
function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
*/
function addOffset(style = {}) {
    style.offset = '10px';
    
    return style;
  }