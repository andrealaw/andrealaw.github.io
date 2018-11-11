/*
enhanced-object-literals.js
*/


/*
===== Sample 1 =====
Create a function to create an inventory
*/
function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.map((total, bookValue) => total + bookValue, 0);
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue(); // 25
bookShop.priceForTitle('Harry Potter'); // 10

// After refactoring
function createBookShop(inventory){
    return {
        inventory, // refactored: remove the value with the same name
        inventoryValue(){ // refactored: remove ": function"
            return this.inventory.map((total, bookValue) => total + bookValue, 0);
        },
        priceForTitle(title){// refactored: remove ": function"
            return this.inventory.find(book => book.title === title).price;
        }
    };
}




/*
===== Sample 2 =====
*/
function saveFile(){
    $.ajax({ method: 'POST', url: url, data: data });
}

const url = "http://fileupload.com";
const data = { color: 'red'};

saveFile(url, data);

// ES6
function saveFile(){
    $.ajax({ 
        data, 
        url, 
        method: 'POST' 
    });
}

const url = "http://fileupload.com";
const data = { color: 'red'};

saveFile(url, data);




/*
===== Exercise =====
Refactor:
const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red: red, blue: blue };
*/
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };




/*
===== Exercise =====
Refactor:

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };
*/
const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

/*
===== Exercise =====
Refactor:

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}
*/
const canvasDimensions = (width, initialHeight) => {
    const height = initialHeight * 9 /16;
    return { 
      width, 
      height 
    };
  }



/*
===== Exercise =====
Refactor:

const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
*/
const color = 'red';

const Car = {
  color: color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};