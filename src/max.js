const mathMax = ( array ) => {
let largestNum = array[0]
  for( var el of array ) {
      if ( el  > largestNum) {
        largestNum = el
    }
  }
  return largestNum
}


// do I have to put a for loop in here?
export { mathMax }
