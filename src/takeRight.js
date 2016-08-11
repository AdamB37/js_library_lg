const takeRight = ( array, size=1 ) => {
  if( ! (array instanceof Array) ) {
    return []
  }

  let result = []

  for( let index = array.length-1; index >= size || index === size; index--) {
      result.push(array[index])

   }


  return result
}

export { takeRight }
