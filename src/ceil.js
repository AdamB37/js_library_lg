import { power10 } from './util/power10'

const mathCeil = (number, precision=0) => {
  const power = power10( precision )

  if( number > 0 ) {
    return parseInt( 0.9 + number * power ) / power
  } else if ( precision === 0 ) {
    return parseInt( number )
  } else {
    return -1 * parseInt( -1 * number * power ) / power 
  }
}

export { mathCeil }
