const forEach = (input, iteratee) => {
  let fn = iteratee || ( a => a )
  let target = input || []

  for( let key in target ) {
    fn( target[ key ], key, target )
  }

  return input
}

export { forEach }