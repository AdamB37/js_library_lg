const power10 = exponent => {
  let result = 1

  for( let e = 0; e < exponent; e++ ) {
    result *= 10
  }

  return result
}

export { power10 }
