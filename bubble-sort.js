// this the bubble sort 
function bubbleSort(arr){
    for (let j = 0 ; j < arr.length; j++){
        // console.log(arr)
        for (let i = 0; i < arr.length; i++){
            if (arr[i]>arr[i+1]){
                let temp =  arr[i];//need to keep a temp varible so you dont loose the the value
                arr[i] = arr[i+1];// this is where we swap 
                arr[i+1]=temp;//and swap it with the temp the whole reason we keep this 
            }
        }
    }
    return arr;
}
arr = [4,3,5,2,1]
console.log(bubbleSort(arr));


// Algo:
// create function name bubble sort and return a sorted array 
// create two loops one will be nested so we can continue to do the looping process
// create a if statement that checks the numbers against the number to the right 
// create temp varible so we dont loose the the index postion on every iteration 


// How it works: 
// the way this function works is we take a sorted array by checking if the number to the right of it is greater or less
// than the number that is to the left 
// if the number is greater than the value at that position then the numbers dont swap it stays there 
// instead it takes that number and checks it against the next the next number 
// if the number to the right is less than the number than it moves to the left and swaps with the current number thats is doing
// the checking and that number is being checked will move to the right and continue to be the number that is being checked against
// until it meets a number that is greater then it it will do the appropriate swap until the length of the list is met 
