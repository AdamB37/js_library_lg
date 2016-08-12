import { head } from '../dist/head'

describe( 'head', () => {

  it( 'returns the value of first position in an array ', () => {
    expect( head( [1, 2, 1, 4] ) ).toEqual(1)
  })

  it( 'returns -1, if input is not an array', () => {
    expect( head( {1: 2, 1: 4} ) ).toEqual(-1)
  })

})
