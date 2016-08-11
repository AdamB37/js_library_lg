import { reverse } from '../dist/reverse'

fdescribe( 'reverse' , ( ) => {
  it( 'returns a new array with the values in inverse order from input array' , ( ) => {
    expect( reverse( [1, 2] ) ).toEqual( [2, 1] )
  })


})
