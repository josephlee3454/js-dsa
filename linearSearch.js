
const linearSearch = (arr=[1,2,3,4,5,], num=4 ) => {
    for(let i = 0 ; i < arr.length; i++){
      if (arr[i] ===num){
        return i 
      }
    //   else{
    //     console.log("num not here")
    //   }
    }
    return -1
  }
  
  console.log(linearSearch())