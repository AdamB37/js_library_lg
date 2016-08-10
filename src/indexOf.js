const indexOf = (arr, value, start=0) => {
  if( ! (arr instanceof Array) ) {
    return -1
  }

  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }

  return -1
}

export { indexOf }
