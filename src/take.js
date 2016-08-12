const take = ( array, size=1 ) => {
  if( ! (array instanceof Array) ) {
    return []
  }

  if( size > array.length ) {
    return []
  }

  let result = []

  for( let index = 0; index < size; index ++) {
    result.push(array[index])
   }

  return result
}

export { take }
