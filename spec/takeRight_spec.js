import { takeRight } from '../src/takeRight'

describe( 'takeRight', () => {
  it( 'uses a default size of 1', () => {
    expect( takeRight( [ 1, 2, 3] ) ).toEqual( [ 3 ] )
  })

  it( 'returns a new array of specified size from end of the input array', () => {
    expect( takeRight( [ 1, 2, 3, 4 ], 2 ) ).toEqual( [4, 3] )
  })

  it( 'returns an empty array for non-array input', () => {
    expect( takeRight( null, 2 ) ).toEqual( [] )
  })
})
