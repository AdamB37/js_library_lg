import { nth } from '../dist/nth'

describe( 'nth', () => {

  it( 'returns the value of input position in an array ', () => {
    expect(nth([1, 2, 1, 4], 2)).toEqual(1)
  })

  it( 'returns undefined, if input is out of range of input array', () => {
    expect(nth([1, 2, 1, 4], 8)).toEqual(undefined)
  })

  it( 'returns the index value - the input from the end of the array, if input is negative', () => {
    expect(nth([1, 2, 1, 4], -2)).toEqual(1)
  })

})
