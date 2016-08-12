const reduce = ( collection, iteratee, memo ) => {
  let total = memo

  for( const key in collection ) {
    if( total === undefined ) {
      total = collection[ key ]
    } else {
      total = iteratee( total, collection[ key ], key, collection )
    }
  }

  return total
}

export { reduce }