import { shuffle } from '../src/shuffle'

describe( 'shuffle', () => {
  it( 'creates an array of shuffled values, using a version of the Fisher-Yates shuffle', () => {
    const array = [ 1, 2, 3, 4 ]
    expect( shuffle( array )[ 0 ] ).not.toEqual( array[ 0 ] )
  })
})
