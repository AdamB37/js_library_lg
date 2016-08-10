const chunk = ( collection, chunkSize=1 ) => {
  if( ! (collection instanceof Array) ) {
    return []
  }

  let result = []

  for( let index = 0; index < collection.length; index += chunkSize ) {
    let babyResult = []

    for( let baby = 0; baby < chunkSize && index + baby < collection.length; baby++ ) {
      babyResult.push( collection[ index + baby ] )
    }

    result.push( babyResult )
  }


  return result
}

export { chunk }
