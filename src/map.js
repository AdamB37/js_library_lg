const map = (input, iteratee) => {
  let fn = iteratee || ( a => a )

  if( input instanceof Array || typeof( input ) === 'string' || typeof( input ) === 'object') {
    return objectMap( input, fn )
  } else {
    return []
  }
}

const objectMap = (input, fn) => {
  let result = []

  for( let key in input ) {
    result.push( fn( input[ key ], key, input ))
  }

  return result
}

export { map }