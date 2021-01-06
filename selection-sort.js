//this is selection sort 
function selection(arr){ // name a function selection sort that takes in a unsorted array
    for (let i =0; i < arr.length; i ++){// create first for loop that will actually be the driver for swapping
        let min = i;// set a min value with a default 
        for (let j = i+1; j < arr.length; j++){ // the second nested for loop is thow we find the minmum
            if (arr[j] < arr[min]){// if the current array value is less than the min then min becomes that postion of the array 
                min = j;//basically the vaule that we use to check against 
            }
        }
        if (i !== min){//putting this condition here will make it so we dont have any unintended iterations for no reason basically a time saver 
            let temp = arr[i]//this is our temporary value this is so when we swap we dont loose our orginal value
            arr[i] = arr[min];// this is tthe first half of the swap 
            arr[min] = temp;// this is the second half og the swap made possible by our lovely temp varible 
            // console.log(arr)// proof of life
        
        }
    }
    return arr//should come back as [1,2,3,4,5]
}
selection([3,5,1,2,4])

// algo 
// create a function that takes in a unsorted array and return a sorted array 
// create two for loops one needs to be nested the outside loop is the main driver it does the swapping 
// only after the inside loop will find will find the min value 
// inside the first loop we will need to store a deafault value for our min varible which will we will use to start our comparision
//inside the nested for loop aka the second for loop we will find 
//the min value by looping through the entire arr and comparing it with our defaulted min var
// if the current index number is less than the min var then we will switch the min var to the index number 
// and as long as the min value has changed to basically anything else then we swap
// if i is the same value as min then there is no reason to warrant a a swapp it will save time 
// because the index value is right where it needs to be  
// after the outer for loop aka the first for loop is finished then it will return the completed array 

//how selection sort works:
//basically it finds the min value in a array and it puts in the front of the line in the first iteration 
// any iteration after that it takes the min value and places it behind the previously locatated min value 
// it will do that until all of the numbers have been sorted  