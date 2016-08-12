const head = ( arr) => {
  if( ! (arr instanceof Array) ) {
    return -1
  }

 return arr[ 0 ]
}

export { head }
