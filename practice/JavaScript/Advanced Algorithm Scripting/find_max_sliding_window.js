let find_max_sliding_window = function(arr, window_size) {
  let result = [];
  if (window_size > arr.length) {
    return;
  }

  // store the indexes in window_
  let window_ = [];
  
  //find out max for first window
  for (let i = 0; i < window_size; i++) {
    while (window_.length > 0 
           && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    
    window_.push(i);
  }
  
  result.push(arr[window_[0]])
  
  for (let i = window_size; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window_.length > 0 
           && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    
    //remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 
        && (window_[0] <= i - window_size)) {
      window_.shift();
    }
    
    window_.push(i);
    result.push(arr[window_[0]]);
  }
  
  return result;
};

let array2 = [ -4, 2, -5, 1, -1, 6];
console.log("Window Size 3:");
console.log(find_max_sliding_window(array2, 3));

let array = [ 1, 2, 3, 4, 3, 2, 1, 2, 5 ];
console.log("Window Size 4:");
console.log(find_max_sliding_window(array, 4));

console.log("Window Size 3:");
console.log(find_max_sliding_window(array, 3));

console.log("Window Size 5:");
console.log(find_max_sliding_window(array, 5));