
//this is a insertion sort problem 
function insertionSort(arr) {// cfeate function the takes in a array 

        for (let i = 1; i < arr.length; i++) {// outer loop this loops throught the whole array starting at the first index to save an iteration

            let current = arr[i];// this our fancy term for temp var that we set so we dont loose the the value of the array  
        
            let j = i-1; // subtract 1 so we get the index back to 0 
            while ((j > -1) && (current < arr[j])) { // this is willl happen as long as j which is a basically the postion behind the index postion of our first loop
                // dosnt == 0 and the current "the fancy temp var we made on line 7  " is less the the arr postion behind it 
                // basically if that condition is met then it swaps the two postions where the small goes to the front of the array depending on the value
                arr[j+1] = arr[j];// this is the swap we swap the bigger one to the right 
                j--;// we take one away from from j so we can finish the swap
                console.log( arr)
            }
            //below is a fancy way of just doing arr[j] = current 
            arr[j+1] = current;// since we took one way from j this is basically the way the way we move the lowest to the left also known as the front odf the arr
            console.log( arr)
        }
    return arr;
}
console.log(insertionSort([4,2,5,3,1]))

// how insertion sott works: 
// insertion sort basically takes a number and puts it in the right place that is the higher overall veiw 
// but waht i mean by my first statement is that basically it takes the  number and compares it against the rest the rest of the list until it finds its spot 



//algo 
//create a function that takes in a array the goal is to return a sorted array 
// we make two loops one loop that iterates throught the entire list and another one that is nested and does the swap 
// the second loop will loop as long as the we have the right index and our current val is less than the spot before it 