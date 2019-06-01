let binary_search_rotated = function (arr, key) {
    //TODO: Write - Your - Code

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

    // for (let i = 0; i<3;i++){

        let mid = start + Math.floor((end - start) / 2);

        console.log("Start: " + start);
        console.log("Mid: " + mid);
        console.log("End: " + end);

        if (arr[mid] === key) {
            return mid;
        }

        if (arr[mid + 1] === key){
            return mid + 1;
        }

        if (arr[start] < arr[mid]
            && key >= arr[start] && key < arr[mid]) {
            end = mid - 1;
        } else if (arr[mid] < arr[end]
            && key > arr[mid] && key <= arr[end]) {
            start = mid + 1;
        } else if (arr[start] > arr[mid]) {
            end = mid - 1;
        } else if (arr[end] < arr[mid]) {
            start = mid + 1;
        } else {
            return -1;
        }
    }

    return -1;
};

// let array = [176, 222, 1, 10, 15];
// console.log("Find index of 222:");
// console.log(binary_search_rotated(array, 222));

// console.log("Find index of 10:");
// console.log(binary_search_rotated(array, 10));

console.log("binary_search_rotated([4,5,6,1,2,3],3)	");
console.log(binary_search_rotated([4,5,6,1,2,3],3));