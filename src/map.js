const map = (input, iteratee) => {
  let fn = iteratee || ( a => a )
  let target = input || []
  let result = []

  for( let key in target ) {
    result.push( fn( target[ key ], key, target ))
  }

  return result
}


export { map }
