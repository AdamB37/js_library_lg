import { filter } from '../dist/filter'

describe( 'filter', () => {
  it( 'returns an empty array for invalid input', () => {
    expect( filter( null, a => a )).toEqual( [] )
  })

  it( 'returns an array containing elements for which iteratee returns true', () => {
    expect( filter( [1,2,3,4], a => a % 2 == 0 )).toEqual( [ 2,4 ] )
  })

  it( 'returns an empty array when iteratee does not match any elements', () => {
    expect( filter( [1,3], a => a % 2 == 0 )).toEqual( [] )
  })
})
