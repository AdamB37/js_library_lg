const indexOf = (arr, value, start) => {
  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value){
      return i
    }else
      return -1
  }
}


export { indexOf }
