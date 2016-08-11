import { reverse } from '../dist/reverse'

describe( 'reverse' , ( ) => {
  it( 'mutates input array with so that values are in inverse order' , ( ) => {
    expect( reverse( [1, 2, 3] ) ).toEqual( [3, 2, 1] )
  })

  it( 'returns an empty array when input value is not an array' , ( ) => {
    expect( reverse( 'f' ) ).toEqual( [] )
  })

})
