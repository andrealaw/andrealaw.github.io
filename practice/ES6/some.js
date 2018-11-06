/*
some.js
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
computers.some(function(computer){
    return computer.ram > 16; // true
});




/*
===== Sample 2 =====
*/
var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

names.some(function(name){
    return name.length > 4; // true
});


/*
===== Exercise =====
Check if any network request has a status of "pending"
*/
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  
  var inProgress = requests.some(function(request){
      return request.status === 'pending'; // true
  });