const takeRight = ( array, size=1 ) => {
  if( ! (array instanceof Array) ) {
    return []
  }

  let result = []

  for( let index = 1; index <= size; index++ ) {
      result.push( array[ array.length - index ] )
   }

  return result
}

export { takeRight }
