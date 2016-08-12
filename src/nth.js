const nth = ( arr, value ) => {
  for ( var i = 0; i < arr.length; i++ ) {

    if ( arr[i] === value ){
      return i
    }

    else if ( value < 0 ){
      let adjustedIndex = arr.length + value
      return arr[ adjustedIndex ]
    }

  }
}


export { nth }
