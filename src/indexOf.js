const indexOf = (arr, value, start) => {
for (var i = start; i < arr.length; i++) {
    if (arr[i] === value){
      let theIndex = i
      return theIndex
    }else
      return -1
  }
}


export { indexOf }
