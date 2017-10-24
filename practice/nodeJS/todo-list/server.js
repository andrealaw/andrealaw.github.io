/*

server.js

Develop a simple Node.JS server to handle a TODO list for user.
Run on local Node.JS server with the following APIs. 

Assumptions
- You can choose what methods to use for each API and their respective request and response formats
- NO frontend development is required
- All TODO Items are stored in Google Firebase (it’s free to use) 
- NO Authentication is required

Development environment
- npm 3.10.10
- node v6.11.0

*/

'use strict';

// [START imports]
var admin = require("firebase-admin");
// [END imports]

// [START initialize]
// Initialize the app with a service account, granting admin privileges
var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-list-cee06.firebaseio.com"
});
// [END initialize]

// Get a database reference to the TODO list database
var db = admin.database();
var ref = db.ref("/");

/**
 * API 1) Add a TODO Item with the following data 
 */
// [START API 1]
function addTodoItem(userId, name, deadline) {

  // Add a new todo item
  var itemsRef = ref.child("items");
  var newItemRef = itemsRef.push();
  newItemRef.set({
    "User ID": userId,
    "TODO Name": name,
    "TODO Deadline": deadline,
    "TODO Created Time": new Date().toString()
  });

  var itemId = newItemRef.key;
  console.log("A new TODO item with ID " + itemId + " is created.");  
  return itemId;
}
// Test cases:
// addTodoItem("u1", "Go to the bank", "Wed Aug 30 2017 02:25:06 GMT+0800 (HKT)");
// addTodoItem("u1", "Pay the phone bill", "Tue Aug 6 2017 10:00:19 GMT+0800 (HKT)");
// addTodoItem("u2", "Check exam results", "Sat Aug 12 2017 16:00:19 GMT+0800 (HKT)");
// addTodoItem("u3", "Meet Mary", "Fri Aug 4 2017 10:00:19 GMT+0800 (HKT)");
// [END API 1]


/**
 * API 2) Read a TODO Item
 */
// [START API 2]
function readToDoItem(todoId) {

  var itemRef = ref.child("items/" + todoId);
  itemRef.on("value", function(snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("Cannot read a TODO item with TODO ID %s that does not exist.", todoId);
      return null;
    }
  }, function (errorObject) {
    console.log("readToDoItem failed: " + errorObject.code);
  });

}
// Test cases
// readToDoItem("-KqOJp4UJ7dENQwW-Jsd"); // return a TODO item
// readToDoItem("abc"); // return null
// [END API 2]


/**
 * API 3) Change the Deadline of a TODO item
 */
// [START API 3]
function changeTodoDeadline(todoId, deadline) {

  var itemRef = ref.child("items/" + todoId);
  itemRef.update({
    "TODO Deadline": deadline
  });
  console.log("TODO deadline for item " + todoId + " is updated to " + deadline);

  itemRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("changeTodoDeadline failed: " + errorObject.code);
  });

}
// Test cases
// changeTodoDeadline("-KqJy2hrhuUMTrrQZva5", "November 2");
// [END API 3]


/**
 * API 4) Delete a TODO item
 */
// [START API 4]
function deleteTodoItem(todoId) {

var itemRef = ref.child("items/" + todoId);

  itemRef.once("value")
  .then(function(snapshot) {
    // return Success if itemRef contains any data. Else return Error
    if (snapshot.exists()) {
      console.log("TODO item %s removed successfully.", todoId);
      return "Success";
    } else {
      console.log("TODO item %s does not exist. Cannot be removed.", todoId);
      return "Error";
    }
  })
  .catch(function(error) {
    console.log("deleteTodoItem failed: " +  error.code);
  });

}

// Test cases
// deleteTodoItem("-KqOJp4UJ7dENQwW-Jsd"); // return Success for a valid itemId
// deleteTodoItem("abc"); // return Error
// [END API 4]


/**
 * API 5) List all TODO items of a user ID in an array
 */
// [START API 5]
function listAllTodoItems(userId) {

  var itemRef = ref.child("items");
  itemRef.orderByChild("User ID").equalTo(userId).on("child_added", function(snapshot) {
    console.log(snapshot.val());
    return snapshot.val();
  });

}
// Test cases
// listAllTodoItems("u1");
// listAllTodoItems("u2");
// listAllTodoItems("u3");
// [END API 5]
