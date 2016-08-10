const mathMax = ( array ) => {
  if( !(array instanceof Array) ) {
    return undefined
  }

  let largestNum = array[0]

  for( var el of array ) {
    if( el  > largestNum) {
      largestNum = el
    }
  }

  return largestNum
}

export { mathMax }
