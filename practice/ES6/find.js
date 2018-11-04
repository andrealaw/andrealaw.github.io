/*
find.js
*/


/*
===== Sample 1 =====
*/
var users = [
    { name: 'Jill'},
    { name: 'Alex'},
    { name: 'Bill'}
];

// without find
for (var i = 0; i < users.length; i++){
    if (users[i].name === 'Alex'){
        user = users[i];
        break;
    }
}

// with find
users.find(function(user){
    return user.name === 'Alex';
});



/*
===== Sample 2 =====
*/
function Car(model){
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

cars.find(function(car){
    return car.model === 'Focus'; // {"model":"Focus"}
});



/*
===== Sample 3 =====
*/
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post'}
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
};

postForComment(posts, comment); // {"id":1,"title":"New Post"}



/*
===== Exercise =====
*/
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

var admin = users.find(function (user) {
    return user.admin;
});

admin; // {"id":3,"admin":true}



/*
===== Exercise =====
*/
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

var account = accounts.find(function (account) {
    return account.balance === 12;
});

account; // {"balance":12}



/*
===== Exercise =====
*/
var criteria = { height: 20 };

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria){
  var p = Object.keys(criteria)[0];
  return array.find(function(obj){
  	return obj[p] === criteria[p];
  });
};

findWhere(ladders, criteria); // {"id":1,"height":20}