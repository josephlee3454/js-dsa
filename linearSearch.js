

///big-O is best 0(1) worst O(n) average 0(n)



const linearSearch = (arr=[1,2,3,4,5,], num=4 ) => {
    for(let i = 0 ; i < arr.length; i++){//visists each array position until num is found 
      if (arr[i] ===num){
        return i 
      }
    //   else{
    //     console.log("num not here")
    //   }
    }
    return -1//if it doesnt find the number then it returns -1
  }
  
  console.log(linearSearch())