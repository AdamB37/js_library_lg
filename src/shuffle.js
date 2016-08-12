const shuffle = array => {
  let result = [ ...array ]

  for( let index = 0; index < array.length; index++ ) {
    const randomIndex = Math.floor( Math.random() * array.length )
    const temp = result[ index ]
    result[ index ] = result[ randomIndex ]
    result[ randomIndex ] = temp
  }

  return result
}

export { shuffle }
