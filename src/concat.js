const concat = ( ...args ) => {
  let result = []

  for( let index = 0; index < args.length; index++ ) {
    const argument = args[ index ]

    if( argument instanceof Array ) {
      for( let inner = 0; inner < argument.length; inner++ ) {
        result.push( argument[ inner ] )
      }
    } else {
      result.push( argument )
    }
  }

  return result
}

export { concat }
