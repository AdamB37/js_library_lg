const tail = ( array ) => {
  let newArray = [ ]
    for( var i = 1; i < array.length; i++ ) {
        newArray.push( array[i] )
    }
    return newArray
  }


export { tail }
