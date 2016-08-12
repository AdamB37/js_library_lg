const filter = ( collection, predicate ) => {
  if( collection === undefined || collection === null ) {
    return []
  }

  const fn = predicate || ( a => a )
  let result = []

  for( let index = 0; index < collection.length; index++ ) {
    if( predicate( collection[index] ) ) {
      result.push( collection[ index ])
    }
  }

  return result
}

export { filter }
