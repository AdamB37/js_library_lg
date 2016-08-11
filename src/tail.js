const tail = (array) => {
  let newArray = []
    for( var el of array ) {
      if( el > array[0]) {
        newArray.push(el)
    }
  }
  return newArray
}

export { tail }
