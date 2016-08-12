const find = ( collection, value ) => {
  for( let index = 0; index < collection.length; index++ ) {
    if( value === collection[ index ] ) {
      return value
    }
  }

  return undefined
}

export { find }
