function binarySearch(arr, elem) {
    let start = 0;// make a start var that is first index
    let end = arr.length-1 // make a end var as lat index
    let middle = Math.floor((start+end)/2)//find the vaerage between the 2 indexs and thats the middle
    while (arr[middle] !== elem && start <= end){//as long as the middle dosnt eqaul the element we loop
      if (elem < arr[middle]){//if the elem is smaller than the middle we minus 1 to keep gpoing down to find it 
        end=middle-1
  
      }
      else{// else we add to go up for the element we are looking for 
        start=middle + 1
      }
      middle = Math.floor((start+end)/2)
    }
    console.log(start,middle,end)
    if (arr[middle]===elem){//so we only return the elem if it is the one we are looking for 

        return middle
    }
    else {//else if it is not what we are looking for then we return -1 
        return -1
    }
  }
  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5))
  
  
  