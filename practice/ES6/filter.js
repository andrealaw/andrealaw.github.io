/*
filter.js
*/


/*
===== Sample 1 =====
*/

var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' }
];

// without filter
var filteredProducts = [];
for (var i = 0; i < products.length; i++){
    if (product[i].type === 'fruit'){
        filteredProducts.push(products[i]);
    }
}

// refactored with filter
// return true will show the record
// return false will filter out the record
products.filter(function(product){
    return product.type === 'fruit'; 
});



/*
===== Sample 2 =====
Filter arrays of objects by their properties
*/
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

products.filter(function(product){
    return product.type === 'vegetable'
        && product.quantity > 0
        && product.price < 9;
});



/*
===== Sample 3 =====
Filter arrays of objects by a common property from another object
*/
var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
];

function commentForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}

commentForPost(post, comments);



/*
===== Exercise =====
Filter by values
*/
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

filteredNumbers; // [55,65,75,85,95]



/*
===== Exercise =====
Filter by property values of objects in an array
*/
var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = users.filter(function(user){
       return user.admin === true;
   });
   
   filteredUsers; // [{"id":1,"admin":true},{"id":5,"admin":true}]



/*
===== Exercise =====
Create a function called "reject" that works in the opposite way of filter
*/
function reject(array, iteratorFunction) {
    return array.filter(function(e){
        return !iteratorFunction(e);
    });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
    return number > 15;
});
  
lessThanFifteen;