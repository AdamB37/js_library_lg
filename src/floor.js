import { power10 } from './util/power10'

const mathFloor = (number, precision=0) => {
  if( number > 0 || precision > 0 ) {
    const power = power10( precision )

    return parseInt( number * power ) / power
  } else {
    return parseInt( number - 0.5 )
  }
}

export { mathFloor }
