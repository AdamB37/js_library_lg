import { take } from '../src/take'

describe( 'take', () => {
  it( 'uses a default size of 1', () => {
    expect( take( [ 1, 2, 3] ) ).toEqual( [ 1 ] )
  })

  it( 'returns an array of specified size from start of array', () => {
    expect( take( [ 1, 2, 3, 4 ], 2 ) ).toEqual( [1, 2] )
  })

  it( 'returns an empty array for input size greater than array length', () => {
    expect( take( [ 1, 2, 3, 4 ], 8 ) ).toEqual( [] )
  })
  
  it( 'returns an empty array for non-array input', () => {
    expect( take( null, 2 ) ).toEqual( [] )
  })
})
